import { getProfessionals } from "@/backend/controllers/professional.controller";

export async function GET() {
  return await getProfessionals();
}
