'use client'

import styles from '@/styles/components/ClientsTable.module.scss';

export default function ClientsTable() {
	return (
    <div className={styles.clientsTableContainer}>
      <header>
        <p>Clientes</p>
        <button onClick={() => { console.log('click') }}>
          <p>Nuevo cliente</p>
          <p>+</p>
        </button>
      </header>
      <main className={styles.clients}>
        <div className={styles.filters}>
					<label>
						<input type='text' placeholder='Buscar en clientes' />
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
              <th>CLIENTE</th>
              <th>DIRECCIÓN</th>
              <th>TELÉFONO</th>
              <th>
                PROMEDIO DE VENTAS
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
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client => {
              return (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.address}</td>
                  <td>{client.phone}</td>
                  <td>{client.sellPercentage}</td>
                </tr>
              )
            }))}
          </tbody>
        </table>
      </main>
    </div>
	)
}

const clients = [
  { id: 1, name: "Romina Brodo", address: 'Luis Dolivo 3468', phone: '3525435321', sellPercentage: '10%' },
  { id: 2, name: "Cristian Fabiani", address: 'Luis Dolivo 3468', phone: '3525435321', sellPercentage: '10%' },
  { id: 3, name: "Laura Zohu", address: 'Luis Dolivo 3468', phone: '3525435321', sellPercentage: '10%' },
  { id: 4, name: "Mateo Mazzucco", address: 'Luis Dolivo 3468', phone: '3525435321', sellPercentage: '10%' },
];