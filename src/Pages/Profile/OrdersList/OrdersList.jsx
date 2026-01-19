import React from "react";
import OrderCard from "../OrderCard/OrderCard.jsx";
import "./OrdersList.css";

export default function OrdersList({ orders }) {
  if (!orders || orders.length === 0) {
    return <p className="no-orders">No orders found in this category.</p>;
  }

  return (
    <div className="orders-list-wrapper">
      <div className="orders-grid">
        {orders.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </div>
    </div>
  );
}
