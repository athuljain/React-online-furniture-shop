import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Components/HeaderNavbar.css";
import { BsMinecart } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';


function HeaderNavbar() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <div className="Nav-bar">
          <div className="left-section">
            <input className="input-Search" type="text" placeholder="Search" />
            <button className="Search-btn" type="submit">
              Search
            </button>
          </div>

          <div className="center-section">
            <a className="logo" href="/">
              Logo
            </a>
          </div>

          <div className="right-section">
          <Link className="login-logo" to="/login">
  <AiOutlineUser />
</Link>

            <a className="wishlist-logo" href="/">
              <GiSelfLove />
            </a>

            <a className="cart-logo" href="/">
              <BsMinecart />
            </a>
          </div>
        </div>

        <div className="navbar-second-line">
           <a className="link-text" href="/">
             Find a Studio
           </a>
           <a className="link-text" href="/">
            Track Your Order
           </a>
           <a className="link-text" href="/">
             Buy in Bulk
           </a>
           <a className="link-text" href="/">
             Contact Us
           </a>
         </div>

         <div className="thrid-nav">
  <div className="navbar-thrid-line">
    <a className="service-text" href="/">
      Furniture
      <div className="dropdown-list">
        <ul>
          <li> <Link to="/sofa">Sofa</Link></li>
          <li><Link to="/table">Table</Link></li>
          <li><Link to="/chair">Chair</Link></li>
        </ul>
      </div>
    </a>
    <a className="service-text" href="/">
      Home Decor
      <div className="dropdown-list">
        <ul>
          <li>Photoframe</li>
          <li>Wall Art</li>
        </ul>
      </div>
    </a>
    <a className="service-text" href="/">
     Dining Set
      <div className="dropdown-list">
        <ul>
          <li>Dinnerware</li>
          <li>Cakeware</li>
        </ul>
      </div>
    </a>
    <a className="service-text" href="/">
      Lamps & Lighting
    </a>
    <a className="service-text" href="/">
      Home Utility
    </a>
    <a className="service-text" href="/">
      Modular
    </a>
    
    <Link className="service-text" to="/Products">
      All Products
    </Link>
  </div>
</div>


      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
