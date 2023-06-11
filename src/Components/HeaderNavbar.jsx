import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Components/HeaderNavbar.css";
import { BsMinecart } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

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
            <a className="login-logo" href="/login">
              <AiOutlineUser />
            </a>

            <a className="wishlist-logo" href="/wishlist">
              <GiSelfLove />
            </a>

            <a className="cart-logo" href="/cart">
              <BsMinecart />
            </a>
          </div>
        </div>

        <div className="navbar-second-line">
           <a className="link-text" href="/studio">
             Find a Studio
           </a>
           <a className="link-text" href="/order">
            Track Your Order
           </a>
           <a className="link-text" href="/bulk">
             Buy in Bulk
           </a>
           <a className="link-text" href="/contact">
             Contact Us
           </a>
         </div>

          <div className="thrid-nav" >
         <div className="navbar-thrid-line"  >
           <a className="service-text" href="/furniture">
             Furniture
           </a>
           <a className="service-text" href="/homedecor">
            Home Decor
           </a>
           <a className="service-text" href="/kitchen">
             Kitchen & Dining
           </a>
           <a className="service-text" href="/lamps">
             Lamps & Lighting
           </a>
           <a className="service-text" href="/Home">
             Home Utility
           </a>
           <a className="service-text" href="/modular">
             Modular
           </a>
         </div>
         </div>

      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;



