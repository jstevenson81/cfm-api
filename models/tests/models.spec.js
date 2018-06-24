"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mom_1 = require("../Mom");
var Question_1 = require("../Question");
describe("model tests", function () {
    it("should add a new id to mom if one is not passed", function () {
        var actual = new Mom_1.Mom(null, 'June', 2018, 'Test', 'https://blah.com/blah.jpg', []);
        expect(actual.id).toBeDefined();
    });
    it("should add a new id to question if one is not passed", function () {
        var actual = new Question_1.Question(null, "Is this a test?", "Yes it is.");
        expect(actual.id).toBeDefined();
    });
    it("should not add a new id to question if one is passed", function () {
        var actual = new Question_1.Question('1', "Is this a test?", "Yes it is.");
        expect(actual.id).toEqual('1');
    });
    it("should not add a new id to mom if one is passed", function () {
        var actual = new Mom_1.Mom('1', 'June', 2018, 'Test', 'https://blah.com/blah.jpg', []);
        expect(actual.id).toEqual('1');
    });
});
//# sourceMappingURL=models.spec.js.map