import { HttpResponse } from "azure-functions-ts-essentials";

export interface IResponseGenerator {
  successResponse(data: any): HttpResponse;
  errorResponse(err: any): HttpResponse;
}