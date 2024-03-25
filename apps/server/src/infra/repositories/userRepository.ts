import { prisma } from "@api/prisma/client";
import { FirebaseService } from "@api/utils/firebase";
import { Prisma } from "@prisma/client";

const FirebaseServiceClient = new FirebaseService();

const userSelect = {
  id: true,
  email: true,
  first_name: true,
  last_name: true,
  display_name: true,
  phone_number: true,
  country: true,
  city: true,
  region: true,
  address_line1: true,
  address_line2: true,
  user_picture: true,
  company_identifier_number: true,
  company_name: true,
  roles: true,
  createdAt: true,
  updatedAt: true,
};

const getDisplayName = (first_name: string, last_name: string) => {
  if (first_name && last_name) {
    return `${first_name} ${last_name}`;
  } else if (first_name) {
    return first_name;
  } else if (last_name) {
    return last_name;
  }
  return "";
};

export class UserRepository {
  async createUser(user: any): Promise<any> {
    return await prisma.user.create({
      data: {
        ...user,
      },
    });
  }

  async updateUser(user: any): Promise<any> {
    let id = user.id;
    try {
      let response = await this.getUserFirebaseToken(id);
      delete user.id;

      const firebaseUser = await FirebaseServiceClient.updateUser(
        response.firebase_token,
        {
          ...user,
        },
      );
      if (firebaseUser.success) {
        return await prisma.user.update({
          select: userSelect,
          data: {
            ...user,
          },
          where: { id: id },
        });
      } else {
        throw new Error("Error updating user");
      }
    } catch (error) {
      throw new Error("User not found");
    }
  }

  async deleteUser(user: any): Promise<any> {
    try {
      let response = await this.getUserFirebaseToken(user.id);
      const firebaseUser = await FirebaseServiceClient.deleteUserAccount(
        response.firebase_token,
      );
      if (firebaseUser.success) {
        return await prisma.user.delete({
          where: { id: user.id },
        });
      } else {
        throw new Error("Error deleting user");
      }
    } catch (error) {
      throw new Error("User not found");
    }
  }

  async createUserWithEmailAndPassword(user: any): Promise<any> {
    const { email, password, first_name, last_name, phoneNumber } = user;
    const displayName = getDisplayName(first_name, last_name);
    const firebaseUser = (await FirebaseServiceClient.createUser({
      email,
      password,
      phoneNumber,
      displayName,
    })) as any;

    if (firebaseUser.success) {
      return await prisma.user.create({
        select: userSelect,
        data: {
          firebase_token: firebaseUser?.user.uid,
          email: firebaseUser?.user.email,
          first_name,
          last_name,
          phone_number: phoneNumber,
          display_name: displayName,
        } as Prisma.UserCreateInput,
      });
    } else {
      throw new Error(firebaseUser.error);
    }
  }

  async getUserByFirebaseId(user: any): Promise<any | null> {
    return await prisma.user.findUnique({
      select: userSelect,
      where: {
        firebase_token: user.uuid,
      } as Prisma.UserWhereUniqueInput,
    });
  }

  async getUserFirebaseToken(id: number): Promise<any | null> {
    return await prisma.user.findUnique({
      select: {
        firebase_token: true,
      },
      where: {
        id,
      },
    });
  }

  async getUserById(id: number): Promise<any | null> {
    return await prisma.user.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<any | null> {
    return await prisma.user.findUnique({ where: { email } });
  }
}

export const userRepository = new UserRepository();
