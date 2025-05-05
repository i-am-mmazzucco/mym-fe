'use context';
import { IClient } from '../../interfaces/clients.interface';
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";

export const ClientsContext = React.createContext<{
  clients: IClient[];
  setClients: Dispatch<SetStateAction<IClient[]>>;
}>({
  clients: [],
  setClients: () => {},
});

const url = process.env.beUrl as string;

export const ClientsProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [clients, setClients] = useState<IClient[]>([]);

  const fetchClients = async () => {
    try {
      const response = await fetch(`${url}/clients`, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      const data = await response.json();

      if (data.statusCode) {
        throw new Error(`Was an error posting data. ${JSON.stringify(data)}`)
      }

      setClients(data);
     } catch (error) {
        console.log("Error: ", error);
     }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <ClientsContext.Provider value={{ clients, setClients }}>
      {children}
    </ClientsContext.Provider>
  )
}