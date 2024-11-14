import { ServiceCategoryRepository } from "../repositories";

const serviceCategoryRepository = new ServiceCategoryRepository();

const getCategoriesWithtServices = async () => {
  try {
    return await serviceCategoryRepository.findAll();
  } catch (error) {
    throw error;
  }
};

export const serviceCategoryService = { getCategoriesWithtServices };
