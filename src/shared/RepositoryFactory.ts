import { MongoRepository } from '../repository/MongoRepository';

export function MongoCosmosProcessFactory<T>(): MongoRepository<T> {
  return new MongoRepository(process.env.CfmDbUrl, process.env.DbUser, process.env.DbPass, process.env.CfmDb);
}