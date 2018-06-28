import { Context, HttpRequest, MongoRepository, ResponseGenerator } from '../func.index';

export async function run(context: Context, req: HttpRequest) {
  var repository = new MongoRepository();
  var responseGenerator = new ResponseGenerator();
  try {
    var id = req.params.id;
    if (!id) {
      throw `
      There was no id included in the route.
      To query for a single member of the month, you need to
      include an id parameter in the route like /api/mom/1.`;
    }
    var list = await repository.findAsync('mom', { id: id });
    context.res = responseGenerator.successResponse(list);
  } catch (err) {
    context.res = responseGenerator.errorResponse(err);
  } finally {
    repository.close();
  }
}
