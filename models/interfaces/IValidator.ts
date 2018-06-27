import { ValidateJS } from 'validate.js';
import { IModel } from './IModel';

export interface IValidator {
  getConstraints(): any;
  getAttributes(): IModel;

  runValidation(): any;
}
