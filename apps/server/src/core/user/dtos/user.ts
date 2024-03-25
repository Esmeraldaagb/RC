// import joi from "joi";
import { UserModelSchema } from "@api/prisma/zod";
import { z } from "zod";

export const CreateUserSchema = UserModelSchema.pick({
  email: true,
  password: true,
});

export const UpdateUserSchema = z.object({
  id: z.number(),
  firebase_token: z.string(),
  email: z.string().optional(),
  user_picture: z.string().optional(),
  device_token: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  company_identifier_number: z.string().optional(),
  region: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone_number: z.string().optional(),
  roles: z.string().optional(),
});

export const UserResponseDto = z.object({
  id: z.number(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
