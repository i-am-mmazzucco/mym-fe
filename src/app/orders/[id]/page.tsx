'use client'

import OrderTable from '@/components/orders/OrderTable';
import styles from '@/styles/pages/orders/Order.module.scss';
import { IOrder } from '@/interfaces/orders.interface';
import React, { useEffect } from 'react';

interface OrderProps {
	params: {
		id: string;
	}
}

export default function Order({ params }: OrderProps) {
	const [order, setOrder] = React.useState<IOrder | null>(null);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/orders/${params.id}`);
			const order = await response.json();
			setOrder(order);
		})();
	}, []);

  return (		
		<div className={styles.orderContainer}>
			<div className={styles.breadcrumb}>
				<p>Inicio</p>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
					</svg>
				</div>
				<p>Pedidos</p>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
					</svg>
				</div>
				<p>Detalles Pedido</p>
			</div>
			<OrderTable order={order} />
  	</div>
	)
};
