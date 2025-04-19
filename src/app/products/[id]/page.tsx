'use client'

import { IProduct } from "@/interfaces/products.interface";
import React, { useEffect } from "react";
import styles from '@/styles/pages/products/Product.module.scss';

export default function ProductPage({ params }: { params: { id: string } }) {
	const [product, setProduct] = React.useState<IProduct | null>(null);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/products/${params.id}`);
			const product = await response.json();
			setProduct(product);
		})();
	}, []);

  return (
    <div className={styles.productContainer}>
			<div className={styles.breadcrumb}>
				<p>Inicio</p>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
					</svg>
				</div>
				<p>Productos</p>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
						<path d="M9.62501 7.5L5.25001 11.875L4.63751 11.2625L8.40001 7.5L4.63751 3.7375L5.25001 3.125L9.62501 7.5Z" fill="#414141"/>
					</svg>
				</div>
				<p>{product?.name}</p>
      </div>
			<div>
				<button>Editar</button>
				<div>
					<img src={product?.image} alt={product?.name} />
					<div>
						<div>
							<h1>{product?.name}</h1>
							<p>{product?.description}</p>
						</div>
						<div>
							<p><span>Cantidad en stock</span>{product?.lot?.quantity}</p>
							<p><span>Número de lote</span>{product?.lot?.lotNumber}</p>
							<p><span>Precio unitario</span>{product?.price}</p>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}