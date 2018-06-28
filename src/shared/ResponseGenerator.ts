import { Context, HttpResponse } from "azure-functions-ts-essentials";
import { IResponseGenerator } from "./shared.index";


export class ResponseGenerator implements IResponseGenerator {
  private response = (data: any, status: any): HttpResponse => {
    return { status: status, body: data };
  };

  successResponse = (data: any): HttpResponse => {
    return this.response(data, 200);
  };

  errorResponse = (err: any): HttpResponse => {
    return this.response(err, 500);
  }
}