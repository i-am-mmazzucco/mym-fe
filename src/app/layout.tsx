'use client';
import Container from "@/components/Container";
import { ProductsProvider } from "@/components/context/product";
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
        <ProductsProvider>
          <MenuPanel />
          <div className="layout">
            <Container>{children}</Container>
          </div>
        </ProductsProvider>
      </body>
    </html>
  );
}
