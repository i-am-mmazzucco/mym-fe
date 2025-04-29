export interface ILot {
	id: number;
	lotNumber: number;
	unitOfMeasure: 'kg' | 'g' | 'ml' | 'l' | 'un';
	quantity: number;
	manufactureDate: Date;
	expirationDate: Date;
}
