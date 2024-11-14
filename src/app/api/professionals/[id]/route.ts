import { getProfessionalById } from "@/backend/controllers/professional.controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  return await getProfessionalById(id);
}
