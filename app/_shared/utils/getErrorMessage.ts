// app/_shared/utils/getErrorMessage.ts
import { AxiosError } from "axios";
import { ApiErrorResponse } from "../types/api.types";

export const getErrorMessage = (
  error: unknown,
  fallback = "Something went wrong",
): string => {
  if (error instanceof AxiosError) {
    return (error.response?.data as ApiErrorResponse)?.message || fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
};
