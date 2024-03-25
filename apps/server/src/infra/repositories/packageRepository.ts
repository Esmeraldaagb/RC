import { prisma } from "@api/prisma/client";

export class PackageRepository {
  async createPackage(bcPackage: any): Promise<any> {
    return await prisma.package.create({
      data: {
        ...bcPackage,
      },
    });
  }

  async updatePackage(bcPackage: any): Promise<any> {
    try {
      return await prisma.package.update({
        data: {
          ...bcPackage,
        },
        where: { id: bcPackage.id },
      });
    } catch (error) {
      throw new Error("Package not found");
    }
  }

  async deletePackage(bcPackage: any): Promise<any> {
    try {
      return await prisma.package.delete({
        where: { id: bcPackage.id },
      });
    } catch (error) {
      throw new Error("Package not found");
    }
  }

  async getPackageById(id: number): Promise<any | null> {
    return await prisma.package.findUnique({ where: { id } });
  }
  async getPackageByTrackingNumber(
    tracking_number: string,
  ): Promise<any | null> {
    return await prisma.package.findUnique({ where: { tracking_number } });
  }

  async getAllPackages(): Promise<any[]> {
    return await prisma.package.findMany();
  }

  async getUserPackages(userId: number): Promise<any[]> {
    return await prisma.package.findMany({ where: { userId: userId } });
  }
}

export const packageRepository = new PackageRepository();
