'use client';
import Container from "@/components/Container";
import { ProductsProvider } from "@/components/context/product";
import { ClientsProvider } from "@/components/context/clients";
import { EmployeesProvider } from "@/components/context/employees";
import { OrdersProvider } from "@/components/context/order";
import MenuPanel from "@/components/MenuPanel";
import "@/styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ClientsProvider>
          <EmployeesProvider>
            <OrdersProvider>
              <ProductsProvider>
                <MenuPanel />
                <div className="layout">
                  <Container>{children}</Container>
                </div>
              </ProductsProvider>
            </OrdersProvider>
          </EmployeesProvider>
        </ClientsProvider>
      </body>
    </html>
  );
}
