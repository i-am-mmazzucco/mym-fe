'use client';
import EmployeesTable from '@/components/employees/EmployeesTable';
import styles from '@/styles/pages/employees/Employees.module.scss';
import { useRouter } from 'next/navigation';

export default function Employees() {
	const router = useRouter();
  return (		
		<div className={styles.employeesContainer}>
			<div className={styles.breadcrumb}>
				<p onClick={() => router.push('/')}>Inicio</p>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
					</svg>
				</div>
				<p onClick={() => router.push('/employees')}>Empleados</p>
			</div>
			<EmployeesTable />
		</div>
	)
};
