'use client'

import styles from '@/styles/components/employees/EmployeesTable.module.scss';

export default function EmployeesTable() {
	return (
    <div className={styles.employeesTableContainer}>
      <header>
        <p>Empleados</p>
        <button onClick={() => { console.log('click') }}>
          <p>Nuevo empleado</p>
          <p>+</p>
        </button>
      </header>
      <main className={styles.employees}>
        <div className={styles.filters}>
					<label>
						<input type='text' placeholder='Buscar en empleados' />
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
              <th>EMPLEADO</th>
              <th>DNI</th>
              <th>TELÉFONO</th>
              <th>RUTA</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee => {
              return (
                <tr key={employee.id}>
                  <td>{employee.employee}</td>
                  <td>{employee.dni}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <button className={employee.route === 'Asignada' ? styles.buttonAssigned : styles.buttonNotAssigned}>
                      {employee.route}
                    </button>
                  </td>
                </tr>
              )
            }))}
          </tbody>
        </table>
      </main>
    </div>
	)
}

const employees = [
  { id: 1, employee: "Romina Brodo", dni: '41158745', phone: '3525435321', route: 'Asignada' },
  { id: 2, employee: "Cristian Fabiani", dni: '41158745', phone: '3525435321', route: 'Asignar ruta' },
  { id: 3, employee: "Laura Zohu", dni: '41158745', phone: '3525435321', route: 'Asignar ruta' },
  { id: 4, employee: "Mateo Mazzucco", dni: '41158745', phone: '3525435321', route: 'Asignar ruta' },
];