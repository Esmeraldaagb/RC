import * as trpcExpress from "@trpc/server/adapters/express";
import {
  createOpenApiExpressMiddleware,
  generateOpenApiDocument,
} from "trpc-openapi";

import { version } from "../../package.json";
import { env } from "../utils/env";
import { createContext } from "./context";
import { appRouter } from "./router";

const description = `
  <h3>Cargo54 Server API</h3>
  <p>Github: <a href="https://github.com/orionorigin23/benincargo" target="_blank">https://github.com/orionorigin23/benincargo</a></p>
`.trim();
export const trpcOpenapiDocument = generateOpenApiDocument(appRouter, {
  title: "Cargo54 OpenAPI",
  description,
  version: `v${version}`,
  baseUrl: `http://localhost:${env.port}/api`,
});
