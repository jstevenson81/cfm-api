import { Context, HttpRequest, MongoRepository, ResponseGenerator } from '../func.index';

export async function run(context: Context, req: HttpRequest) {
  var responseGenerator = new ResponseGenerator();
  var repository = new MongoRepository();
  try {

  }
  catch (err) {
    responseGenerator.errorResponse(err);
  }
  finally {
    repository.close();
  }
}