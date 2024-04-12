import { useState, useEffect } from 'react';
import './shop.css';
import ItemCard from '../ItemCard/ItemCard';

const Shop = ({ itemData, cart, setCart }) => {

    const [loadingScreen, setLoadingScreen] = useState(true);

    useEffect(() => {
      showLoadingScreen();
    }, [itemData]);

    function showLoadingScreen() {
      setTimeout(() => {
        setLoadingScreen(false);
      }, 1000);
    }

    return (
        <div className="shop-page">
          <span className="shop-heading" style={{ display: loadingScreen ? 'none' : 'block' }}>Exchange your hard-earned currency for things you probably don't need!</span>
          <div className='loading-container' style={{ display: loadingScreen ? 'flex' : 'none' }}>
            <div className="loading-screen">LOADING . . .</div>
          </div>
          <div className="item-cards" style={{ display: loadingScreen ? 'none' : 'grid' }}>
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
    )
}

export default Shop;