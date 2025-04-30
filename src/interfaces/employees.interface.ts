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
	route?: {
		id: number;
		latitude: string;
		longitude: string;
		createdAt: string;
		updatedAt: string;
	};
	routes?: {
		id: number;
		latitude: string;
		longitude: string;
		createdAt: string;
		updatedAt: string;
	}[];
}