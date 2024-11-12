export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  userType: UserType;
  createdAt: string;
}

enum UserType {
  CLIENT = "CLIENT",
  PROFESSIONAL = "PROFESSIONAL",
}
