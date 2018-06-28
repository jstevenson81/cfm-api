import { Mom } from '../src/models/models.index';
import { MomValidator } from '../src/validation/validation.index';

describe('model validator tests', () => {
  it('mom validator should validate presence of properties', () => {
    var mom = new Mom(null, null, null, null, null, null);
    var validator = new MomValidator(mom);

    var expected = {
      month: ['Month is required and cannot be empty.'],
      pictureUrl: ['Picture url is required and cannot be empty.'],
      title: ['Title is required and cannot be empty.'],
      year: ['Year is required and cannot be empty.']
    };

    var actual = validator.runValidation();
    expect(actual).toEqual(expected);
  });

  it('mom validator should fail if invalid month is passed', () => {
    var mom = new Mom(null, 'Jan', 2018, 'Test Title', 'https://www.google.com/', []);
    var validator = new MomValidator(mom);

    var expected = { month: ['Month must be the full name of the month like January.'] };
    var actual = validator.runValidation();
    expect(actual).toEqual(expected);

  });

  it('mom validator should return null/undefined when all properties are valid', () => {
    var mom = new Mom(null, 'January', 2018, 'Test Title', 'https://www.google.com/', []);
    var validator = new MomValidator(mom);

    var actual = validator.runValidation();

    expect(actual).toBeUndefined();
  });
});
