import * as trpcExpress from "@trpc/server/adapters/express";
import {
  createOpenApiExpressMiddleware,
  generateOpenApiDocument,
} from "trpc-openapi";

import { version } from "../../package.json";
import { env } from "../utils/env";
import { createContext } from "./context";
import { appRouter } from "./router";

export type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const trpcExpressMiddleware = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
  onError: ({ path, error }: any) => {
    console.error("Error:", path, error);
  },
});

export const trpcOpenapiHttpHandler = createOpenApiExpressMiddleware({
  router: appRouter,
  createContext,
});

