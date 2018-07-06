// third party imports
import { Guid } from 'guid-typescript';
// local imports
import { IModel, Question } from './models.index';

export class Mom implements IModel {
  id: string;
  month: string;
  year: number;
  title: string;
  pictureUrl: string;
  questions: Array<Question>;


  constructor(id: string, month: string, year: number, title: string, pictureUrl: string, questions: Array<Question>) {
    this.id = !id ? Guid.create().toString() : id;
    this.month = month;
    this.questions = questions;
    this.title = title;
    this.year = year;
    this.pictureUrl = pictureUrl;
  }
}