"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// third party importa
var validate_js_1 = require("validate.js");
// local imports
var validation_index_1 = require("../validation.index");
var MomValidator = /** @class */ (function () {
    function MomValidator(model) {
        var _this = this;
        this.getAttributes = function () {
            return _this._attributes;
        };
        this.getConstraints = function () {
            return _this._constraints;
        };
        this.runValidation = function () {
            return validate_js_1.validate(_this._attributes, _this._constraints, { format: 'grouped' });
        };
        // setup the attributes
        this._attributes = model;
        this._constraints = new validation_index_1.MomConstraints().constraints;
    }
    return MomValidator;
}());
exports.MomValidator = MomValidator;
//# sourceMappingURL=Mom.js.map