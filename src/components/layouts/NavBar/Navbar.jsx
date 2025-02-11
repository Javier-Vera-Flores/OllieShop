import {Link} from 'react-router-dom';
import "./navBar.css"
export const Navbar = () => {
  return (
    <nav>
      <ul className='menu-partes'>
      
        <li>Inicio</li>
        <li>Patinetas</li>
        <li>Ropa</li>
        <li>Tenis</li>
      </ul>
    </nav>
  );
};
