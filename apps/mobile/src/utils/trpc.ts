import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@cargo54/api/src/trpc/router";

export const Trpc = createTRPCReact<AppRouter>();
