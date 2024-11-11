import { prisma } from "@/backend/db/prisma";
import { Service } from "@prisma/client";

export class ServiceRepository {
  async findAll(): Promise<Service[]> {
    return prisma.service.findMany({
      include: {
        category: true,
        professionals: {
          include: {
            professional: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
  }
}
