import { z } from "zod";

export const createUserDto = z.object({
  email: z.string().email(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone_number: z.string(),
  country: z
    .string()
    .regex(/(BJ|CI)/)
    .optional(),
  user_picture: z.string().optional(),
  device_token: z.string().optional(),
  firebase_token: z.string().optional(),
  company_identifier_number: z.string().optional(),
  company_name: z.string().optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
});

export const signupWithPhoneNumberDto = z.object({
  phone_number: z.string(),
});

export const updateUserDto = z.object({
  id: z.number(),
  email: z.string().email().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone_number: z.string().optional(),
  country: z
    .string()
    .regex(/(BJ|CI)/)
    .optional(),
  user_picture: z.string().optional(),
  device_token: z.string().optional(),
  firebase_token: z.string().optional(),
  company_identifier_number: z.string().optional(),
  company_name: z.string().optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  //password: z.string(),
});

// const validateUserUserInputDto = (data: any) => {
//   const schema = joi.object({
//     email: joi.string(),
//     password: joi.string(),
//   });
//   return schema.validate(data);
// };

export const UserResponseDto = z.object({
  id: z.number(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserType = {
  email: string;
  first_name: string;
  last_name: string;
  display_name?: string;
  user_picture?: string;
  device_token?: string;
  firebase_token?: string;
  phone_number?: String;
  company_identifier_number?: String;
  company_name?: String;
  address_line1?: String;
  address_line2?: String;
  city?: String;
  region?: String;
  country: "BJ" | "CI";
};
