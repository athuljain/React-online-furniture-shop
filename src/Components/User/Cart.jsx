import React from "react";

export default function Cart({ cartItems = [] }) {
 const incrementQuantity =()=>{

 }

 const decrementQuantity =()=>{

 }
 const calculateTotalAmount = () => {
 }
   

  return (
    <div className="Cart">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="image-container">
                <img src={item.image} alt={item.title} style={{ width: "250px" }} />
              </div>
              <div className="item-details">
                <h4 style={{ color: "black" }}>{item.title}</h4>
                <p style={{ color: "black" }}>Price: {item.price}</p>
                <div>
                
                    <button onClick={() => decrementQuantity()}>-</button>
                  
                  <h6>Quantity: </h6>
                  <button onClick={() => incrementQuantity()}>+</button>

                  <div className="total-amount">
        <h4 style={{"color":"black"}}>Total Amount: {calculateTotalAmount()}</h4>
        <button className="buy-button">Buy</button>
      </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "black" }}>Your cart is empty.</p>
      )}

      
    </div>
  );
}
