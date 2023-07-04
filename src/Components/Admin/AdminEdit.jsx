

import React, { useContext, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import UserContext from "../User/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import "./AdminEdit.css"

export default function AdminEdit() {
  const { products, setProducts } = useContext(UserContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState({});

  
  useEffect(() => {
    const productToEdit = products.find((product) => product.id === parseInt(productId));
    setEditedProduct(productToEdit);
  }, [products, productId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const editedProductIndex = products.findIndex((product) => product.id === editedProduct.id);

    
    const updatedProducts = [...products];
    updatedProducts[editedProductIndex] = editedProduct;
    setProducts(updatedProducts);

    
    navigate("/admin/products");
  };

  return (
    <div className="edit-product-container">
      <h3>Edit Product</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={editedProduct.title || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, title: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={editedProduct.image || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={editedProduct.category || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, category: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={editedProduct.price || 0}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: parseInt(e.target.value) })}
            required
          />
        </Form.Group>
        <Form.Group controlId="qty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={editedProduct.qty || 1}
            onChange={(e) => setEditedProduct({ ...editedProduct, qty: parseInt(e.target.value) })}
            required
          />
        </Form.Group>
        <Button type="submit">Save Changes</Button>
      </Form>
    </div>
  );
}
