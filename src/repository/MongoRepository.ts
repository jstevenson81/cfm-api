// third party imports
import { MongoClient, Collection, UpdateWriteOpResult, DeleteWriteOpResultObject, Db } from "mongodb";

// local imports
import { IModel } from '../models/models.index'

export class MongoRepository {

  client: MongoClient;

  connectAsync = async (): Promise<Db> => {
    try {
      const client = await MongoClient.connect(
        // the url
        process.env.CfmDbUrl,
        // options
        {
          // auth settings
          auth: {
            user: process.env.DbUser,
            password: process.env.DbPass
          }
        }
      );
      // set this.client = the client we just opened.
      this.client = client;
      // return the database
      return client.db(process.env.CfmDb);
    } catch (err) {
      throw err;
    }
  };

  getCollectionAsync = async (collectionName: string): Promise<Collection> => {
    try {
      var client = await this.connectAsync();
      return client.collection(collectionName);
    }
    catch (err) {
      throw err;
    }
  };

  close = (): any => {
    this.client.close();
  };

  findAsync = async (collectionName: string, query?: any): Promise<Array<any>> => {
    try {
      var collection = await this.getCollectionAsync(collectionName);
      // if query is undefined, we should set it to a enpty object
      query = query || {};
      var data = await collection.find(query).toArray();
      data.forEach(item => delete item._id);
      return data;
    }
    catch (err) {
      throw err;
    }
  };

  insertAsync = async (collectionName: string, data: IModel): Promise<void> => {
    try {
      // find the item in the collection
      var item = await this.findAsync(collectionName, { id: data.id });
      if (item || item.length > 0)
        // the item exists, so throw an exception
        throw (`
                There is already an item with the id of ${data.id}
                in the collection ${collectionName}.  It is ${JSON.stringify(item)}.`
        );
      // get the collection
      var collection = await this.getCollectionAsync(collectionName);
      // insert the new item
      await collection.insertOne(data);
    }
    catch (err) {
      throw err;
    }
  };

  updateAsync = async (collectionName: string, data: IModel): Promise<UpdateWriteOpResult> => {
    try {
      // get the collection
      var collection = await this.getCollectionAsync(collectionName);
      // update the item
      var result = await collection.updateOne({ id: data.id }, data);
      // if we couldn't find an item or we didn't modify an item, throw an error
      if (result.matchedCount === 0 || result.modifiedCount === 0) {
        // throw the error that we coudln't find an item
        throw (`
                An item with the id of ${data.id} does not exist in the collection
                ${collectionName}.  To update an item one must exist in the collection.`
        );
      }
      // return the result
      return result;
    }
    // re-throw
    catch (err) {
      throw err;
    }
  };

  deleteAsync = async (collectionName: string, id: string): Promise<DeleteWriteOpResultObject> => {
    try {
      // get the collection
      var collection = await this.getCollectionAsync(collectionName);
      // update the item
      var result = await collection.deleteOne({ id: id });
      // if we couldn't find an item or we didn't modify an item, throw an error
      if (result.connection === 0) {
        // throw the error that we coudln't find an item
        throw (`
                An item with the id of ${id} does not exist in the collection
                ${collectionName}.  To update an item one must exist in the collection.`
        );
      }
      // return the result
      return result;
    }
    // re-throw
    catch (err) {
      throw err;
    }
  };
}