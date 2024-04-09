import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.css';

function App() {
  const { name } = useParams();

  const [itemData, setItemData] = useState([]);
  const [cart, setCart] = useState([]);

  if (itemData.length === 0) {
    fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then(json=>setItemData([...json]));
    }

  if (name && name !== 'shop' && name !== 'cart') {
    return <ErrorPage />
  }

  return (
    <>
      <div className="container">
        <div className="top-banner">
          <span>Ultra Mega Super Store</span>
        </div>
        <div className="side-bar">
          <NavBar />
        </div>
        <div className="main-content-area">
          {name === 'shop' ? (
            <Shop 
              itemData={itemData} 
              setCart={setCart}
              cart={cart}
            />
          ) : name === 'cart' ? (
            <Cart 
              cart={cart} 
              setCart={setCart}
            />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </>
  )
}

export default App
