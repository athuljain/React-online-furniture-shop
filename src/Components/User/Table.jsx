import React from 'react';
import './Table.css'
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
export default function Table(){
    const filteredProducts = products.filter((product) => product.category === 'Table');
    console.log(filteredProducts);
    return(
        <div className='Table-Products'>
        <h1 >Table</h1>
        <div className='Table-productsList'>
        {filteredProducts.map((product) => (
          <MDBCard key={product.id}>
              <div className='Table-cardproduct'>
            <MDBCardImage className='Table-ProductsImg' src={product.image} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='Table-ProductsTitle'>{product.title}</MDBCardTitle>
              <MDBCardText className='Table-ProductsCategory'>{product.category}</MDBCardText>
              <MDBCardText className='Table-ProductsPrice'>Price: {product.price}</MDBCardText>
             
            </MDBCardBody>
            </div>
          </MDBCard>
        ))}
        </div>
      </div>
    )
}