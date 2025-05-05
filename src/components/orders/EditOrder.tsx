'use client';

import styles from '@/styles/components/orders/EditOrder.module.scss';
import { ProductsContext } from '../context/product';
import React from 'react';
import { IOrder } from '@/interfaces/orders.interface';

interface EditOrderProps {
	setIsEditOrderModalOpen: (isOpen: boolean) => void;
	order: IOrder | null;
}

interface OrderItem {
	productId: number;
	quantity: number;
}

const url = process.env.beUrl as string;

export default function EditOrder({ setIsEditOrderModalOpen, order }: EditOrderProps) {
	const { products } = React.useContext(ProductsContext);

	const [orderItems, setOrderItems] = React.useState<OrderItem[]>(order?.items.map(item => ({
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
		
		const validItems = orderItems.filter(item => item.productId > 0);
		
		if (validItems.length === 0) {
			alert('Por favor, selecciona al menos un producto');
			return;
		}

		const formData = {
			address: (e.currentTarget.elements.namedItem('address') as HTMLInputElement).value,
			items: validItems.map(item => ({
				quantity: item.quantity,
				product: {
					id: item.productId
				}
			}))
		};

		const response = await fetch(`${url}/orders/${order?.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},	
			body: JSON.stringify(formData)
		});

		const data = await response.json();

		if (data.statusCode) {	
			alert('Error al editar el pedido');
		} else {
			setIsEditOrderModalOpen(false);
		}
	}

  return (
		<div className={styles.editOrderContainer}>
			<div className={styles.editOrderBox}>
				<button className={styles.closeButton} onClick={() => setIsEditOrderModalOpen(false)}>
					<p>X</p>
				</button>
				<h1>Edita el pedido</h1>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Dirección</span>
						<input type="text" name='address' required />
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