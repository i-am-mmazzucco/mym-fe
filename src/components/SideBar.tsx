import Link from 'next/link';
import '../styles/components/SideBar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="logo">M&M</div>
    <nav>
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/clients">Clientes</Link></li>
        <li><Link href="/employees">Empleados</Link></li>
        <li><Link href="/products">Productos</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
