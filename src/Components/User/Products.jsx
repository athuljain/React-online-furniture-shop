import React, { useContext } from 'react';
import './Products.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

// console.log(products);


export default function Products(){
  const{products} = useContext(UserContext)
  console.log(products);
    
    // const [productList,setProductList]=useState(products)
    // console.log(productList);
    

    return(
        <div className='allProducts'>
      <h1>All Products</h1>
      <div className='productsList'> 
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id} className='linkWithoutDecoration' >
        <MDBCard >
            <div className='cardproduct'>
          <MDBCardImage className='allProductsImg' src={product.image} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle className='allProductsTitle'>{product.title}</MDBCardTitle>
            <MDBCardText className='allProductsCategory'>{product.category}</MDBCardText>
            <MDBCardText className='allProductsPrice'>Price: {product.price}</MDBCardText>

          </MDBCardBody>
          </div>
        </MDBCard>
        </Link>
      ))}
      </div>
    </div>
    );
  }
    