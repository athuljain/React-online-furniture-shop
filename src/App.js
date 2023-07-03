import './App.css';
import { BrowserRouter as Router, Route, Routes,useLocation  } from 'react-router-dom';
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
import Wishlist from './Components/User/WishList';

import { UserProvider } from './Components/User/UserContext';
import AdminProduct from './Components/Admin/AdminProduct';
import AdminSidebar from './Components/Admin/AdminSideBar';
import AdminAddProduct from './Components/Admin/AdminAddProduct';
import UserAdmin from './Components/Admin/UserAdmin';
import UserLogindata from './Components/Admin/UserLogindata';
import AdminEdit from './Components/Admin/AdminEdit';
import AdminLogin from './Components/Admin/AdminLogin';
import { products } from './Components/User/products';
//import { products } from './Components/User/products';

function App() {
  
  const location=useLocation

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [products, setProducts] = useState([]);
  // const [admin,setAdmin]=useState({username:"admin",password:"admin"})
//  const [userLoginStatus,setUserLoginStatus]=useState(null)
  

  const handleAddtoCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, product]);
      console.log("Product added to cart", product);
    } else {
      console.log("Product already in cart");
      
    }
  };


  const handleAddtoWishlist = (product) => {
    const isAlreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (isAlreadyInWishlist) {
      console.log("Product already in Wishlist");
    } else {
      setWishlistItems([...wishlistItems, product]);
      console.log("Product added to Wishlist", product);
    }
  };

  const removeFromWishList = (itemId) => {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlistItems);
  };

  const removeFromCart=(itemId)=>{
    const updatedCartItems=cartItems.filter((item)=>item.id !== itemId)
    setCartItems(updatedCartItems)
  }

  const handleAddProduct=(newProduct) =>{
    setProducts([...products,newProduct])
  }
  

  
  const RenderHeaderAndFooter = location.path !== "/admin";

  return (
    <div className="App">
      <UserProvider> 
      <Router>
        {RenderHeaderAndFooter && <HeaderNavbar cartItems={cartItems}  /> } 
        
        <Routes>
          <Route path="/login" element={<Login  />} />
          <Route path='/register' element={<UserRegister />} />
          <Route path='/' element={<BodyHeader />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sofa' element={<Sofa />} />
          <Route path='/chair' element={<Chair />} />
          <Route path='/table' element={<Table />} />
          <Route path='/bed' element={< Bed />} />
          <Route path='/products/:productId'  element={< ViewProduct  handleAddtoCart={handleAddtoCart} handleAddtoWishlist={handleAddtoWishlist} />} />
          <Route path='/cart' element={< Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path='/wishlist' element={<Wishlist wishlistItems={wishlistItems} removeFromWishList={removeFromWishList} />} />

          {/* <Route path='/admin' element={ <AdminBody />} /> */}
          {/* <Route path='/admin/product' element={ <AdminProducts />} /> */}
          <Route path='/adminlogin' element={<AdminLogin /> }></Route>
          <Route path='/admin' element={<AdminSidebar /> }>
            
            <Route path='/admin/products' element={<AdminProduct />}></Route>
            <Route path='/admin/user' element={<UserAdmin />}></Route>
           
            <Route path='/admin/addproduct' element ={<AdminAddProduct handleAddProduct={handleAddProduct} />}></Route>
            <Route path='/admin/edit/:productId' element={<AdminEdit  setProducts={setProducts}/>}></Route>

          </Route>
        </Routes>
        {RenderHeaderAndFooter && <Footer /> } 
        
        
       
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
