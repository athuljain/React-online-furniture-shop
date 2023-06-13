import React from 'react';
import './Chair.css'
import {products} from './products'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
export default function Chair(){

    const filteredProducts=products.filter((product)=> product.category=== "Chair")
    console.log(filteredProducts);
    return(
        <div className="Chair-Products">
            <div>
                <h1>Chair</h1>
            </div>
            <div className="Chair-ProductsList">
                {filteredProducts.map((product)=>(
                 <MDBCard key={product.id}>
              <div className='Chair-cardproduct'>
            <MDBCardImage className='Chair-ProductsImg' src={product.image} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='Chair-ProductsTitle'>{product.title}</MDBCardTitle>
              <MDBCardText className='Chair-ProductsCategory'>{product.category}</MDBCardText>
              <MDBCardText className='Chair-ProductsPrice'>Price: {product.price}</MDBCardText>
              
            </MDBCardBody>
            </div>
          </MDBCard>
        ))}   
                

                
            </div>
        </div>
    )
}