import './shop.css';
import ItemCard from '../ItemCard/ItemCard';

const Shop = ({ itemData, cart, setCart }) => {

    return (
        <>
          <div className="shop-page">
            <span className="shop-heading">Exchange your hard-earned currency for things you don't need!</span>
            <div className="item-cards">
              {itemData.map((item) => (
                <div className="card-container" key={item.id}>
                  <ItemCard 
                    id={item.id}
                    title={item.title} 
                    price={item.price} 
                    description={item.description} 
                    image={item.image} 
                    rating={item.rating}
                    cart={cart}
                    setCart={setCart} />
                </div>
              ))}
            </div>
          </div>
        </>
    )
}

export default Shop;