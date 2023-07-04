import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import UserContext from "../User/UserContext";
import "./AdminAddProduct.css"
// import { products } from "../User/products"; 
import { useNavigate } from "react-router-dom";

export default function AdminAddProduct({ handleAddProduct }) {
  //const  product = useContext(UserContext)
  

  const {products,setProducts,}=useContext(UserContext)

  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    image: "",
    category: "",
    price: 0,
    qty: 1
  });
  const navigate=useNavigate()
  


  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    console.log(updatedProducts);
   // console.log("adminadd",product);
    setNewProduct({
      id: "",
      title: "",
      image: "",
      category: "",
      price: 0,
      qty: 1
    });
    navigate('/admin/products')

  };

  return (
    <div className="add-product-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseInt(e.target.value) })}
            required
          />
        </Form.Group>
        <Form.Group controlId="qty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={newProduct.qty}
            onChange={(e) => setNewProduct({ ...newProduct, qty: parseInt(e.target.value) })}
            required
          />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
}
