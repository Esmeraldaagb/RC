import { createContext } from "@api/trpc/context";
import { trpcOpenapiDocument } from "@api/trpc/openapi";
import { appRouter } from "@api/trpc/router";
import { trpcExpressMiddleware, trpcOpenapiHttpHandler } from "@api/trpc/trpc";
import { env } from "@api/utils/env";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import swaggerUI from "swagger-ui-express";
import { expressHandler } from "trpc-playground/handlers/express";

const apiEndpoint = "/trpc";
const playgroundEndpoint = "/trpc-playground";

const runApp = async () => {
  const app = express();
  app.use(express.json());
  // http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
  app.disable("x-powered-by");

  app.use(
    apiEndpoint,
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

  if (env.allowOpenapi) {
    app.use("/open/_ui", swaggerUI.serve, swaggerUI.setup(trpcOpenapiDocument));
    app.use("/open/_document", (req, res) => res.send(trpcOpenapiDocument));
    app.use("/open", trpcOpenapiHttpHandler);
  }

  // disable playground in dev mode

  if (!env.isProd) {
    app.use(
      playgroundEndpoint,
      await expressHandler({
        trpcApiEndpoint: apiEndpoint,
        playgroundEndpoint,
        router: appRouter,
      }),
    );
  }

  app.listen(env.port, () =>
    console.log(`Server is running on port ${env.port}.`),
  );
};

runApp();
