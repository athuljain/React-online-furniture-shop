import React, { useContext } from "react";
import "./Chair.css";
// import {products} from './products'
import { Link } from "react-router-dom";

import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import UserContext from "./UserContext";
export default function Chair() {
  const { products } = useContext(UserContext);
  // const [chairProducts,setChairProducts]=useState([])

  const filteredProducts = products.filter(
    (product) => product.category === "Chair"
  );

  return (
    <div className="Chair-Products">
      <div>
        <h1>Chair</h1>
      </div>
      <div className="Chair-ProductsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Chair-cardproduct">
              <MDBCardImage
                className="Chair-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Chair-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Chair-ProductsCategory">
                  {product.category}
                </MDBCardText>
                <MDBCardText className="Chair-ProductsPrice">
                  Price: {product.price}
                </MDBCardText>
              </MDBCardBody>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
