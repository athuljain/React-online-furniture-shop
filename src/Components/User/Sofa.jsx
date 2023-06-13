import React from 'react';
import './Sofa.css'
import {products} from './products'
import './Products.css'
import { Link } from 'react-router-dom';
import {
    
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    
  } from 'mdb-react-ui-kit';
export default function Sofa(){
    const filteredProducts = products.filter((product) => product.category === 'Sofa');
    console.log(filteredProducts);
    return(
        <div className='Sofa-Products'>
        <h1 >Sofa</h1>
        <div className='Sofa-productsList'>
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className='linkWithoutDecoration' >
              <div className='Sofa-cardproduct'>
            <MDBCardImage className='Sofa-ProductsImg' src={product.image} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle className='Sofa-ProductsTitle'>{product.title}</MDBCardTitle>
              <MDBCardText className='Sofa-ProductsCategory'>{product.category}</MDBCardText>
              <MDBCardText className='Sofa-ProductsPrice'>Price: {product.price}</MDBCardText>
              
            </MDBCardBody>
            </div>
          </Link>
        ))}
        </div>
      </div>
    )
}