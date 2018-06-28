// third party imports
import { Guid } from 'guid-typescript';
// local imports
import { IModel } from "./models.index";

export class Question implements IModel {

  id: string;
  text: string;
  answer: string;

  constructor(id: string, text: string, answer: string) {
    this.id = !id ? Guid.create().toString() : id;
    this.answer = answer;
    this.text = text;
  }

}