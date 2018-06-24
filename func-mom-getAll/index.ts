import { Context, HttpRequest, MongoRepository, ResponseGenerator } from '../func.index';

export async function run(context: Context, req: HttpRequest) {
    var repository = new MongoRepository();
    var responseGenerator = new ResponseGenerator();
    try {
        var list = await repository.findAsync('mom');
        context.res = responseGenerator.successResponse(list);
    }
    catch (err) {
        context.res = responseGenerator.errorResponse(err);
    }
    finally {
        repository.close();
    }
};