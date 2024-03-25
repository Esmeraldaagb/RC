import {
  protectedAsAdminProcedure,
  protectedAsUserProcedure,
  protectedProcedureAuth,
  publicProcedure,
  router,
} from "@api/trpc";
import { z } from "zod";

import { CreateUserSchema, UpdateUserSchema } from "./dtos/user";
import { createUserEmailAndPassword } from "./mutations/createFirebaseUser";
import { createUserMutation } from "./mutations/createUser";
import { deleteUserMutation } from "./mutations/deleteUser";
import { updateUserMutation } from "./mutations/updateUser";
import { getUserByQuery } from "./queries/getUser";

export const userRouter = router({
  me: protectedAsUserProcedure.input(z.object({})).query(async ({ ctx }) => {
    return ctx.user;
  }),
  createNewUser: publicProcedure
    .input(CreateUserSchema)
    .mutation(createUserMutation),

  createFirebaseUserFromServer: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
        first_name: z.string().optional(),
        last_name: z.string().optional(),
        phoneNumber: z.string().optional(),
      }),
    )
    .mutation(createUserEmailAndPassword),
  updateUser: publicProcedure
    .input(UpdateUserSchema)
    .mutation(updateUserMutation),
  deleteUser: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(deleteUserMutation),
  userByEmail: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(getUserByQuery),
});
export type UserRouter = typeof userRouter;
