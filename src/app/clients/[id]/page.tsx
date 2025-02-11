// pages/clients/[id].tsx

import Sidebar from "@/components/MenuPanel";

const ClientDetailPage = () => (
  <div className="container">
    <Sidebar />
    <main>
      <h1>Mateo Mazzuco</h1>
      <p>Dirección: Luis Dolivo 3467</p>
      <p>Teléfono: 3513409240</p>
      <h2>Últimos pedidos</h2>
      <table>
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Fecha</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>N2862</td>
            <td>20/08/2024</td>
            <td>$250,000</td>
            <td>Asignado</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
);

export default ClientDetailPage;
