import { useState } from 'react';
import './item-card.css';

const ItemCard = ({ id, title, price, description, image, rating, cart, setCart }) => {

    const [itemAmount, setItemAmount] = useState(1);

    function handleAddAmount() {
      setItemAmount(itemAmount + 1);
    }

    function handleSubtractAmount() {
      if (itemAmount > 1) {
        setItemAmount(itemAmount - 1);
      } else return;
    }

    function handleChanges(event) {
      const itemQty = parseInt(event.target.value);
      if (!isNaN(itemQty)) {
        setItemAmount(itemQty);
      }
    }

    function handleSubmit(id, title, itemAmount, price, image) {
      const alreadyInCart = cart.find(item => item.id === id);

      if (alreadyInCart) {
        const newCart = cart.map(item => {
          if (item.id === id) {
            return {
              ...item,
              itemAmount: item.itemAmount + itemAmount
            };
          }
          return item;
        });
        setCart(newCart);
      } else {
        setCart([...cart, {id, title, itemAmount, price, image}]) 
      }
      setItemAmount(1);
      console.log(cart);
    }

    return (
      <div className='item-card' id={id}>
        <div className='item-picture'>
          <img src={image} />
        </div>
        <div className='item-info'>
          <div className='item-name'>{title}</div>
          <div className='item-price'>Price: ${price}</div>
          <div className='item-rating'>Rating: {rating.rate} / 5</div>
          <div className='item-buttons'>
            <span className='qty'>Qty.</span>
            <button type='button' className='minus-button' onClick={() => handleSubtractAmount()}>-</button>
            <input type='text' id={`item-${id}-qty`} className='item-amount' onChange={handleChanges} value={itemAmount}></input>
            <button type='button' className='add-button' onClick={() => handleAddAmount()}>+</button>
            <button type='button' className='add-to-cart-button' onClick={() => handleSubmit(id, title, itemAmount, price, image)}>Add to cart</button>
          </div>
        </div>
      </div>
    )
}

export default ItemCard;