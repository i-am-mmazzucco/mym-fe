"use client";

import MenuPanel from "@/components/MenuPanel";

export default function Home() {
  return (
    <>
      <MenuPanel />
      <main>
        asd
      </main>
    </>
  );
}

const orders = [
  { id: 1, client: "Mateo Mazzuco", date: "20/08/2024", orderId: "N2862", status: "Asignado" },
  { id: 2, client: "Casa Tia SRL", date: "20/08/2024", orderId: "N2861", status: "Sin asignar" },
  { id: 3, client: "Lucas Velasco", date: "20/08/2024", orderId: "N2860", status: "Sin asignar" },
  { id: 4, client: "Pinturerias Paclin SA", date: "19/08/2024", orderId: "N2859", status: "Asignado" },
  { id: 5, client: "Marta Serrano", date: "19/08/2024", orderId: "N2858", status: "Asignado" },
];

const products = [
  { name: "Cloro", volume: "20.000 Litros", revenue: 2000000 },
  { name: "Lavandina", volume: "18.000 Litros", revenue: 2600000 },
  { name: "Detergente", volume: "11.000 Litros", revenue: 2600000 },
  { name: "Jabón líquido", volume: "5.000 Litros", revenue: 4200000 },
  { name: "Alcohol en gel", volume: "2.500 Litros", revenue: 2000000 },
];

const employees = [
  { name: "Romina Brodo", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces" },
  { name: "Cristian Fabiani", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=faces" },
  { name: "Laura Zohu", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=faces" },
];