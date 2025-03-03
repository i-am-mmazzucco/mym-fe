"use client";
import HomeEmployeeTable from '@/components/HomeEmployeeTable';
import HomeOrderTable from '@/components/HomeOrderTable';
import HomeSalesTable from '@/components/HomeSalesTable';
import styles from '@/styles/pages/Home.module.scss';

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
