import React from "react";
import "./WishList.css";

import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Wishlist({ wishlistItems, removeFromWishList }) {
  const handleRemoveFromWishList = (itemId) => {
    removeFromWishList(itemId);
  };

  return (
    <div className="WishList">
      <h3 className="WishlistHeader">Your Wish List</h3>
      {wishlistItems.length > 0 ? (
        <div>
          {wishlistItems.map((item) => (
            <div className="image-container wishListImg">
              <img src={item.image} alt={item.title} />

              <div className="WishlistDetails" key={item.id}>
                <p className="wishLsitTitle">{item.title}</p>
                <p className="WishListPrice">Price: {item.price}</p>
              </div>
              <div>
                <Link
                  className="remove-logo"
                  onClick={() => handleRemoveFromWishList(item.id)}
                >
                  <CiCircleRemove />
                </Link>
              </div>
            </div>
          ))}
          <div>
            <button className="WishListBuyBtn">Buy Now !</button>
          </div>
        </div>
      ) : (
        <p style={{ color: "black" }}>Your Wishlist is Empty.</p>
      )}
    </div>
  );
}
