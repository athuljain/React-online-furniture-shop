import React from "react";
import "./WishList.css"

export default function Wishlist({ wishlistItems }) {
  return (
    <div className="WishList">
      <h3 className="WishlistHeader">Wish List</h3>
      {wishlistItems.length > 0 ? (
        <div>
          {wishlistItems.map((item) => (
            <div className="image-container wishListImg">
            <img src={item.image} alt={item.title}  />
          
            <div className="WishlistDetails" key={item.id}>
              <p className="wishLsitTitle">{item.title}</p>
              <p className="WishListPrice">Price: {item.price}</p>
            </div>
            </div>
          ))}
          <div>
                
                <button className="WishListBuyBtn"  > Buy Now</button>
              
            </div>
        </div>
      ) : (
        <p style={{ color: "black" }}>Your wishlist is empty.</p>
      )}
    </div>
    
  );
}
