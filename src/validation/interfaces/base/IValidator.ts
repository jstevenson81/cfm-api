import { IModel } from '../../../models/models.index';

export interface IValidator {
  getConstraints(): any;
  getAttributes(): IModel;

  runValidation(): any;
}
