"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mom_1 = require("../Mom");
var Mom_validator_1 = require("../validators/Mom.validator");
describe('model validator tests', function () {
    it('mom validator should validate presence of properties', function () {
        var mom = new Mom_1.Mom(null, null, null, null, null, null);
        var validator = new Mom_validator_1.MomValidator(mom);
        var expected = {
            month: ['Month is required and cannot be empty.'],
            pictureUrl: ['Picture url is required and cannot be empty.'],
            title: ['Title is required and cannot be empty.'],
            year: ['Year is required and cannot be empty.']
        };
        var actual = validator.runValidation();
        expect(actual).toEqual(expected);
    });
    it('mom validator should fail if invalid month is passed', function () {
        var mom = new Mom_1.Mom(null, 'Jan', 2018, 'Test Title', 'https://www.google.com/', []);
        var validator = new Mom_validator_1.MomValidator(mom);
        var expected = { month: ['Month must be the full name of the month like January.'] };
        var actual = validator.runValidation();
        expect(actual).toEqual(expected);
    });
    it('mom validator should return null/undefined when all properties are valid', function () {
        var mom = new Mom_1.Mom(null, 'January', 2018, 'Test Title', 'https://www.google.com/', []);
        var validator = new Mom_validator_1.MomValidator(mom);
        var actual = validator.runValidation();
        expect(actual).toBeUndefined();
    });
});
//# sourceMappingURL=Mom.validator.spec.js.map