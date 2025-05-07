'use client'

import DetailsOrderTable from '@/components/orders/DetailsOrderTable';
import styles from '@/styles/pages/orders/Order.module.scss';
import { IOrder } from '@/interfaces/orders.interface';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface OrderProps {
	params: Promise<{ id: string }>
}

export default function Order(props: OrderProps) {
	const router = useRouter();
	const [order, setOrder] = React.useState<IOrder | null>(null);
	const params = React.use(props.params);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/orders/${+params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },	
      });
			const order = await response.json();
			setOrder(order);
		})();
	}, [params.id]);

  return (		
		<div className={styles.orderContainer}>
			<div className={styles.breadcrumb}>
				<p onClick={() => router.push('/')}>Inicio</p>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
					</svg>
				</div>
				<p onClick={() => router.push('/orders')}>Pedidos</p>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
					</svg>
				</div>
				<p>Detalles Pedido</p>
			</div>
			<DetailsOrderTable order={order} />
  	</div>
	)
};
