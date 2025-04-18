'use context';
import { IProduct } from "../../interfaces/products.interface";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";

export const ProductsContext = React.createContext<{
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
}>({
  products: [],
  setProducts: () => {},
});

const url = process.env.beUrl as string;

export const ProductsProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${url}/products`, {
        method: 'GET',
        headers:{
           'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      if (data.statusCode) {
        throw new Error(`Was an error posting data. ${JSON.stringify(data)}`)
      }

      setProducts(data);
     } catch (error) {
        console.log("Error: ", error);
     }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}