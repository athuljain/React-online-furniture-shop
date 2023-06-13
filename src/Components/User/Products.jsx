import React from 'react';
import {products} from './products'
import './Products.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

console.log(products);


export default function Products(){
    
    return(
        <div className='allProducts'>
      <h1 >All Products</h1>
      <div className='productsList'>
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id} >
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
    