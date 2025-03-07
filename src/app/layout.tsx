import Container from "@/components/Container";
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
        <MenuPanel />
        <div className="layout">
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  );
}
