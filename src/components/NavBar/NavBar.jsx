import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = ({ cart }) => {

  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    countItems();
  })

  function countItems() {
    let itemCount = 0;
    cart.forEach(item => {
      itemCount += item.itemAmount;
    })
    setCartQty(itemCount);
  }

  return (
    <>
      <div className="nav-bar">
        <Link to='/' className="nav-item">Home</Link>
        <Link to='/shop' className="nav-item">Shop</Link>
        <Link to='/cart' className="nav-item nav-cart">Cart<span className='cart-qty'>{cartQty}</span></Link>
      </div>
    </>
  )
}

export default NavBar;