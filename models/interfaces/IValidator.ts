import { ValidateJS } from "validate.js";

export interface IValidator {
  validator: ValidateJS;
  constraints: any;
  attributes: any;
}