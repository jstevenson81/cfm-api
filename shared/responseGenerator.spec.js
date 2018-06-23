"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responseGenerator_1 = require("./responseGenerator");
describe("response generator tests", function () {
    it("should return a success response", function () {
        var stub = new responseGenerator_1.ResponseGenerator();
        var expected = { status: 200, body: '' };
        var actual = stub.successResponse('');
        expect(actual).toEqual(expected);
    });
    it("should return an error response", function () {
        var stub = new responseGenerator_1.ResponseGenerator();
        var expected = { status: 500, body: '' };
        var actual = stub.errorResponse('');
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=responseGenerator.spec.js.map