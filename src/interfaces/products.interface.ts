import { ILot } from "./lot.interface";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  isActive: boolean;
  category: string;
  lot: ILot;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}