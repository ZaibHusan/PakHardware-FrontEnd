import React from "react";
import "./OrderCard.css";

export default function OrderCard({ order }) {
  return (
    <div className="order-card">
      {/* Top */}
      <div className="order-card-top">
        <div>
          <h4>Order #{order.id}</h4>
          <p className="order-date">Placed on {order.createdAt}</p>
        </div>

        <span className={`status-badge ${order.status.toLowerCase()}`}>
          {order.status}
        </span>
      </div>

      {/* Middle */}
      <div className="order-card-middle">
        <div className="order-row">
          <span>Items</span>
          <strong>{order.items}</strong>
        </div>

        <div className="order-row">
          <span>Subtotal</span>
          <strong>Rs {order.subtotal}</strong>
        </div>

        <div className="order-row">
          <span>Shipping</span>
          <strong>Rs {order.shippingFee}</strong>
        </div>

        <div className="order-row total">
          <span>Total</span>
          <strong>Rs {order.total}</strong>
        </div>
      </div>

      {/* Address */}
      <div className="order-address">
        <p>
          <strong>Deliver to:</strong> {order.address}
        </p>
      </div>

      {/* Bottom */}
      <div className="order-card-bottom">
        <span className="payment-method">{order.paymentMethod}</span>
        {order.status !== "Cancelled" && <button>View Details</button>}
      </div>
    </div>
  );
}
