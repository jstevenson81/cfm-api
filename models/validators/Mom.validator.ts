import { ValidateJS } from 'validate.js';
import { IValidator } from '../interfaces/IValidator';
import { Mom } from '../Mom';

export class MomValidator implements IValidator {

  validator: ValidateJS;
  constraints: any;
  attributes: any;

  constructor(model: Mom) {
    // setup the attributes
    this.attributes = model;
    this.constraints = {
      month: {
        presence: { allowEmpty: false, message: 'The month is required and cannot be empty.' },
        format: {pattern: /January|February|March|April|May|June|July|August|September|October|November|December/, message: 'Please use the full name of the month like January.'}
      },
      year: {
        presence: { allowEmpty: false, message: 'The year is required and cannot be empty.' },
        numericality: {message: 'The year must be a number.'}
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

  validate = (): any => {
    return this.validator.validate(this.attributes, this.constraints, { format: 'grouped' });
  };

}