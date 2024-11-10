// src/components/ClientTable.tsx
import { useState } from "react";

const ClientTable = () => {
  const [clients] = useState([
    { name: "Mateo Mazzuco", address: "Luis Dolivo 3467", phone: "3513409240", salesAverage: "32%" },
    { name: "Hydra SA", address: "Ramos Cárdenas 321", phone: "3516145828", salesAverage: "18%" },
    // Agrega más clientes según sea necesario
  ]);

  return (
    <div className="table-container">
      <div className="table-header">
        <input type="text" placeholder="Buscar en clientes" />
        <button>Filtrar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Promedio de Ventas</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.address}</td>
              <td>{client.phone}</td>
              <td>{client.salesAverage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
