'use client'

import { IEmployee } from "@/interfaces/employees.interface";
import React, { useEffect } from "react";

export default function EmployeePage({ params }: { params: { id: string } }) {
	const [employee, setEmployee] = React.useState<IEmployee | null>(null);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/employees/${params.id}`);
			const employee = await response.json();
			setEmployee(employee);
		})();
	}, []);

  return (
    <div>
      <h1>Employee Details</h1>
      <p>Employee ID: {employee?.id}</p>
      <p>Employee Name: {employee?.name}</p>
      <p>Employee Last Name: {employee?.lastName}</p>
      <p>Employee DNI: {employee?.dni}</p>
      <p>Employee Phone: {employee?.phone}</p>
      <p>Employee Route: {employee?.route?.id}</p>
    </div>
  );
}