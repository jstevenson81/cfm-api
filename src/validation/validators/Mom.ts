// third party importa
import { validate } from 'validate.js';

// local imports
import { IValidator, IMomConstraints, MomConstraints } from '../validation.index';
import { IModel, Mom } from '../../models/models.index';

export class MomValidator implements IValidator {
  private readonly _constraints: IMomConstraints;
  private readonly _attributes: IModel;

  getAttributes = (): IModel => {
    return this._attributes;
  };
  getConstraints = (): any => {
    return this._constraints;
  };

  constructor(model: Mom) {
    // setup the attributes
    this._attributes = model;
    this._constraints = new MomConstraints().constraints;
  }
  runValidation = (): any => {
    return validate(this._attributes, this._constraints, { format: 'grouped' });
  };
}
