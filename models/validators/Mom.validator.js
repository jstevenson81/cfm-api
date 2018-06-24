"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MomValidator = /** @class */ (function () {
    function MomValidator(model) {
        var _this = this;
        this.validate = function () {
            return _this.validator.validate(_this.attributes, _this.constraints, { format: 'grouped' });
        };
        // setup the attributes
        this.attributes = model;
        this.constraints = {
            month: {
                presence: { allowEmpty: false, message: 'The month is required and cannot be empty.' },
                format: { pattern: /January|February|March|April|May|June|July|August|September|October|November|December/, message: 'Please use the full name of the month like January.' }
            },
            year: {
                presence: { allowEmpty: false, message: 'The year is required and cannot be empty.' },
                numericality: { message: 'The year must be a number.' }
            },
            title: {
                presence: { allowEmpty: false, message: 'The title is required and cannot be empty.' }
            },
            pictureUrl: {
                presence: { allowEmpty: false, message: 'The picture url is required and cannot be empty.' },
                URL: { message: 'The picture url must be a valid URL.' }
            }
        };
    }
    return MomValidator;
}());
exports.MomValidator = MomValidator;
//# sourceMappingURL=Mom.validator.js.map