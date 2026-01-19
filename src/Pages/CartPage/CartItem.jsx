import { useContext } from "react";
import { CartContext } from "../../Appcontext/CartContext.jsx";
import { assets } from "../../assets/index.js";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);


  const getImageUrl = (item) => {
    if (!item || !item.image) return assets.profile;

    // If image is string (already a URL)
    if (typeof item.image === "string") {
      return item.image;
    }

    // If image is array and first item has url
    if (Array.isArray(item.image) && item.image[0]?.url) {
      return item.image[0].url;
    }

    // If image is array of strings
    if (Array.isArray(item.image) && typeof item.image[0] === "string") {
      return item.image[0];
    }

    return assets.profile;
  };

  return (
    <div className="cart-item-row">
      <div className="cart-item-img">
        <img src={getImageUrl(item)} alt={item.name} />
      </div>

      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">Rs. {item.price}</p>
      </div>

      <div className="cart-item-qty">
        <button
          onClick={() => updateQuantity(item._id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => updateQuantity(item._id, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <div className="cart-item-remove">
        <button onClick={() => removeFromCart(item._id)}>Remove</button>
      </div>

    </div>
  );
}
