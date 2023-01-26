import { ArrayType } from '@angular/compiler';
import { IUser } from './user';

export interface IItem {
  _id: string;
  title: string;
  description: string[];
  price: number;
  img: string;
  _ownerId: IUser;
  likes: [];
}
