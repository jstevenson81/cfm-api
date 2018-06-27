"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_js_1 = require("validate.js");
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
        this._constraints = {
            month: {
                presence: { allowEmpty: false, message: 'is required and cannot be empty.' },
                format: {
                    pattern: /January|February|March|April|May|June|July|August|September|October|November|December/,
                    message: 'must be the full name of the month like January.'
                }
            },
            year: {
                presence: { allowEmpty: false, message: 'is required and cannot be empty.' },
                numericality: { message: 'must be a number.' }
            },
            title: {
                presence: { allowEmpty: false, message: 'is required and cannot be empty.' }
            },
            pictureUrl: {
                presence: {
                    allowEmpty: false,
                    message: 'is required and cannot be empty.'
                },
                url: { message: 'must be a valid URL.' }
            }
        };
    }
    return MomValidator;
}());
exports.MomValidator = MomValidator;
//# sourceMappingURL=Mom.validator.js.map