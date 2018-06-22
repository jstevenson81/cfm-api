
import { HttpResponse } from "azure-functions-ts-essentials";
import { Mom } from "./Mom";
import { Question } from "./Question";

describe("model tests", () => {

  it("should add a new id to mom if one is not passed", () => {
    var actual = new Mom(null, 'June', 2018, 'Test', []);
    expect(actual.id).toBeDefined();
  });

  it("should add a new id to question if one is not passed", () => {
    var actual = new Question(null, "Is this a test?", "Yes it is.");
    expect(actual.id).toBeDefined();
  });

  it("should not add a new id to question if one is passed", () => {
    var actual = new Question('1', "Is this a test?", "Yes it is.");
    expect(actual.id).toEqual('1');
  });

  it("should not add a new id to mom if one is passed", () => {
    var actual = new Mom('1', 'June', 2018, 'Test', []);
    expect(actual.id).toEqual('1');
  });

 });