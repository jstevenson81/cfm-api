"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseGenerator = /** @class */ (function () {
    function ResponseGenerator() {
        var _this = this;
        this.response = function (data, status) {
            return { status: status, body: data };
        };
        this.successResponse = function (data) {
            return _this.response(data, 200);
        };
        this.errorResponse = function (err) {
            return _this.response(err, 500);
        };
    }
    return ResponseGenerator;
}());
exports.ResponseGenerator = ResponseGenerator;
//# sourceMappingURL=ResponseGenerator.js.map