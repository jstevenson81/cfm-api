import { ResponseGenerator } from "./responseGenerator";
import { HttpResponse } from "azure-functions-ts-essentials";

describe("response generator tests", () => {

  it("should return a success response", () => {
    const stub = new ResponseGenerator();
    var expected: HttpResponse = { status: 200, body: '' };
    var actual = stub.successResponse('');

    expect(actual).toEqual(expected);

  });

  it("should return an error response", () => {
    const stub = new ResponseGenerator();
    var expected: HttpResponse = { status: 500, body: '' };
    var actual = stub.errorResponse('');

    expect(actual).toEqual(expected);

  });

 });