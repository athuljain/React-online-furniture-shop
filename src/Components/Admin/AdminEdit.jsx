// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import UserContext from "../User/UserContext";
// //import Products, { products } from "../User/products";
// import "./AdminEdit.css"



// const AdminEdit = () => {
//   const { productId } = useParams(); // Retrieve the productId from URL parameters
//   const { setProducts ,products} = useContext(UserContext);
//   // const [product, setProduct] = useState(null);
//   const navigate=useNavigate()

//   useEffect(() => {
    
//     const fetchedProduct = products.find((product) => product.id === parseInt(productId) );
//     setProducts(fetchedProduct);
//   }, [productId]);

  
   
//     const handleSave = (updatedProduct) => {
//       const updatedProducts = products.map((p) =>
//         p.id === parseInt(productId) ? updatedProduct : p
//       );
//       setProducts(updatedProducts);

//     console.log(updatedProduct);
  
//     // Redirect back to the product list
//     navigate('/admin/products');
//   };

//   if (!products) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="edit-container">
//       <h1>Edit Product</h1>
//       <form>
//         <label>Title:</label>
//         <input type="text" value={products.title} onChange={(e) => setProducts({ ...products, title: e.target.value })} />

//         <label>Image:</label>
//         <input type="text" value={products.image} onChange={(e) => setProducts({ ...products, image: e.target.value })} />

//         <label>Category:</label>
//         <input type="text" value={products.category} onChange={(e) => setProducts({ ...products, category: e.target.value })} />

//         <label>Price:</label>
//         <input type="text" value={products.price} onChange={(e) => setProducts({ ...products, price: e.target.value })} />

//         <label>Quantity:</label>
//         <input type="text" value={products.qty} onChange={(e) => setProducts({ ...products, qty: e.target.value })} />

//         <button type="button" onClick={() => handleSave(products)}>Save</button>
//       </form>
//     </div>
//   );
// };

// export default AdminEdit;



// import React, { useContext, useRef } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom';
// import UserContext from '../User/UserContext';

// const AdminEdit = () => {
//   const { products, setProducts } = useContext(UserContext);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const edit = products.filter((item) => item.id === parseInt(id));
//   const [edited] = edit;
//   const inputRef = useRef(edited);

//   const editHandler = () => {
//     const id = parseInt(inputRef.current.Id.value);
//     const title = inputRef.current.Title.value;
//     const image = inputRef.current.Image.value;
//     const category = inputRef.current.Category.value;
//     const price = parseInt(inputRef.current.Price.value);
//     const qty = parseInt(inputRef.current.Qty.value);

//     const updated = products.filter((item) => item.id !== edited.id);
//     const newDetails = { id, title, price, qty, image, category };
//     setProducts([...updated, newDetails]);

//     navigate('/admin/products');
//     alert('Product edited successfully');
//   };

//   return (
//     <div>
//       {edit.map((item) => (
//         <div key={item.id}>
//           <Form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Id</Form.Label>
//               <Form.Control name="Id" type="text" value={item.id} placeholder="Enter id" />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control name="Title" type="text" defaultValue={item.title} placeholder="Enter title" />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Image</Form.Label>
//               <Form.Control name="Image" type="text" defaultValue={item.image} placeholder="Add image" />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Category</Form.Label>
//               <Form.Control name="Category" type="text" defaultValue={item.category} placeholder="Category" />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Price</Form.Label>
//               <Form.Control name="Price" type="text" defaultValue={item.price} placeholder="Price" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Quantity</Form.Label>
//               <Form.Control name="Qty" type="text" defaultValue={item.qty} placeholder="Quantity" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//               <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>

//             <Button variant="primary" type="submit" onClick={editHandler}>
//               Submit
//             </Button>
//           </Form>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminEdit;



// import { useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// import UserContext from '../User/UserContext';

// export default function EditProduct() {
//   const {products,setProducts} = useContext(UserContext);
 

//   const nav = useNavigate();
//   const { id } = useParams();


//   const filteredProduct = products.filter((item) => item.id === parseInt(id));


//   const [editProduct, setEditProduct] = useState(filteredProduct[0]);

//   console.warn(filteredProduct[0]);



//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditProduct((prev) => {
//       return { ...prev, [name]: value };
//     });

//   };

//   const handleEdit = (e) => {
//     e.preventDefault();
//     const index = products.findIndex((item) => item.id === parseInt(id));
//     products[index] = editProduct;

//     nav('/admin/products');
//   };

//   return (
//     <>
//       <div className="auth-form">
//         <h2>Edit Product</h2>
        
//         <form>
//           <div className="form-group">
//             <label>title:</label>
//             <input
//               className="inpt"
//               type="text"
//               name="Title"
//               value={editProduct.title}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>category:</label>
//             <input
//               className="inpt"
//               type="text"
//               name="Category"
//               value={editProduct.category}
//               onChange={handleChange}
//             />
//           </div>
          
//           <div className="form-group">
//             <label>price:</label>
//             <input
//               className="inpt"
//               type="number"
//               name="Price"
//               value={editProduct.irice}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>image :</label>
//             <input
//               className="inpt"
//               type="text"
//               name="Image"
//               value={editProduct.image}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>qyt :</label>
//             <input
//               className="inpt"
//               type="text"
//               name="Qty"
//               value={editProduct.qty}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <button onClick={(e) => handleEdit(e)} type="submit">
//               Update
//             </button>
//             <button type="button" onClick={() => nav('/products')}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }