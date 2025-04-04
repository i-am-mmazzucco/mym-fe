
import styles from '@/styles/components/home/HomeEmployeeTable.module.scss';
import Image from 'next/image';

export default function HomeEmployeeTable() {
	return (
		<div className={styles.employees}>
			<div className={styles.filters}>
				<p>Empleados sin ruta asignada</p>
			</div>
			<table className={styles.table}>
				<tbody>
					{employees.map((employee => {
						return (
							<tr key={employee.id}>
								<td>
									<Image width="100" height="100" src={employee.avatar} alt={employee.name}/>
									{employee.name}
								</td>
								<td>
									<button>
										Asignar ruta
									</button>
								</td>
							</tr>
						)
					}))}
				</tbody>
			</table>
		</div>
	)
}

const employees = [
  { id: 1, name: "Romina Brodo", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces" },
  { id: 2, name: "Cristian Fabiani", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=faces" },
  { id: 3, name: "Laura Zohu", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=faces" },
];