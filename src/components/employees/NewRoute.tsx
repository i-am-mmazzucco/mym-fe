'use client';

import styles from '@/styles/components/employees/NewRoute.module.scss';
import React, { useEffect } from 'react';
import { OrdersContext } from '../context/order';
import { EmployeesContext } from '../context/employees';
import Image from 'next/image';
import { IEmployee } from '@/interfaces/employees.interface';
import { IOrder } from '@/interfaces/orders.interface';
import GoogleMaps from '../googleMaps/GoogleMaps';
import { warehouseOrigin } from './EmployeeRoutesTable';

interface NewRouteProps {
	setIsNewRouteAssigningForEmployeeModalOpen: (isOpen: boolean) => void;
	employeeId: number;
}

const url = process.env.beUrl as string;

export default function NewRoute({ setIsNewRouteAssigningForEmployeeModalOpen, employeeId }: NewRouteProps) {
	const { employees } = React.useContext(EmployeesContext);
	const { orders } = React.useContext(OrdersContext);

	const [selectedEmployee, setSelectedEmployee] = React.useState<IEmployee | null | undefined>(null);
	const [selectedOrder, setSelectedOrder] = React.useState<IOrder | null | undefined>(null);
	const [selectedDestination, setSelectedDestination] = React.useState<{ lat: number, lng: number, address: string } | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!selectedOrder) {
			alert('Debe seleccionar una orden');
			return;
		}

		if (!selectedEmployee) {
			alert('Debe seleccionar un empleado');
			return;
		}

		if (selectedDestination?.lat === null || selectedDestination?.lng === null || selectedDestination?.address === null) {
			alert('Debe seleccionar una ubicación');
			return;
		}

    const formData = {
			address: selectedDestination?.address,
			order: {
				id: selectedOrder?.id
			},
			routes: [
				{
					lat: selectedDestination?.lat,
					lng: selectedDestination?.lng
				}
			]
		}

		const response = await fetch(`${url}/employees/${selectedEmployee?.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},	
			body: JSON.stringify(formData)
		});

		const data = await response.json();

		if (data.statusCode) {
			alert('Error al crear el cliente');
		} else {
			setIsNewRouteAssigningForEmployeeModalOpen(false);
		}
	}

	const handleChangeEmployee = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const employeeId = e.target.value;
		const employee = employees.find(employee => employee.id === +employeeId);
		setSelectedEmployee(employee);
	}

	const handleChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const orderId = e.target.value;
		const order = orders.find(order => order.id === +orderId);
		setSelectedOrder(order);
	}

	const handleSetDestination = (location: { lat: number, lng: number, address: string }) => {
		setSelectedDestination(location);
	}

	const routes = selectedEmployee?.routes?.map(route => {
		return {
			id: route.id.toString(),
			origin: warehouseOrigin,
			destination: { lat: route.coordinates.coordinates[1], lng: route.coordinates.coordinates[0] }
		}
	}) || [];

	const markers = selectedEmployee?.routes?.map(route => {
		return {
			id: route.id.toString(),
			lat: route.coordinates.coordinates[1],
			long: route.coordinates.coordinates[0]
		}
	}) || [];

	if (selectedDestination) {
		markers.push({
			id: 'selected-marker-destination',
			lat: selectedDestination.lat,
			long: selectedDestination.lng
		});
		routes.push({
			id: 'selected-route-destination',
			origin: warehouseOrigin,
			destination: { lat: selectedDestination.lat, lng: selectedDestination.lng }
		});
	}

	useEffect(() => {
		setSelectedEmployee(employees.find(employee => employee.id === employeeId));
		setSelectedOrder(orders[0])
	}, []);

  return (
		<div className={styles.newRouteContainer}>
			<div className={styles.newRouteBox}>
				<div className={styles.mapContainer}>
					<GoogleMaps
						styles={{ width: '100%', height: '100%', borderRadius: '.8rem' }}
						routes={routes}
						markers={[
							...markers,
							{ lat: warehouseOrigin.lat, long: warehouseOrigin.lng, id: 'warehouse1' },
						]}
						setSelectedDestination={handleSetDestination}
					/>
				</div>
				<div className={styles.formContainer}>
					<div className={styles.formContainerHeader}>
						<h1>Asignar nueva ruta</h1>
						<div>
							<Image src={selectedEmployee?.image || '/assets/default-avatar.png'} alt={selectedEmployee?.name || ''} width={40} height={40} />
							<select name="employee" id="employee" onChange={handleChangeEmployee} defaultValue={employeeId}>
								{employees.map(employee => (
									<option key={employee.id} value={employee.id}>{employee.name} {employee.lastName}</option>
								))}
							</select>
						</div>
					</div>
					<form onSubmit={handleSubmit}>
						<label>
							<span>Orden</span>
							<select name="order" required id="order" onChange={handleChangeOrder} defaultValue={orders[0].id}>
								{orders.filter(order => !order.route).map(order => (
									<option key={order.id} value={order.id}>N° {order.id} - {order.client.name} {order.client.lastName}</option>
								))}
							</select>
						</label>
						<label>
							<span>Cliente</span>
							<select name='client' required id='client' disabled>
								<option value={selectedOrder?.client.id}>{selectedOrder?.client.name} {selectedOrder?.client.lastName}</option>
							</select>
						</label>
						<button type="submit">Asignar ruta</button>
					</form>
				</div>
				<button className={styles.closeButton} onClick={() => setIsNewRouteAssigningForEmployeeModalOpen(false)}>
					<p>X</p>
				</button>
			</div>
		</div>
  );
}