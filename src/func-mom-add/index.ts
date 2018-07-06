// thrid party imports
import _ from 'lodash';

// local imports
import { Context, HttpRequest, ResponseGenerator, Mom, MomValidator, MongoCosmosProcessFactory } from '../func.index';

export async function run(context: Context, req: HttpRequest) {
  var responseGenerator = new ResponseGenerator();
  var repository = MongoCosmosProcessFactory();
  try {
    // get a new record from the context
    var nRecord: Mom = context.bindings.data;
    if (!nRecord) {
      throw `There was no mom record found in the body of the request.
      The body must look like data: {mom record} for this operation to run.`;
    }
    // create a validator
    var validator = new MomValidator(nRecord);
    // validate
    var errors = validator.runValidation();
    // if we have errors throw
    if (!_.isUndefined(errors)) throw (errors);
    // else, add a new record
    await repository.insertAsync('mom', nRecord);
    // return the new record
    var iRecord = await repository.findAsync('mom', { month: nRecord.month, year: nRecord.year });
    context.res = responseGenerator.successResponse(iRecord);
  }
  catch (err) {
    responseGenerator.errorResponse(err);
  }
  finally {
    repository.close();
  }
}