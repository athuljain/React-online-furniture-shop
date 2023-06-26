import React, { useState } from 'react';
import {products} from '../User/products'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


console.log(products);

export default function AdminProducts(){

    const [productsList, setProductsList] = useState(products);
const handleRemoveProduct = (productId) => {
    const updatedProductsList = productsList.filter(
      (product) => product.id !== productId
    );
    setProductsList(updatedProductsList);
  };


    return(
        <div className='allProducts'>
      <h1>All Products</h1>
      <div className='productsList'> 
      {products.map((product) => (
        <Link  className='linkWithoutDecoration' >
        <MDBCard >
            <div className='cardproduct'>
          <MDBCardImage className='allProductsImg' src={product.image} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle className='allProductsTitle'>{product.title}</MDBCardTitle>
            <MDBCardText className='allProductsCategory'>{product.category}</MDBCardText>
            <MDBCardText className='allProductsPrice'>Price: {product.price}</MDBCardText>

            
          </MDBCardBody>
          <button>Edit</button>
          <button onClick={() => handleRemoveProduct(product.id)}>Delete</button>
          </div>
        </MDBCard>
        </Link>
      ))}
      </div>
    </div>
    );
}

