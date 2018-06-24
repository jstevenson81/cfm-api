"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var Mom = /** @class */ (function () {
    function Mom(id, month, year, title, pictureUrl, questions) {
        this.id = !id ? guid_typescript_1.Guid.create().toString() : id;
        this.month = month;
        this.questions = questions;
        this.title = title;
        this.year = year;
        this.pictureUrl = pictureUrl;
    }
    return Mom;
}());
exports.Mom = Mom;
//# sourceMappingURL=Mom.js.map