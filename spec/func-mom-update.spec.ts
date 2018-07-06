import { run } from '../src/func-mom-update';
import { HttpRequest, Context, Mom, Question } from '../src/func.index';
import { HttpMethod, HttpStatusCode } from 'azure-functions-ts-essentials';

describe('mom update functions test', () => {

  it('should throw an execption if mom not in body', async () => {
    // setup
    var data = undefined;
    var context: Context = { bindings: {}, done: () => { } };
    var request: HttpRequest = { method: HttpMethod.Post };

    // Act
    await run(context, request);

    // Assert
    expect(context.res.status === HttpStatusCode.InternalServerError);
  });

  it('should update a mom record if one is present', async () => {
    // setup
    var data = new Mom('cd2f81a2-8a56-4930-aa34-b3f969cf99fc', 'July', 2018, 'July 2018 Member of the Month: Jonathan', 'http://www.google.com/', [new Question('1', 'What is your favorite color?', 'blue...no...red...ahhhhhhhhh!')]);
    var context: Context = { bindings: { data }, done: () => { } };
    var request: HttpRequest = { method: HttpMethod.Post };

    // act
    await run(context, request);

    // assert
    expect(context.res.status === HttpStatusCode.OK);
  });

});