import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/User/Login';
import UserRegister from './Components/User/UserRegister';
import HeaderNavbar from './Components/HeaderNavbar';
import BodyHeader from './Components/User/BodyHeader';
import Products from './Components/User/Products.jsx';
import Sofa from './Components/User/Sofa';
import Chair from './Components/User/Chair';
import Table from './Components/User/Table';
import Bed from './Components/User/Bed';
import ViewProduct from './Components/User/ViewProduct';
import Footer from './Components/Footer';
import Cart from './Components/User/Cart';
import { useState } from 'react';
//import { products } from './Components/User/products';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddtoCart=(product)=>{
    setCartItems((prevCartItems)=>[...cartItems,product])
    console.log("product add to cart",product);
  }
  return (
    <div className="App">
      <Router>
        <HeaderNavbar />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<UserRegister />} />
          <Route path='/' element={<BodyHeader />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sofa' element={<Sofa />} />
          <Route path='/chair' element={<Chair />} />
          <Route path='/table' element={<Table />} />
          <Route path='/bed' element={< Bed />} />
          <Route path='/products/:productId'  element={< ViewProduct  handleAddtoCart={handleAddtoCart}/>} />
          <Route path='/cart' element={< Cart cartItems={cartItems} />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
