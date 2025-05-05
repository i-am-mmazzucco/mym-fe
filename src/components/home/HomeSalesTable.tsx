'use client'

import { ISalesHistory } from '@/interfaces/orders.interface';
import styles from '@/styles/components/home/HomeSalesTable.module.scss';
import moment from 'moment';
import React, { useEffect } from 'react';

export default function HomeSalesTable() {
	const [salesData, setSalesData] = React.useState<ISalesHistory[]>([]);
	const [startDate, setStartDate] = React.useState<string>(moment().subtract(30, 'days').format('YYYY-MM-DD'));
	const [endDate, setEndDate] = React.useState<string>(moment().format('YYYY-MM-DD'));
	const [filterOption, setFilterOption] = React.useState<string>('month');

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

	const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setFilterOption(value);
		
		if (value === 'month') {
			setStartDate(moment().subtract(30, 'days').format('YYYY-MM-DD'))
		}
		if (value === 'week') {
			setStartDate(moment().subtract(7, 'days').format('YYYY-MM-DD'))
		}
		if (value === 'day') {
			setStartDate(moment().subtract(1, 'days').format('YYYY-MM-DD'))
		}

		setEndDate(moment().format('YYYY-MM-DD'))
	};

	return (
		<div className={styles.sales}>
			<div className={styles.filters}>
				<p>Productos mas vendidos</p>
				<select 
					value={filterOption} 
					onChange={handleFilterChange}
					className={styles.filterSelect}
				>
					<option value="month">Mes en curso</option>
					<option value="week">7 Dias</option>
					<option value="day">1 Dia</option>
				</select>
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
