"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validation_index_1 = require("../validation.index");
var MomConstraints = /** @class */ (function () {
    function MomConstraints() {
        // create the constraints for the MOM object
        this.constraints = {
            month: {
                presence: {
                    allowEmpty: false,
                    message: 'is required and cannot be empty.'
                },
                format: {
                    pattern: /January|February|March|April|May|June|July|August|September|October|November|December/,
                    message: 'must be the full name of the month like January.'
                }
            },
            year: {
                presence: {
                    allowEmpty: false,
                    message: 'is required and cannot be empty.'
                },
                numericality: {
                    noStrings: true, onlyInteger: true, greaterThan: 2000, lessThan: 3000,
                    message: 'must be a number and be greater than 2000 and less than 3000.'
                }
            },
            title: {
                presence: {
                    allowEmpty: false,
                    message: 'is required and cannot be empty.'
                }
            },
            pictureUrl: {
                presence: {
                    allowEmpty: false,
                    message: 'is required and cannot be empty.'
                },
                url: {
                    schemes: [validation_index_1.Scheme.http, validation_index_1.Scheme.https],
                    message: 'must be a valid URL with the scheme of http or https.'
                }
            }
        };
    }
    return MomConstraints;
}());
exports.MomConstraints = MomConstraints;
;
//# sourceMappingURL=Mom.js.map