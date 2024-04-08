import './cart.css';

const Cart = ({ cart }) => {

    return (
      <div className='cart-page'>
        <h1 className='cart-title'>Shopping Cart</h1>
        <div className='cart-items'>
          {cart.map((item) => (
            <div className='cart-item' key={`cart-${item.id}`}>
              <div className='cart-picture'>
                <img src={item.image} />
              </div>
              <div className='cart-item-info'>
                <div>{item.title}</div>
                <div>Quantity: {item.itemAmount}</div>
                <div>Price: ${item.price} each</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Cart;