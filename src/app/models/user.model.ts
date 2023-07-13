import { BaseModel } from "./base.model";

export class User extends BaseModel {
  id!: string;
  name!: string;
  pin!: number;
  isActive!:boolean;
}
