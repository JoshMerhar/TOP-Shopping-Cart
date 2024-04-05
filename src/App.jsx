import { useParams } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const { name } = useParams();

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
            <Shop />
          ) : name === 'cart' ? (
            <Cart />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </>
  )
}

export default App
