'use client'

import styles from '@/styles/components/orders/OrderTable.module.scss';
import { IOrder } from '@/interfaces/orders.interface';

interface OrderTableProps {
	order: IOrder | null;
}

export default function OrderTable({ order }: OrderTableProps) {
	return (
    <div className={styles.orderTableContainer}>
      <header>
        <p>Pedido N{order?.id}</p>
        <div>
          <p>Cliente</p>
					<p>{order?.client.name} {order?.client.lastName}</p>
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
              {order?.items.map((item => {
                return (
                  <tr key={item.id}>
                    <td>
                      {item.product.name}  
                    </td>
                    <td>
                      {item.quantity}
                    </td>
                    <td>
                      {item.product.price * item.quantity} 
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
                <p>{order?.employeeAssigned.name} {order?.employeeAssigned.lastName}</p>
              </text>
              <text>
                <p>Dirección de entrega</p>
                <p>{order?.client.address}</p>
              </text>
              <text>
                <p>Fecha</p>
                <p>{order?.dateDelivery ? new Date(order?.dateDelivery).toLocaleDateString() : 'Sin fecha de entrega'}</p>
              </text>
              <text>
                <p>Estado</p>
                <p>{order?.statusDelivery === 'pending' ? 'Pendiente' : order?.statusDelivery === 'delivered' ? 'Entregado' : 'Cancelado'}</p>
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
                <p>{order?.invoiceNumber || 'Sin factura'}</p>
              </text>
              <text>
                <p>Total facturado</p>
                <p>${order?.totalAmountPaid}</p>
              </text>
              <text>
                <p>Medio de pago</p>
                <p>
                  {
                    order?.typePayment === 'cash' 
                      ? 'Efectivo' 
                      : order?.typePayment === 'debit_card' 
                        ? 'Tarjeta débito' 
                        : order?.typePayment === 'credit_card' 
                          ? 'Tarjeta crédito' 
                          : 'Sin pago'
                  }
                </p>
              </text>
              <text>
                <p>Estado</p>
                <p>{order?.statusPayment === 'pending' ? 'Pendiente' : order?.statusPayment === 'paid' ? 'Pagado' : 'Cancelado'}</p>
              </text>
            </div>
          </div>
        </div>
      </main>
    </div>
	)
}
