import { useState, useEffect } from 'react';
import './cart.css';

const Cart = ({ cart, setCart }) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
      tallyTotal();
    });

    function tallyTotal() {
      let subtotal = 0;
      cart.forEach(item => {
        subtotal += (item.price * item.itemAmount);
      })
      subtotal = subtotal.toFixed(2);
      setTotal(subtotal);
    }

    function removeItem(id) {
      const oldCart = [...cart];
      const newCart= oldCart.filter((item) => item.id !== id);
      setCart(newCart);
    }

    return (
      <div className='cart-page'>
        <h1 className='cart-title'>Shopping Cart</h1>
        <div className='empty-cart-text' style={{display: cart.length === 0 ? 'block' : 'none'}}>There's nothing in your cart!</div>
        <div className='cart-items'>
          {cart.map((item) => (
            <div className='cart-item' key={`cart-${item.id}`}>
              <div className='cart-picture'>
                <img src={item.image} />
              </div>
              <div className='cart-item-info'>
                <div style={{fontWeight: 'bold'}}>{item.title}</div>
                <div>Quantity: {item.itemAmount}</div>
                <div>Price: ${item.price.toFixed(2)} each</div>
                <button type='button' className='remove-item-button' onClick={() => removeItem(item.id)}>Remove from cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className='total-cost' style={{display: cart.length === 0 ? 'none' : 'block'}}>Total: ${total}</div>
      </div>
    )
}

export default Cart;