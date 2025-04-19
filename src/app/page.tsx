"use client";
import HomeEmployeeTable from '@/components/home/HomeEmployeeTable';
import HomeOrderTable from '@/components/home/HomeOrderTable';
import HomeSalesTable from '@/components/home/HomeSalesTable';
import styles from '@/styles/pages/home/Home.module.scss';

const orders = [
  { id: 1, client: "Mateo Mazzuco", date: "20/08/2024", orderId: "N2862", status: "Asignado" },
  { id: 2, client: "Casa Tia SRL", date: "20/08/2024", orderId: "N2861", status: "Sin asignar" },
  { id: 3, client: "Lucas Velasco", date: "20/08/2024", orderId: "N2860", status: "Sin asignar" },
  { id: 4, client: "Pinturerias Paclin SA", date: "19/08/2024", orderId: "N2859", status: "Asignado" },
  { id: 5, client: "Marta Serrano", date: "19/08/2024", orderId: "N2858", status: "Asignado" },
];

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <p className={styles.title}>Inicio</p>
      <HomeOrderTable orders={orders} />
      <div className={styles.bottomContainer}>
        <HomeSalesTable />
        <HomeEmployeeTable />
      </div>
    </div>
  );
}
