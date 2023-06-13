import React from 'react';
import {products} from './products'
import './Products.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

console.log(products);

export default function Products(){
    
    return(
        <div className='allProducts'>
      <h1 >All Products</h1>
      <div className='productsList'>
      {products.map((product) => (
        <MDBCard key={product.id}>
            <div className='cardproduct'>
          <MDBCardImage className='allProductsImg' src={product.image} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle className='allProductsTitle'>{product.title}</MDBCardTitle>
            <MDBCardText className='allProductsCategory'>{product.category}</MDBCardText>
            <MDBCardText className='allProductsPrice'>Price: {product.price}</MDBCardText>
            <MDBBtn className='allProductscartBtn' href='#'>Add To Cart</MDBBtn>
            <MDBBtn className='allProductsWishlistBtn' href='#'>Add To WishList</MDBBtn>
          </MDBCardBody>
          </div>
        </MDBCard>
      ))}
      </div>
    </div>
    );
  }
    