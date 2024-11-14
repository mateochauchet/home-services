import { Professional } from "@prisma/client";
import { ProfessionalRepository } from "../repositories";

const professionalRepository = new ProfessionalRepository();

interface ProfessionalFilters {
  location?: string;
  serviceId?: number;
  minRating?: number;
}

const getAllProfessionals = async (
  filters: ProfessionalFilters = {}
): Promise<Professional[]> => {
  try {
    return await professionalRepository.findAll(filters);
  } catch (error) {
    throw error;
  }
};

const getProfessionalById = async (
  id: number
): Promise<Professional | null> => {
  try {
    return await professionalRepository.findById(id);
  } catch (error) {
    throw error;
  }
};

export const professionalService = { getAllProfessionals, getProfessionalById };
