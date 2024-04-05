import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {

    return (
      <>
        <div className="nav-bar">
          <Link to='/' className="nav-item">Home</Link>
          <Link to='/shop' className="nav-item">Shop</Link>
          <Link to='/cart' className="nav-item">Cart</Link>
        </div>
      </>
    )
}

export default NavBar;