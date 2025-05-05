import { IOrder } from "./orders.interface";

export interface ICoordinates {
	type: string;
	coordinates: [number, number];
}

export interface IRoute {
	id: number;
	coordinates: ICoordinates;
	createdAt: string;
	updatedAt: string;
	order?: IOrder;
}

export interface IEmployee {
	id: number;
	name: string;
	lastName: string;
	dni: string;
	phone: string;
	address: string;
	role: string;
	routeId?: number;
	createdAt: string;
	updatedAt: string;
	image?: string;
	routes?: IRoute[];
}