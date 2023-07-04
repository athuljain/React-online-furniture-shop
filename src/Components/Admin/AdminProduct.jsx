import React, { useContext } from "react";
import UserContext from "../User/UserContext";
import { Image, Button } from "react-bootstrap";
// import { product } from "../User/products";
import "./AdminProduct.css";
import { useNavigate } from "react-router-dom";


const AdminProduct = () => {
  const {setProducts ,products} = useContext(UserContext);
 // console.warn(products);
  // const [productList,setProductList]=useState(products)
// console.log(productList);
console.log("hello");


 const navigate=useNavigate()

  

  const handleEdit = (productId) => {
  navigate(`/admin/edit/${productId}`)
   
  };

  const handleAddProduct=()=>{
  //   setProductList(products)

    // console.log("setprodcutss", setProductList);
    navigate("/admin/addproduct")
  }


  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="admin-product">
      <div>
        <Button onClick={handleAddProduct} >Add Product
          
        </Button>
      </div>
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
