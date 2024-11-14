import { prisma } from "@/backend/db/prisma";
import { Professional } from "@prisma/client";

export class ProfessionalRepository {
  async findAll(): Promise<Professional[]> {
    try {
      return prisma.professional.findMany({
        include: {
          user: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<Professional | null> {
    try {
      return prisma.professional.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
