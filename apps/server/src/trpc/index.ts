import { Logger, Roles } from "@api/utils";
import { initTRPC, TRPCError } from "@trpc/server";

import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;

const isAuthed = middleware((opts) => {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});

const isAuthedAsAdmin = middleware((opts) => {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "User not found" });
  }
  if (ctx.user.role !== Roles.ADMIN) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "User not an admin" });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});

const isAuthedAsUser = middleware((opts) => {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "User not found" });
  }
  if (ctx.user.role !== Roles.USER) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "User not a user" });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const loggerMiddleware = middleware(async (opts) => {
  const start = Date.now();
  const result = await opts.next();
  const duration = Date.now() - start;
  const meta = {
    path: opts.path,
    type: opts.type,
    duration,
    context: opts.ctx,
  };

  if (result.ok) {
    Logger.info("Ok request timing", meta);
  } else {
    Logger.error("Error request timing", meta);
  }
  return result;
});

// you can reuse this for any procedure
export const protectedProcedureAuth = t.procedure
  .use(isAuthed)
  .use(loggerMiddleware);
export const protectedAsAdminProcedure = t.procedure
  .use(isAuthedAsAdmin)
  .use(loggerMiddleware);
export const protectedAsUserProcedure = t.procedure
  .use(isAuthedAsUser)
  .use(loggerMiddleware);
