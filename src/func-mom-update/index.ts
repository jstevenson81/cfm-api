// thrid party imports
import _ from 'lodash';

// local imports
import { Context, HttpRequest, MongoCosmosProcessFactory, ResponseGenerator, Mom, MomValidator } from '../func.index';

export async function run(context: Context, req: HttpRequest) {
  var repository = MongoCosmosProcessFactory();

  var responseGenerator = new ResponseGenerator();
  try {
    // get the record from the body
    var uRecord: Mom = context.bindings.data;
    // if we don't have a record, the throw
    if (!uRecord) {
      uRecord = new Mom('', '', 0, '', '', []);
      throw `There was no mom record found in the body of the request.
      The body must look like the following:\n ${JSON.stringify(uRecord)}`;
    }
    // create a validator
    var validator = new MomValidator(uRecord);
    // validate
    var errors = validator.runValidation();
    // if we have errors throw
    if (!_.isUndefined(errors)) throw errors;
    // else, add update the record
    var updResp = await repository.updateAsync('mom', uRecord);

    // return a success response
    context.res = responseGenerator.successResponse(`Updated the MOM record with the id of ${uRecord.id}.
      ${updResp.modifiedCount} record(s) were modified.  The record looked like:\n
      ${JSON.stringify(uRecord)}`);
  } catch (err) {
    context.res = responseGenerator.errorResponse(err);
  } finally {
    repository.close();
  }
}
