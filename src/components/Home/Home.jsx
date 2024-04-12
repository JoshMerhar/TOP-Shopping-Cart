import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {

    return (
      <div className="home-page">
        <div className="home-page-content">
          <div className="home-header">Welcome to our humble e-shop</div>
          <div className="home-subheader">We have exactly 20 items available</div>
          <div className="home-btn-container"><Link to='/shop' className="home-shop-button">Explore our inventory</Link></div>
        </div>
      </div>
    )
}

export default Home;