'use client'

import { ISalesHistory } from '@/interfaces/orders.interface';
import styles from '@/styles/components/home/HomeSalesTable.module.scss';
import React, { useEffect } from 'react';

export default function HomeSalesTable() {
	const [salesData, setSalesData] = React.useState<ISalesHistory[]>([]);
	const [startDate, setStartDate] = React.useState<string>('');
	const [endDate, setEndDate] = React.useState<string>('');

  useEffect(() => {
    (async () => {
			let url = `${process.env.NEXT_PUBLIC_BE_URL}/orders/sales`;

			if (startDate && endDate) {
				url += `?startDate=${startDate}&endDate=${endDate}`;
			}

      const response = await fetch(url);
      const data = await response.json();

      setSalesData(data);
    })();
  }, [startDate, endDate]);

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
					{salesData.map((saleData => {
						return (
							<tr key={saleData.productId}>
								<td>{saleData.productName}</td>
								<td>{saleData.lotQuantity} {
									saleData.lotUnitOfMeasure === 'kg' 
										? 'KG' 
										: saleData.lotUnitOfMeasure === 'g' 
											? 'G' 
											: saleData.lotUnitOfMeasure === 'ml' 
												? 'Ml' 
												: saleData.lotUnitOfMeasure === 'l' 
													? 'L' 
													: 'Unidades'}</td>
								<td>${saleData.totalRevenue}</td>
							</tr>
						)
					}))}
				</tbody>
			</table>
		</div>
	)
}
