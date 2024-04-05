import './shop.css';
import ItemCard from '../ItemCard/ItemCard';

const Shop = ({ itemData }) => {

    return (
        <>
          <div className="shop-page">
            <span className="shop-heading">Exchange your hard-earned currency for things you don't need!</span>
            <div className="item-cards">
                {itemData.map((item) => (
                  <div className="card-container" key={item.id}>
                    <ItemCard 
                      title={item.title} 
                      price={item.price} 
                      description={item.description} 
                      image={item.image} 
                      rating={item.rating} />
                  </div>
                ))}
            </div>
          </div>
        </>
    )
}

export default Shop;