import ClientTable from "@/components/ClientTable";
import Sidebar from "@/components/SideBar";

const ClientsPage = () => (
  <div className="container">
    <Sidebar />
    <main>
      <h1>Clientes</h1>
      <ClientTable />
    </main>
  </div>
);

export default ClientsPage;
