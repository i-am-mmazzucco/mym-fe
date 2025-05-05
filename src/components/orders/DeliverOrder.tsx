'use client';

import styles from '@/styles/components/orders/DeliverOrder.module.scss';
import { ProductsContext } from '../context/product';
import React, { useState } from 'react';
import { IOrder } from '@/interfaces/orders.interface';
import moment from 'moment';

interface DeliverOrderProps {
	setIsDeliverOrderModalOpen: (isOpen: boolean) => void;
	order: IOrder | null;
}

interface OrderItem {
	productId: number;
	quantity: number;
}

const url = process.env.beUrl as string;

export default function DeliverOrder({ setIsDeliverOrderModalOpen, order }: DeliverOrderProps) {
	const { products } = React.useContext(ProductsContext);
	const [orderItems, setOrderItems] = useState<OrderItem[]>(order?.items.map(item => ({
		productId: item.product.id,
		quantity: item.quantity
	})) || []);

	const addProductItem = () => {
		setOrderItems([...orderItems, { productId: 0, quantity: 1 }]);
	};

	const removeProductItem = (index: number) => {
		const updatedItems = [...orderItems];
		updatedItems.splice(index, 1);
		setOrderItems(updatedItems);
	};

	const updateProductItem = (index: number, field: keyof OrderItem, value: number) => {
		const updatedItems = [...orderItems];
		updatedItems[index] = { ...updatedItems[index], [field]: value };
		setOrderItems(updatedItems);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const formData = {
			address: (e.currentTarget.elements.namedItem('address') as HTMLInputElement).value,
			dateDelivery: moment().format('YYYY-MM-DD'),
			statusDelivery: (e.currentTarget.elements.namedItem('statusDelivery') as HTMLSelectElement).value,
			statusPayment: (e.currentTarget.elements.namedItem('statusPayment') as HTMLSelectElement).value,
			totalAmountPaid: (e.currentTarget.elements.namedItem('totalAmountPaid') as HTMLInputElement).value,
			items: orderItems.map(item => ({
				productId: item.productId,
				quantity: item.quantity
			}))
		};

		const response = await fetch(`${url}/orders`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},	
			body: JSON.stringify(formData)
		});

		const data = await response.json();

		if (data.statusCode) {	
			alert('Error al crear el pedido');
		} else {
			setIsDeliverOrderModalOpen(false);
		}
	}

  return (
		<div className={styles.deliverOrderContainer}>
			<div className={styles.deliverOrderBox}>
				<button className={styles.closeButton} onClick={() => setIsDeliverOrderModalOpen(false)}>
					<p>X</p>
				</button>
				<h1>Ingresa los datos del nuevo producto</h1>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Dirección</span>
						<input type="text" name='address' required />
					</label>
					<label>
						<span>Estado de entrega</span>
						<select name='statusDelivery' required defaultValue='delivered'>
							<option value='pending'>Pendiente</option>
							<option value='delivered'>Entregado</option>
							<option value='cancelled'>Cancelado</option>
						</select>
					</label>
					<label>
						<span>Estado de pago</span>
						<select name='statusPayment' required defaultValue='paid'>
							<option value='pending'>Pendiente</option>
							<option value='paid'>Pagado</option>
							<option value='failed'>Fallado</option>
						</select>
					</label>
					<label>
						<span>Total pagado</span>
						<input type="number" name='totalAmountPaid' required />
					</label>
					<div className={styles.productsSection}>
						{orderItems.map((item, index) => (
							<div key={index} className={styles.productItem}>
								<div className={styles.productControl}>
									<span>Producto</span>
									<select 
										value={item.productId} 
										onChange={(e) => updateProductItem(index, 'productId', Number(e.target.value))}
										required
									>
										<option value={0}>Selecciona un producto</option>
										{products.map(product => (
											<option key={product.id} value={product.id}>{product.name}</option>
										))}
									</select>
								</div>
								<div className={styles.quantityControl}>
									<span>Cantidad:</span>
									<input
										type="number"
										min="1"
										value={item.quantity}
										onChange={(e) => updateProductItem(index, 'quantity', Number(e.target.value))}
										required
									/>
								</div>
								{orderItems.length > 1 && (
									<button 
										type="button" 
										onClick={() => removeProductItem(index)}
										className={styles.removeButton}
									>
										X
									</button>
								)}
							</div>
						))}
						<button 
							type="button" 
							onClick={addProductItem} 
							className={styles.addProductButton}
						>
							+ Agregar otro producto
						</button>
					</div>
					<button type="submit">Crear producto</button>
				</form>
			</div>
		</div>
  );
}