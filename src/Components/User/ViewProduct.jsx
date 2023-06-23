import { Link, useParams } from "react-router-dom";
import { products } from "./products";
import "./ViewProducts.css";
import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function ViewProduct({ handleAddtoCart, handleAddtoWishlist }) {
  const { loginStatus, setLoginStatus } = useContext(UserContext);

  const { productId } = useParams();
  const parsedProductId = parseInt(productId, 10);
  const product = products.find((p) => p.id === parsedProductId);

  console.log(product);

  const [addToCartMessage, setAddToCartMessage] = useState("");
  const [addToWishListMessage, setAddToCartWishListMessage] = useState("");

  //const [message, setMessage] = useState("");

  if (!product) {
    return <div>No Product Found</div>;
  }

  const addToCart = () => {
    if (loginStatus === "success") {
      const isAlreadyInCart = handleAddtoCart(product);
      if (isAlreadyInCart) {
        setAddToCartMessage(<Link to="/cart"> "Product already in cart"</Link>);

        console.log("Product already in cart");
      } else {
        setAddToCartMessage(<Link to="/cart">"Product added to cart "</Link>);

        console.log("Product added to cart", product);
      }
    } else {
      setLoginStatus("failure");
    }
  };
  const addToWishlist = () => {
    if (loginStatus === "success") {
      const isAlreadyInWishList = handleAddtoWishlist(product);
      if (isAlreadyInWishList) {
        setAddToCartWishListMessage(
          <Link to="/wishlist">"Product alredy in wishlist "</Link>
        );

        console.log("Product already in wishlist");
      } else {
        setAddToCartWishListMessage(
          <Link to="/wishlist">"Product added to Wishlist "</Link>
        );
        console.log("Product added to wishlist", product);
      }
    } else {
      setLoginStatus("failure");
    }
  };

  return (
    <MDBContainer fluid className="ViewContainer my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRow>
              <MDBCol md="6">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-overlay"
                >
                  <MDBCardImage
                    src={product.image}
                    fluid
                    className="w-100"
                    style={{
                      marginTop: "20px",
                      height: "300px",
                      width: "350px",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      borderBottomLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                    }}
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>
                        <h4 className="text-dark" style={{ color: "black" }}>
                          {product.title}
                        </h4>
                      </p>
                      <p
                        className="small text-muted"
                        style={{ color: "black" }}
                      >
                        {product.category}
                      </p>
                    </div>
                    <div>
                      <p
                        className="small text-muted"
                        style={{ color: "black" }}
                      >
                        Rated 4.0/5
                      </p>
                    </div>
                  </div>
                  <hr className="my-0" />
                  <div className="d-flex justify-content-between">
                    <p>
                      <h4 className="text-dark" style={{ color: "black" }}>
                        Price: {product.price}
                      </h4>
                    </p>
                  </div>
                  <hr className="my-0" />
                  <div className="view-product-btns d-flex justify-content-between align-items-center pb-2 mb-4">
                    <MDBBtn
                      className="CartBtn"
                      color="primary"
                      onClick={addToCart}
                    >
                      Add to Cart
                    </MDBBtn>

                    <MDBBtn
                      className="WishListBtn"
                      color="primary"
                      onClick={addToWishlist}
                    >
                      Add to Wishlist
                    </MDBBtn>
                  </div>
                  <div className="login-status">
                    {addToCartMessage && (
                      <p style={{ color: "black" }}>{addToCartMessage}</p>
                    )}
                    {loginStatus === "failure" && (
                      <Link to="/login" style={{ color: "black" }}>
                        Please login .
                      </Link>
                    )}
                  </div>

                  {/* <div className="login-status">
          {addToWishListMessage && <p style={{ color: "black" }}>{addToWishListMessage}</p>}
                    {loginStatus === "failure" && (
                      <Link to='/login' style={{ color: "black" }}>Please login to add to Wishlist.</Link>
                    )} */}

                  {/* </div> */}
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ViewProduct;
