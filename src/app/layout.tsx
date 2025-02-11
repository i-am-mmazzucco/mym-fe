import Sidebar from "@/components/MenuPanel";
import "@/styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="layout">
          {/* <Sidebar /> */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
