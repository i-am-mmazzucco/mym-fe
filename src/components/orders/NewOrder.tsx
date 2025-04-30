'use client';

import styles from '@/styles/components/orders/NewOrder.module.scss';
import { ClientsContext } from '../context/clients';
import { EmployeesContext } from '../context/employees';
import { ProductsContext } from '../context/product';
import React, { useState } from 'react';

interface NewOrderProps {
	setIsNewOrderModalOpen: (isOpen: boolean) => void;
}

interface OrderItem {
	productId: number;
	quantity: number;
}

const url = process.env.beUrl as string;

export default function NewOrder({ setIsNewOrderModalOpen }: NewOrderProps) {
	const { clients } = React.useContext(ClientsContext);
	const { employees } = React.useContext(EmployeesContext);
	const { products } = React.useContext(ProductsContext);
	const [orderItems, setOrderItems] = useState<OrderItem[]>([{ productId: 0, quantity: 1 }]);

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
		
		const validItems = orderItems.filter(item => item.productId > 0);
		
		if (validItems.length === 0) {
			alert('Por favor, selecciona al menos un producto');
			return;
		}

		const formData = {
			client: {
				id: Number((e.currentTarget.elements.namedItem('client') as HTMLSelectElement).value)
			},
			employeeAssigned: {
				id: Number((e.currentTarget.elements.namedItem('employeeAssigned') as HTMLSelectElement).value)
			},
			address: (e.currentTarget.elements.namedItem('address') as HTMLInputElement).value,
			statusDelivery: (e.currentTarget.elements.namedItem('statusDelivery') as HTMLSelectElement).value,
			statusPayment: (e.currentTarget.elements.namedItem('statusPayment') as HTMLSelectElement).value,
			items: validItems.map(item => ({
				quantity: item.quantity,
				product: {
					id: item.productId
				}
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
			setIsNewOrderModalOpen(false);
		}
	}

  return (
		<div className={styles.newOrderContainer}>
			<div className={styles.newOrderBox}>
				<button className={styles.closeButton} onClick={() => setIsNewOrderModalOpen(false)}>
					<p>X</p>
				</button>
				<h1>Ingresa los datos del nuevo pedido</h1>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Cliente</span>
						<select name='client' required>
							{clients.map((client) => (
								<option key={client.id} value={client.id}>{client.name}</option>
							))}
						</select>
					</label>
					<label>
						<span>Empleado asignado</span>
						<select name='employeeAssigned' required>
							{employees.map(employee => (
								<option key={employee.id} value={employee.id}>{employee.name}</option>
							))}
						</select>
					</label>
					<label>
						<span>Dirección</span>
						<input type="text" name='address' required />
					</label>
					<label>
						<span>Estado de entrega</span>
						<select name='statusDelivery' required defaultValue='pending'>
							<option value='pending'>Pendiente</option>
							<option value='delivered'>Entregado</option>
							<option value='cancelled'>Cancelado</option>
						</select>
					</label>
					<label>
						<span>Estado de pago</span>
						<select name='statusPayment' required defaultValue='pending'>
							<option value='pending'>Pendiente</option>
							<option value='paid'>Pagado</option>
							<option value='failed'>Fallado</option>
						</select>
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
					<button type="submit">Crear pedido</button>
				</form>
			</div>
		</div>
  );
}