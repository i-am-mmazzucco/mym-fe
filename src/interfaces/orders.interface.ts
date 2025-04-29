import { IClient } from "./clients.interface"
import { IEmployee } from "./employees.interface"
import { IProduct } from "./products.interface"

interface IItem {
	id: number,
	quantity: number,
	createdAt: string,
	updatedAt: string,
	product: IProduct
}

export interface IOrder {
    id: number,
    address: string,
    dateDelivery: string,
    statusDelivery: 'pending' | 'delivered' | 'cancelled',
    typePayment: 'cash' | 'credit_card' | 'debit_card',
    statusPayment: 'pending' | 'paid' | 'failed',
    invoiceNumber: string,
    totalAmount: number,
    totalAmountPaid: number,
    createdAt: string,
    updatedAt: string,
    client: IClient,
    employeeAssigned: IEmployee,
    items: IItem[]
}

export interface ISalesHistory {
    productId: number,
    productName: string,
    lotUnitOfMeasure: 'kg' | 'g' | 'ml' | 'l' | 'un',
    lotQuantity: number,
    lotExpirationDate: string,
    totalRevenue: string,
    date: string,
    totalSold: string
}
