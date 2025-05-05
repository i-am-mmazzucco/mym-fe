'use client';
import styles from '@/styles/components/home/HomeEmployeeTable.module.scss';
import Image from 'next/image';
import { EmployeesContext } from '../context/employees';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomeEmployeeTable() {
	const router = useRouter();
	const { employees } = React.useContext(EmployeesContext);
	
	return (
		<div className={styles.employees}>
			<div className={styles.filters}>
				<p>Empleados sin ruta asignada</p>
			</div>
			<table className={styles.table}>
				<tbody>
					{employees?.filter(employee => !employee.routes?.length).map((employee => (
						<tr key={employee.id}>
							<td>
								<Image width="100" height="100" src={employee.image || '/assets/default-avatar.png'} alt={employee.name}/>
								{employee.name}
							</td>
							<td>
								<button onClick={() => router.push(`/employees/${employee.id}`)}>
									Asignar ruta
								</button>
							</td>
						</tr>
						)
					))}
				</tbody>
			</table>
		</div>
	)
}
