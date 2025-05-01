'use client';
import Container from "@/components/Container";
import { ProductsProvider } from "@/components/context/product";
import { ClientsProvider } from "@/components/context/clients";
import { EmployeesProvider } from "@/components/context/employees";
import { OrdersProvider } from "@/components/context/order";
import MenuPanel from "@/components/MenuPanel";
import "@/styles/globals.scss";
import { usePathname } from "next/navigation";
import LoginContainer from "@/components/LoginContainer";
import { AuthProvider } from "@/components/context/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="es">
      <body>
        <AuthProvider>
          {isLoginPage ? (
            <div className="layout">
              <LoginContainer>{children}</LoginContainer>
            </div>
          ) : (
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
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
