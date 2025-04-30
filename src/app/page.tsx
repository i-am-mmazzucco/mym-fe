"use client";
import HomeEmployeeTable from '@/components/home/HomeEmployeeTable';
import HomeOrderTable from '@/components/home/HomeOrderTable';
import HomeSalesTable from '@/components/home/HomeSalesTable';
import styles from '@/styles/pages/home/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <p className={styles.title}>Inicio</p>
      <HomeOrderTable />
      <div className={styles.bottomContainer}>
        <HomeSalesTable />
        <HomeEmployeeTable />
      </div>
    </div>
  );
}
