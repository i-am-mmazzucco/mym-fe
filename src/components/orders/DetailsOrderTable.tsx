'use client'

import styles from '@/styles/components/orders/DetailsOrderTable.module.scss';
import { IOrder } from '@/interfaces/orders.interface';
import { useEffect, useState } from 'react';
import LotDetails from './LotDetails';
import DeliverOrder from './DeliverOrder';
import EditOrder from './EditOrder';

interface OrderTableProps {
	order: IOrder | null;
}

export default function OrderTable({ order }: OrderTableProps) {
  const [isLotOpen, setIsLotOpen] = useState(false);
  const [isDeliverOrderModalOpen, setIsDeliverOrderModalOpen] = useState(false);
  const [isEditOrderModalOpen, setIsEditOrderModalOpen] = useState(false);
  const [itemId, setItemId] = useState<number | null>(null);

  const handleLotOpen = (id: number) => {
    setIsLotOpen(true);
    setItemId(id);
  }

  const handleEditOrder = () => {
    setIsEditOrderModalOpen(true);
  }

  const handleDeliverOrder = () => {
    setIsDeliverOrderModalOpen(true);
  }

  useEffect(() => {
    if (isDeliverOrderModalOpen || isEditOrderModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isDeliverOrderModalOpen, isEditOrderModalOpen]);

	return (
    <>
      {isLotOpen && <LotDetails order={order} setIsLotOpen={setIsLotOpen} itemId={itemId}/>}
      {isDeliverOrderModalOpen && <DeliverOrder order={order} setIsDeliverOrderModalOpen={setIsDeliverOrderModalOpen} />}
      {isEditOrderModalOpen && <EditOrder order={order} setIsEditOrderModalOpen={setIsEditOrderModalOpen} />}
      <div className={styles.orderTableContainer}>
        <header>
          <div className={styles.topHeader}>
            <p>Pedido N°{order?.id}</p>
            <div>
              <p>Cliente</p>
              <p>{order?.client.name} {order?.client.lastName}</p>
            </div>
          </div>
          <div className={styles.bottomHeader}>
            <button onClick={handleEditOrder}>
              <p>Editar</p>
            </button>
            <button onClick={handleDeliverOrder}>
              <p>Entregar pedido</p>
            </button>
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
                      <td>
                        <button onClick={() => handleLotOpen(item.id)}>
                          Ver lote
                        </button>
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
                  <p>{order?.dateDelivery ? new Date(order?.dateDelivery).toISOString().split('T')[0] : 'Sin fecha de entrega'}</p>
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
    </>
	)
}
