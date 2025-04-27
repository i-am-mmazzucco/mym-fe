"use client";
import HomeOrderTable from '@/components/home/HomeOrderTable';
import styles from '@/styles/pages/orders/Orders.module.scss';

const orders = [
  { id: 1, client: "Mateo Mazzuco", date: "20/08/2024", orderId: "N2862", status: "Asignado" },
  { id: 2, client: "Casa Tia SRL", date: "20/08/2024", orderId: "N2861", status: "Sin asignar" },
  { id: 3, client: "Lucas Velasco", date: "20/08/2024", orderId: "N2860", status: "Sin asignar" },
  { id: 4, client: "Pinturerias Paclin SA", date: "19/08/2024", orderId: "N2859", status: "Asignado" },
  { id: 5, client: "Marta Serrano", date: "19/08/2024", orderId: "N2858", status: "Asignado" },
];


export default function Orders() {
  return (		
		<div className={styles.ordersContainer}>
			<div className={styles.breadcrumb}>
				<p>Inicio</p>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
					</svg>
				</div>
				<p>Ordenes</p>
			</div>
			<HomeOrderTable orders={orders} />
		</div>
	)
};