import { Professional } from "@prisma/client";
import { ProfessionalRepository } from "../repositories";

const professionalRepository = new ProfessionalRepository();

const getAllProfessionals = async (): Promise<Professional[]> => {
  try {
    return await professionalRepository.findAll();
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
