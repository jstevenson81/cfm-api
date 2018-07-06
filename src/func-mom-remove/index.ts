import { Context, HttpRequest, MongoCosmosProcessFactory, ResponseGenerator } from '../func.index';

export async function run(context: Context, req: HttpRequest) {
  var repository = MongoCosmosProcessFactory();

  var responseGenerator = new ResponseGenerator();
  try {
    var id = req.params.id;
    if (!id) {
      throw `
      There was no id included in the route.
      To query for a single member of the month, you need to
      include an id parameter in the route like /api/mom/1.`;
    }
    var delResp = await repository.deleteAsync('mom', id);
    context.res = responseGenerator.successResponse(
      `Deleted the MOM record with the id of ${id}.
      ${delResp.deletedCount} record(s) were deleted.`
    );
  } catch (err) {
    context.res = responseGenerator.errorResponse(err);
  } finally {
    repository.close();
  }
}
