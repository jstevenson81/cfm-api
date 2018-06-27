import { validate } from 'validate.js';
import { IValidator } from '../interfaces/IValidator';
import { Mom } from '../Mom';
import { IModel } from '../interfaces/IModel';

export class MomValidator implements IValidator {
  private readonly _constraints: any;
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
  runValidation = (): any => {
    return validate(this._attributes, this._constraints, { format: 'grouped' });
  };
}
