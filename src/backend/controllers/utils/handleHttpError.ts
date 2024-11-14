import { NextResponse } from "next/server";

interface HttpErrorOptions {
  status?: number;
  message?: string;
  error?: unknown;
}

export function handleHttpError({
  status = 500,
  message = "Internal Server Error",
  error,
}: HttpErrorOptions) {
  const responseMessage =
    message || (error instanceof Error ? error.message : "Unknown error");
  const responseStatus = (error as any)?.status || status;

  // Log the full error details
  console.error("HTTP Error:", {
    status,
    message: responseMessage,
    error: error instanceof Error ? error.stack : error,
  });

  // In development, we might want to send more details back to the client
  const isDevelopment = process.env.NODE_ENV === "development";

  const responseBody = {
    status: responseStatus,
    message: responseMessage,
    ...(isDevelopment && error instanceof Error && { stack: error.stack }),
  };

  return NextResponse.json(responseBody, { status });
}
