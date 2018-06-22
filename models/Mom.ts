import { IModel } from "./IModel";
import { Question } from "./Question";
import { Guid } from "guid-typescript";

export class Mom implements IModel {

  id: string;
  month: string;
  year: number;
  title: string;
  questions: Array<Question>;


  constructor(id: string, month: string, year: number, title: string, questions: Array<Question>) {
    this.id = !id ? Guid.create().toString() : id;
    this.month = month;
    this.questions = questions;
    this.title = title;
    this.year = year;
  }

}