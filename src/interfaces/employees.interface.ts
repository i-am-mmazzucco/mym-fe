export interface IEmployee {
	id: number;
	name: string;
	lastName: string;
	dni: string;
	phone: string;
	address: string;
	role: string;
	routeId?: number;
	route?: {
		id: number;
		latitude: string;
		longitude: string;
	};
}