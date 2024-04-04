import NavBar from './components/NavBar';
import './App.css';

function App() {

  return (
    <>
      <div className="container">
        <div className="side-bar">
          <NavBar />
        </div>
        <div className="main-content">
          <div className="top-banner">
            Top banner
          </div>
          <div className="active-component">
            <h1>Shopping Cart Project</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
