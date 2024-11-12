import { User } from "./User.entity";

export interface IProfessional {
  id: number;
  userId: number;
  location: string;
  contactWhatsApp: string;
  contactPhone: string;
  rating: number;
  createdAt: string;
  coverPhoto: null;
  user: User;
}
