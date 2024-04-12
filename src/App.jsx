import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (itemData.length === 0) {
      fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(json=>setItemData([...json]));
    }
  }, [itemData.length]);

  if (name && name !== 'shop' && name !== 'cart') {
    return <ErrorPage />
  }

  return (
    <>
      <div className="container">
        <div className="top-nav-bar">
          <NavBar 
            cart={cart}
          />
        </div>
        <div className="main-content-area">
          {name === 'shop' ? (
            <Shop 
              itemData={itemData}
              cart={cart}
              setCart={setCart}
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
