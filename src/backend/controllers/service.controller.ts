import { NextResponse } from "next/server";
import { serviceCategoryService } from "../services";
import { handleHttpError } from "./utils";

const getCategoriesWithtServices = async () => {
  try {
    const result = await serviceCategoryService.getCategoriesWithtServices();
    return NextResponse.json(result);
  } catch (error) {
    return handleHttpError({
      status: 500,
      message: "Error fetching Professionals",
      error,
    });
  }
};

export { getCategoriesWithtServices };
