import { MongoClient, Db, Collection } from "mongodb";

export class Repository {

  client: MongoClient;

  connectAsync = async (): Promise<MongoClient> => {
    try {
      const client = await MongoClient.connect(process.env.CfmDbUrl);
      this.client = client;
      return client;
    } catch (err) {
      throw err;
    }
  };

  getCollectionAsync = async (collectionName: string): Promise<Collection> => {
    try {
      var client = await this.connectAsync();
      return client.db(process.env.CfmDb).collection(collectionName);
    }
    catch (err) {
      throw err;
    }
  };

  close = (): any => {
    this.client.close();
  };

  findAsync = async (collectionName: string, query: any): Promise<Array<any>> => {
    try {
      var collection = await this.getCollectionAsync(collectionName);
      var data = await collection.find(query).toArray();
      data.forEach(item => delete item._id);
      return data;
    }
    catch (err) {
      throw err;
    }
  };

  insertAsync = async (collectionName: string, data: any): Promise<void> => {
    try {
      // find the item in the collection
      var item = await this.findAsync(collectionName, { id: data.id });
      if (item)
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
}