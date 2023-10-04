import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../Components/HeaderNavbar.css";
import { BsMinecart } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import {GrUserAdmin} from "react-icons/gr"
import { useContext, useState } from "react";
import UserContext from "./User/UserContext";
import Badge from "react-bootstrap/Badge";




function HeaderNavbar({ cartItems }) {
  const { loginStatus,setLoginStatus } = useContext(UserContext);

  const [searchInput, setSearchInput] = useState("");

  const handleLogout=()=>{
    setLoginStatus("logout")
  }

  function handleSearch() {
    if (searchInput.toLowerCase().includes("sofa")) {
      return "/sofa";
    } else if (searchInput.toLowerCase().includes("chair")) {
      return "/chair";
    } else if (searchInput.toLowerCase().includes("table")) {
      return "/table";
    } else if (searchInput.toLowerCase().includes("product")) {
      return "/products";
    }
    else if (searchInput.toLowerCase().includes("bed")) {
      return "/bed";
    }
  }

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <div className="Nav-bar">
          <div className="left-section">
            <input
              className="input-Search"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Link
              to={handleSearch()}
              className="Search-btn linkWithoutDecoration"
            >
              Search
            </Link>
          </div>

          <div className="center-section">
            <Link className="logo" to="/">
              AJ Furniture
            </Link>
          </div>

          <div className="right-section">
            {loginStatus === "success" ? (
              <Link className="login-logo" to="/" onClick={handleLogout}>
                <IoMdLogOut />
              </Link>
            ) : (
              <Link className="login-logo" to="/login">
                <AiOutlineUser />
              </Link>
            )}

            <Link className="wishlist-logo" to="/wishlist">
              <GiSelfLove />
            </Link>

            <Link className="cart-logo" to="/cart">
              <BsMinecart />
              <Badge pill bg="secondary" className="cart-badge">
                {cartItems.length}
              </Badge>
            </Link>
            <Link className="admin-logo" to='/adminlogin'>
             <GrUserAdmin />
            </Link>
          </div>
        </div>

        <div className="navbar-second-line">
          <a className="link-text" href="/home">
            Find a Studio
          </a>
          <a className="link-text" href="/home">
            Track Your Order
          </a>
          <a className="link-text" href="/home">
            Buy in Bulk
          </a>
          <a className="link-text" href="/home">
            Contact Us
          </a>
        </div>

        <div className="thrid-nav">
          <div className="navbar-thrid-line">
            <Link to="/" className="service-text">
              Furniture
              <div className="dropdown-list">
                <ul>
                  <li>
                    {" "}
                    <Link className="linkWithoutDecoration" to="/sofa">
                      Sofa
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWithoutDecoration" to="/table">
                      Table
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWithoutDecoration" to="/chair">
                      Chair
                    </Link>
                  </li>
                  <li>
                    <Link className="linkWithoutDecoration" to="/bed">
                      Bed
                    </Link>
                  </li>
                </ul>
              </div>
            </Link>

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

            <Link className="service-text linkWithoutDecoration" to="/products">
              All Products
            </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
