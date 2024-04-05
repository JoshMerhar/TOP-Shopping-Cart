import './item-card.css';

const ItemCard = ({ title, price, description, image, rating }) => {
    return (
        <>
          <div className='item-card'>
            <div className='item-picture'>
              <img src={image} />
            </div>
            <div className='item-info'>
              <div className='item-name'>{title}</div>
              <div className='item-price'>Price: ${price}</div>
              <div className='item-rating'>Rating: {rating.rate} / 5</div>
            </div>
          </div>
        </>
    )
}

export default ItemCard;