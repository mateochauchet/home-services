import { NextRequest, NextResponse } from "next/server";
import { professionalService } from "../services";
import { handleHttpError } from "./utils";

const getProfessionals = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;

    const filters = {
      location: searchParams.get("location") || undefined,
      serviceId: searchParams.has("serviceId")
        ? parseInt(searchParams.get("serviceId")!, 10)
        : undefined,
      minRating: searchParams.has("minRating")
        ? parseFloat(searchParams.get("minRating")!)
        : undefined,
    };

    const result = await professionalService.getAllProfessionals(filters);

    return NextResponse.json(result);
  } catch (error) {
    return handleHttpError({
      status: 500,
      message: "Error fetching Professionals",
      error,
    });
  }
};

const getProfessionalById = async (id: string) => {
  try {
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      return handleHttpError({
        message: "Invalid ID format",
        status: 400,
      });
    }

    const result = await professionalService.getProfessionalById(numericId);

    if (!result) {
      return handleHttpError({
        status: 404,
        message: `Professional with ID ${id} not found`,
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    return handleHttpError({
      status: 500,
      message: `Error fetching Professional with ID ${id}`,
      error,
    });
  }
};

export { getProfessionals, getProfessionalById };
