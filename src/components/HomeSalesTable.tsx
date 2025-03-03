
import styles from '@/styles/components/HomeSalesTable.module.scss';

export default function HomeSalesTable() {
	return (
		<div className={styles.sales}>
			<div className={styles.filters}>
				<p>Productos mas vendidos</p>
				<button>
					Mes en curso
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<g clip-path="url(#clip0_211_200)">
							<path d="M7 10.125L2.625 5.75001L3.2375 5.13751L7 8.90001L10.7625 5.13751L11.375 5.75001L7 10.125Z" fill="#212121"/>
						</g>
						<defs>
							<clipPath id="clip0_211_200">
								<rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>PRODUCTO</th>
						<th>VOLUMEN</th>
						<th>INGRESOS</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product => {
						return (
							<tr key={product.id}>
								<td>{product.name}</td>
								<td>{product.volume}</td>
								<td>{product.revenue}</td>
							</tr>
						)
					}))}
				</tbody>
			</table>
		</div>
	)
}

const products = [
  { id: 1, name: "Cloro", volume: "20.000 Litros", revenue: 2000000 },
  { id: 2, name: "Lavandina", volume: "18.000 Litros", revenue: 2600000 },
  { id: 3, name: "Detergente", volume: "11.000 Litros", revenue: 2600000 },
  { id: 4, name: "Jabón líquido", volume: "5.000 Litros", revenue: 4200000 },
  { id: 5, name: "Alcohol en gel", volume: "2.500 Litros", revenue: 2000000 },
];
