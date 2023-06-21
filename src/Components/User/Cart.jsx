

import React, { useState } from "react";
import "./Cart.css"

export default function Cart({ cartItems = [],handleAddToCart }) {
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    if (quantities[index] > 1) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const CartTotal = () => {
    let totalAmount = 0;
    cartItems.forEach((item, index) => {
      const amount = calculateTotalAmount(item.price, quantities[index]);
      totalAmount += amount;
    });
    return totalAmount;
  };
 

  const calculateTotalAmount = (price, quantity) => {
    return price * quantity;
  };

 
  return (
    <div className="Cart">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={item.id} className="cart-item">
              <div className="image-container">
                <img src={item.image} alt={item.title} style={{ width: "250px" }} />
              </div>
              <div className="item-details">
                <h4 style={{ color: "black" }}>{item.title}</h4>
                <p style={{ color: "black" }}>Price: {calculateTotalAmount(item.price, quantities[index])}</p>
                <div>
                  <button className="CartBtn" onClick={() => decrementQuantity(index)}>-</button>
                  <h6>Quantity: {quantities[index]} </h6>
                  <button className="CartBtn" onClick={() => incrementQuantity(index)}>+</button>
                </div>
              </div>
             


            </div>

            ))}
            <div>
                <h3 style={{"color":"black"}}>Total Amout : {CartTotal()}</h3>
                <button className="CartTotal"  > Buy Now</button>
              
            </div>
        </div>
      ) : (
        <p style={{ color: "black" }}>Your cart is empty.</p>
      )}
    </div>
  );
}
