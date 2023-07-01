import React, { useContext } from "react";
import UserContext from "../User/UserContext";
import { Image, Button } from "react-bootstrap";
import { products } from "../User/products";
import "./AdminProduct.css";

const AdminProduct = () => {
  const { setProducts } = useContext(UserContext);

  const handleEdit = (productId) => {
    // Construct the edit URL with the productId as a parameter
    const editUrl = `/admin/edit/${productId}`;

    // Redirect to the edit page
    window.location.href = editUrl;
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="admin-product">
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <Image src={product.image} alt={product.title} />
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.qty}</p>
          <Button onClick={() => handleEdit(product.id)}>Edit</Button>{" "}
          <Button onClick={() => handleDelete(product.id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default AdminProduct;
