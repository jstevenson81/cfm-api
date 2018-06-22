import { IModel } from "./IModel";
import { Guid } from "guid-typescript";

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