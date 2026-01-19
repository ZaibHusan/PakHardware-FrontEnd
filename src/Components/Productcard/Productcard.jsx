import React, { useContext, useState } from "react";
import "./Productcard.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Appcontext/CartContext.jsx";

export default function Productcard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [adding, setAdding] = useState(false);

  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : 0;

  const handleAddToCart = async (e) => {
    e.stopPropagation(); // stop card navigation
    if (adding) return;

    try {
      setAdding(true);
      await addToCart(product);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div
      className="Productcard"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <div className="productcard-container">

        {discount > 0 && (
          <div className="discount-badge">-{discount}%</div>
        )}

        <div className="product-img">
          <img src={product.image[0]?.url} alt={product.name} />
        </div>

        <div className="product-info">
          <p className="brand">{product.brand}</p>
          <p className="name">{product.name}</p>

          <div className="price-row">
            <span className="price">Rs {product.price}</span>
            {product.originalPrice > product.price && (
              <span className="old-price">Rs {product.originalPrice}</span>
            )}
          </div>

          <button
            className="cart-btn"
            onClick={handleAddToCart}
            disabled={adding}
          >
            {adding ? "Adding..." : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
