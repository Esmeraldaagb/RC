export const Roles = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export type Role = keyof typeof Roles;

export enum RoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}
