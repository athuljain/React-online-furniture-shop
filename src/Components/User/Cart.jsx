import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";

export default function Cart({
  cartItems = [],
  handleAddToCart,
  removeFromCart,
}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

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
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={item.id} className="cart-item">
              <div className="image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "250px" }}
                />
              </div>
              <div className="item-details">
                <h4 style={{ color: "black" }}>{item.title}</h4>
                <p style={{ color: "black" }}>
                  Price: {calculateTotalAmount(item.price, quantities[index])}
                </p>
                <div>
                  <button
                    className="CartBtn"
                    onClick={() => decrementQuantity(index)}
                  >
                    -
                  </button>
                  <h6>Quantity: {quantities[index]} </h6>
                  <button
                    className="CartBtn"
                    onClick={() => incrementQuantity(index)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <Link
                  className="remove-log"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <CiCircleRemove />
                </Link>
              </div>
            </div>
          ))}
          <div>
            <h3 style={{ color: "black" }}>Total Amout : {CartTotal()}</h3>
            <button className="CartTotal"> Buy Now !</button>
          </div>
        </div>
      ) : (
        <p style={{ color: "black" }}>Your Cart is Empty.</p>
      )}
    </div>
  );
}
