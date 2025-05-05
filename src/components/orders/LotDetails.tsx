import styles from '@/styles/components/orders/LotDetails.module.scss';
import { IOrder } from '@/interfaces/orders.interface';

interface LotDetailsProps {
	order: IOrder | null;
	setIsLotOpen: (isOpen: boolean) => void;
	itemId: number | null;
}

export default function LotDetails({ order, setIsLotOpen, itemId }: LotDetailsProps) {
	const item = order?.items.find(item => item.id === itemId);

	return (
		<div className={styles.lotDetailsContainer}>
			<div className={styles.lotDetailsBox}>
				<button className={styles.closeButton} onClick={() => setIsLotOpen(false)}>
					<p>X</p>
				</button>
				<tr>
					<td>
						<span>Producto</span>
						<p>{item?.product.name}</p>
					</td>
					<td>
						<span>Lote</span>
						<p>N°{item?.product?.lot?.lotNumber}</p>
					</td>
					<td>
						<span>Fecha de elaboración</span>
						<p>{item?.product?.lot?.manufactureDate ? new Date(item?.product?.lot?.manufactureDate).toISOString().split('T')[0] : 'Sin fecha'}</p>
					</td>
					<td>
						<span>Fecha de vencimiento</span>
						<p>{item?.product?.lot?.expirationDate ? new Date(item?.product?.lot?.expirationDate).toISOString().split('T')[0] : 'Sin fecha'}</p>
					</td>
				</tr>
			</div>
		</div>
  );
}