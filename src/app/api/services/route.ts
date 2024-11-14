import { getCategoriesWithtServices } from "@/backend/controllers/service.controller";
export async function GET() {
  return await getCategoriesWithtServices();
}
