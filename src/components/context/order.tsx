'use context';
import { IOrder } from '@/interfaces/orders.interface';
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";

export const OrdersContext = React.createContext<{
  orders: IOrder[];
  setOrders: Dispatch<SetStateAction<IOrder[]>>;
}>({
  orders: [],
  setOrders: () => {},
});

const url = process.env.beUrl as string;

export const OrdersProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${url}/orders`, {
        method: 'GET',
        headers:{
           'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      if (data.statusCode) {
        throw new Error(`Was an error posting data. ${JSON.stringify(data)}`)
      }

      setOrders(data);
     } catch (error) {
        console.log("Error: ", error);
     }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  )
}