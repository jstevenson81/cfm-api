"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// third party imports
var guid_typescript_1 = require("guid-typescript");
var Question = /** @class */ (function () {
    function Question(id, text, answer) {
        this.id = !id ? guid_typescript_1.Guid.create().toString() : id;
        this.answer = answer;
        this.text = text;
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.js.map