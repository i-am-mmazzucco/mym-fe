import { ILot } from "./lot.interface";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  isActive: boolean;
  category: string;
  image?: string;
  lot: ILot;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}