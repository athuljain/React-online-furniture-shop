import { useParams } from "react-router-dom";
import { products } from "./products";
import "./ViewProducts.css";
import React from "react";
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

function ViewProduct() {
  const { productId } = useParams();
  const parsedProductId = parseInt(productId, 10);
  const product = products.find((p) => p.id === parsedProductId);

  console.log(product);

  if (!product) {
    return <div>No Product Found</div>;
  }

  return (
    <MDBContainer fluid className="my-5">
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
                      marginTop:"20px",
                      height: "300px",
                      width:"350px",
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
                        <h4 className="text-dark" >
                          {product.title}
                        </h4>
                      </p>
                      <p className="small text-muted">{product.category}</p>
                    </div>
                    <div>
                      <p className="small text-muted">Rated 4.0/5</p>
                    </div>
                  </div>
                  <hr className="my-0" />
                  <div className="d-flex justify-content-between">
                    <p>
                      <h4  className="text-dark">
                        Price: {product.price}
                      </h4>
                    </p>
                  </div>
                  <hr className="my-0" />
                  <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                    <MDBBtn className="CartBtn" color="primary">Add to Cart</MDBBtn>
                    <MDBBtn className="WishListBtn" color="primary">Add to Wishlist</MDBBtn>
                  </div>
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