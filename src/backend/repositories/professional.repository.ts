import { prisma } from "@/backend/db/prisma";
import { Professional } from "@prisma/client";

interface ProfessionalFilters {
  serviceId?: number;
}

export class ProfessionalRepository {
  async findAll(filters: ProfessionalFilters = {}): Promise<Professional[]> {
    const { serviceId } = filters;
    try {
      return prisma.professional.findMany({
        include: {
          user: true,
        },
        where: {
          ...(serviceId && { services: { some: { serviceId } } }),
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
