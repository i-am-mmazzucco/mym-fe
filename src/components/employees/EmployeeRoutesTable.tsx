'use client'

import styles from '@/styles/components/employees/EmployeeRoutesTable.module.scss';
import React, { useEffect } from 'react';
import NewRoute from './NewRoute';
import { IEmployee } from '@/interfaces/employees.interface';
import GoogleMaps, { MarkerProps, RouteProps } from '../googleMaps/GoogleMaps';
import SeeRoute from './SeeRoute';
import { EmployeesContext } from '../context/employees';
interface EmployeeRoutesTableProps {
  employee: IEmployee | null;
}

export const warehouseOrigin = { lat: -31.051295, lng: -64.026207 };

const url = process.env.beUrl as string;

export default function EmployeeRoutesTable({ employee }: EmployeeRoutesTableProps) {
	const [currentEmployee, setCurrentEmployee] = React.useState<IEmployee | null>(employee);
  const [isNewRouteAssigningForEmployeeModalOpen, setIsNewRouteAssigningForEmployeeModalOpen] = React.useState(false);
  const [isSeeRouteModalOpen, setIsSeeRouteModalOpen] = React.useState(false);
	const [selectedRouteId, setSelectedRouteId] = React.useState<{ markers: MarkerProps[], routes: RouteProps[] } | null>(null);
	const { setEmployees } = React.useContext(EmployeesContext);
	
  const handleNewRouteAssigningForEmployee = () => {
    setIsNewRouteAssigningForEmployeeModalOpen(true);
  } 
  
  useEffect(() => {
    if (isNewRouteAssigningForEmployeeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      (async () => {
        const response = await fetch(`${url}/employees`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        setEmployees(data);
        setCurrentEmployee(data.find((e: IEmployee) => e.id === employee?.id) || employee);
      })()
    }
  }, [isNewRouteAssigningForEmployeeModalOpen, employee]);

	const routes = currentEmployee?.routes?.map(route => {
		return {
			id: route.id.toString(),
			origin: warehouseOrigin,
			destination: { lat: route.coordinates.coordinates[1], lng: route.coordinates.coordinates[0] }
		}
	}) || [];

	const markers = currentEmployee?.routes?.map(route => {
		return {
			id: route.id.toString(),
			lat: route.coordinates.coordinates[1],
			long: route.coordinates.coordinates[0]
		}
	}) || [];

	const handleSeeRoute = () => {
		setSelectedRouteId({
			markers: [
				...markers,
				{ lat: warehouseOrigin.lat, long: warehouseOrigin.lng, id: 'warehouse1' }
			],
			routes
		});
		setIsSeeRouteModalOpen(true);
	}

	return (
    <>
			{ isSeeRouteModalOpen && <SeeRoute setIsSeeRouteModalOpen={setIsSeeRouteModalOpen} markers={selectedRouteId?.markers || []} routes={selectedRouteId?.routes || []}/> }
      { isNewRouteAssigningForEmployeeModalOpen && <NewRoute setIsNewRouteAssigningForEmployeeModalOpen={setIsNewRouteAssigningForEmployeeModalOpen} employeeId={employee?.id as number} /> }
      <div className={styles.employeeRoutesTableContainer}>
        <header>
          <p>Últimas rutas asignadas</p>
          <button onClick={handleNewRouteAssigningForEmployee}>
            <p>Asignar ruta</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
							<path d="M9.25 0.75L8.35625 1.62063L13.0938 6.375H0.5V7.625H13.0938L8.35625 12.3581L9.25 13.25L15.5 7L9.25 0.75Z" fill="white"/>
						</svg>
          </button>
        </header>
        <main className={styles.employeeRoutes}>
					<div className={styles.routesTable}>
						<div className={styles.filters}>
							<label>
								<input type='text' placeholder='Buscar en últimas rutas' />
							</label>
							<button>
								<p>Filtrar</p>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<g clip-path="url(#clip0_211_151)">
										<path d="M11.25 17.5H8.75C8.41848 17.5 8.10054 17.3683 7.86612 17.1339C7.6317 16.8995 7.5 16.5815 7.5 16.25V11.5063L2.86875 6.875C2.63401 6.64166 2.5014 6.32474 2.5 5.99375V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H16.25C16.5815 2.5 16.8995 2.6317 17.1339 2.86612C17.3683 3.10054 17.5 3.41848 17.5 3.75V5.99375C17.4986 6.32474 17.366 6.64166 17.1313 6.875L12.5 11.5063V16.25C12.5 16.5815 12.3683 16.8995 12.1339 17.1339C11.8995 17.3683 11.5815 17.5 11.25 17.5ZM3.75 3.75V5.99375L8.75 10.9937V16.25H11.25V10.9937L16.25 5.99375V3.75H3.75Z" fill="#A8A7A5"/>
									</g>
									<defs>
										<clipPath id="clip0_211_151">
											<rect width="20" height="20" fill="white"/>
										</clipPath>
									</defs>
								</svg>
							</button>
						</div>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>PEDIDO</th>
									<th>CLIENTE</th>
									<th>FECHA</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{(currentEmployee?.routes || []).map((route) => {
									return (
										<tr key={route.id}>
											<td>N° {route.order?.id}</td>
											<td>{currentEmployee?.name} {currentEmployee?.lastName}</td>
											<td>{new Date(route.updatedAt).toISOString().split('T')[0]}</td>
											<td>
												<button onClick={handleSeeRoute}>
													Ver recorrido
												</button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<div className={styles.mapContainer}>
						<GoogleMaps
							styles={{ width: '100%', height: '100%', borderRadius: '.8rem' }}
							routes={routes}
							markers={
								[
									...markers, 
									{ lat: warehouseOrigin.lat, long: warehouseOrigin.lng, id: 'warehouse1' },
									{ lat: warehouseOrigin.lat, long: warehouseOrigin.lng, id: 'warehouse2' },
								] as MarkerProps[]
							}
						/>
					</div>
        </main>
      </div>
    </>
	)
}
