import { packageRouter } from "@api/core/package/package.router";
import { userRouter } from "@api/core/user/user.router";
import { publicProcedure, router } from "@api/trpc";

export const appRouter = router({
  health: publicProcedure.query(() => "Ok!"),
  user: userRouter,
  package: packageRouter,
});
export type AppRouter = typeof appRouter;
