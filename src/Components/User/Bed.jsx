import React, { useContext } from "react";
import "./Bed.css";
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
export default function Bed() {
  const { products } = useContext(UserContext);
  console.log(products);
  //const [bedProducts,setBedProducts]=useState([])

  // useState(() => {
  const filteredProducts = products.filter(
    (product) => product.category === "Bed"
  );

  //  setProducts(filteredProducts);
  // }, []);

  return (
    <div className="Bed-Products">
      <h1>Bed Products</h1>
      <div className="Bed-productsList">
        {filteredProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="linkWithoutDecoration"
          >
            <div className="Bed-cardproduct">
              <MDBCardImage
                className="Bed-ProductsImg"
                src={product.image}
                position="top"
                alt=""
              />
              <MDBCardBody>
                <MDBCardTitle className="Bed-ProductsTitle">
                  {product.title}
                </MDBCardTitle>
                <MDBCardText className="Bed-ProductsCategory">
                  {product.category}
                </MDBCardText>
                <MDBCardText className="Bed-ProductsPrice">
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
