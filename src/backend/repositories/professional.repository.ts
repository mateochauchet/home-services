import { prisma } from "@/backend/db/prisma";
import { Professional } from "@prisma/client";

interface ProfessionalFilters {
  location?: string;
  serviceId?: number;
  minRating?: number;
}

export class ProfessionalRepository {
  async findAll(filters: ProfessionalFilters = {}): Promise<Professional[]> {
    const { location, serviceId, minRating } = filters;
    try {
      return prisma.professional.findMany({
        include: {
          user: true,
        },
        where: {
          ...(location && { location }),
          ...(minRating && { rating: { gte: minRating } }),
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
