import React from "react";

export default function OrderSummary({ cart, subtotal, deliveryFee, totalAmount }) {
  return (
    <div className="checkout-card summary-card">
      <h3>Order Summary</h3>

      <div className="summary-items">
        {cart.map(item => (
          <div className="summary-item" key={item._id}>
            <img src={item.image?.[0]?.url || item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <span>{item.quantity} × Rs {item.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>Rs {subtotal}</span>
      </div>

      <div className="summary-row">
        <span>Delivery</span>
        <span>Rs {deliveryFee}</span>
      </div>

      <div className="summary-total">
        <strong>Total</strong>
        <strong>Rs {totalAmount}</strong>
      </div>
    </div>
  );
}
