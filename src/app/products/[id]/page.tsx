'use client'

import { IProduct } from "@/interfaces/products.interface";
import React, { useEffect } from "react";

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
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {product?.id}</p>
    </div>
  );
}