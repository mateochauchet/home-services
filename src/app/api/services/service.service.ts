import { ServiceRepository } from "./service.repository";

export const serviceRepository = new ServiceRepository();

const getAllServices = async () => {
  const services = await serviceRepository.findAll();
  console.log({ services });

  return services;
};

export default { getAllServices };
