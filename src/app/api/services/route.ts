import { NextResponse } from "next/server";
import serviceService from "./service.service";

export async function GET() {
  const services = await serviceService.getAllServices();
  return NextResponse.json(services);
}
