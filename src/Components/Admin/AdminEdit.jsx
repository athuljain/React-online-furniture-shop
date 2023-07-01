import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../User/UserContext";
import { products } from "../User/products";

const AdminEdit = () => {
  const { productId } = useParams(); // Retrieve the productId from URL parameters
  const { setProducts } = useContext(UserContext);
  const [product, setProduct] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    
    const fetchedProduct = products.find((product) => product.id === parseInt(productId) );
    setProduct(fetchedProduct);
  }, [productId]);

  const handleSave = (updatedProduct) => {
    // Update the product in the products array
    const updatedProducts = products.map((product) =>
      product.id === parseInt(productId) ? updatedProduct : product
    );
    setProducts(updatedProducts);

    console.log(updatedProduct);
  
    // Redirect back to the product list
    navigate('/admin/products');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <form>
        <label>Title:</label>
        <input type="text" value={product.title} onChange={(e) => setProduct({ ...product, title: e.target.value })} />

        <label>Image:</label>
        <input type="text" value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} />

        <label>Category:</label>
        <input type="text" value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} />

        <label>Price:</label>
        <input type="text" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />

        <label>Quantity:</label>
        <input type="text" value={product.qty} onChange={(e) => setProduct({ ...product, qty: e.target.value })} />

        <button type="button" onClick={() => handleSave(product)}>Save</button>
      </form>
    </div>
  );
};

export default AdminEdit;
