import { getProfessionals } from "@/backend/controllers/professional.controller";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await getProfessionals(request);
}
