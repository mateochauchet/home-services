import { prisma } from "@/backend/db/prisma";

export class ServiceCategoryRepository {
  async findAll(): Promise<any[]> {
    return prisma.category.findMany({
      include: {
        services: true,
      },
    });
  }
}
