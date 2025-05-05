'use context';
import { IEmployee } from '@/interfaces/employees.interface';
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";

export const EmployeesContext = React.createContext<{
  employees: IEmployee[];
  setEmployees: Dispatch<SetStateAction<IEmployee[]>>;
}>({
  employees: [],
  setEmployees: () => {},
});

const url = process.env.beUrl as string;

export const EmployeesProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(`${url}/employees`, {
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

      setEmployees(data);
     } catch (error) {
        console.log("Error: ", error);
     }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  )
}