

import React, { useState } from "react";

export default function Cart({ cartItems = [] }) {
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
                  <button onClick={() => decrementQuantity(index)}>-</button>
                  <h6>Quantity: {quantities[index]} </h6>
                  <button onClick={() => incrementQuantity(index)}>+</button>
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
