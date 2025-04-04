'use client'

import styles from '@/styles/components/orders/OrderTable.module.scss';

export default function OrderTable() {
	return (
    <div className={styles.orderTableContainer}>
      <header>
        <p>Pedido N2123</p>
        <div>
          <p>Cliente</p>
					<p>Mateo Mazzucco</p>
        </div>
      </header>
      <main className={styles.order}>
        <div className={styles.detailOrder}>
          <div className={styles.filters}>
            <p>Detalles del pedido</p>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
              </tr>
            </thead>
            <tbody>
              {order.map((o => {
                return (
                  <tr key={o.id}>
                    <td>
                      {o.item}
                    </td>
                    <td>
                      {o.quantity}
                    </td>
                    <td>
                      {o.unitPrice}
                    </td>
                  </tr>
                )
              }))}
            </tbody>
          </table>
        </div>
        <div className={styles.details}>
          <div className={styles.logistic}>
            <div className={styles.filters}>
              <p>Detalles logísticos</p>
            </div>
            <div className={styles.content}>
              <text>
                <p>Ruta asignada</p>
                <p>Laura Zohu</p>
              </text>
              <text>
                <p>Dirección de entrega</p>
                <p>Luis dolivo 3468</p>
              </text>
              <text>
                <p>Fecha</p>
                <p>20/08/24</p>
              </text>
              <text>
                <p>Estado</p>
                <p>Entregado</p>
              </text>
            </div>
          </div>
          <div className={styles.pay}>
            <div className={styles.filters}>
              <p>Detalles del pago</p>
            </div>
            <div className={styles.content}>
              <text>
                <p>Factura</p>
                <p>F-2045</p>
              </text>
              <text>
                <p>Total facturado</p>
                <p>$720.000</p>
              </text>
              <text>
                <p>Medio de pago</p>
                <p>Transferencia</p>
              </text>
              <text>
                <p>Estado</p>
                <p>Pagado</p>
              </text>
            </div>
          </div>
        </div>
      </main>
    </div>
	)
}

const order = [
  { id: 1, item: "Lavandina", quantity: 3, unitPrice: 20000 },
  { id: 2, item: "Jabón líquido", quantity: 6, unitPrice: 12000 },
  { id: 3, item: "Enjuague ropa", quantity: 4, unitPrice: 13000 },
  { id: 4, item: "Cloro", quantity: 5, unitPrice: 7000 },
  { id: 5, item: "Limpia vidrios", quantity: 6, unitPrice: 30000 },
];