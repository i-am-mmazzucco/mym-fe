'use client'

import { IProduct } from "@/interfaces/products.interface";
import React, { useEffect } from "react";
import styles from '@/styles/pages/products/Product.module.scss';
import Image from "next/image";

interface ProductProps {
	params: {
		id: string;
	}
}

export default function Product({ params }: ProductProps) {
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
			<div className={styles.productDetailsContainer}>
				<header>
					<button>
						<p>Editar</p>
          </button>
        </header>
				<main className={styles.product}>
					<div className={styles.productImage}>
						<Image 
							src={product?.image || '/assets/no-image.png'} 
							alt={product?.name || 'No image'} 
							fill
							style={{ 
								objectFit: 'contain',
								backgroundColor: 'transparent',
							}}
							priority
							unoptimized
						/>
					</div>
					<div className={styles.productDetails}>                     
						<div className={styles.productDetailsHeader}>
							<p className={styles.productDetailsHeaderTitle}>
								<h1>{product?.name}</h1>
								<span className={product?.isActive ? styles.yes : styles.no}>
									{product?.isActive ? 'ACTIVO' : 'INACTIVO'}
								</span>
							</p>
							<p className={styles.productDetailsHeaderDescription}>{product?.description}</p>
						</div>
						<div className={styles.productDetailsBody}>
							<p>
								<span>Cantidad en stock</span>
								<span>{product?.lot?.quantity || 0}</span>
							</p>
							<p>
								<span>Número de lote</span>
								<span>{product?.lot?.lotNumber || 'N/A'}</span>
							</p>
							<p>
								<span>Precio unitario</span>
								<span>${product?.price}</span>
							</p>
						</div>
					</div>
				</main>
			</div>
    </div>
  );
}