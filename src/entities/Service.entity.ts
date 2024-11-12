export interface ICategoryService {
  id: number;
  name: string;
  description?: string;
  services: IService[];
}

export interface IService {
  id: number;
  name: string;
  description?: string;
  categoryId: number;
}
