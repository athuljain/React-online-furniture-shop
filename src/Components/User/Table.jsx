import React, { useContext, useState } from "react";
import "./Table.css";
// import { products } from "./products";
import "./Products.css";
import { Link } from "react-router-dom";
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import UserContext from "./UserContext";
export default function Table() {
  const {products} = useContext(UserContext)
  //const [tableProducts,setTableProducts]=useState([])


  const filteredProducts=products.filter((product)=> product.category==="Table")
 

  
  return (
    <div className="Table-Products">
      <h1>Table</h1>
      <div className="Table-productsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Table-cardproduct">
              <MDBCardImage
                className="Table-ProductsImg"
                src={product.image}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle className="Table-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Table-ProductsCategory">
                  {product.category}
                </MDBCardText>
                <MDBCardText className="Table-ProductsPrice">
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
