import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import { MongoRepository } from '../../../repository/MongoRepository';
import { ResponseGenerator } from '../../../shared/responseGenerator';

export async function run(context: Context, req: HttpRequest) {
    var responseGenerator = new ResponseGenerator();
    try {
        var repository = new MongoRepository();
        var list = await repository.findAsync('mom');
        context.res = responseGenerator.successResponse(list);
    }
    catch (err) {
        context.res = responseGenerator.errorResponse(err);
    }
    finally {

    }
};