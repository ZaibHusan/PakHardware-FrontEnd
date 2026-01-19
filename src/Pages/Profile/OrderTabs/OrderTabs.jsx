import React from "react";
import "./OrderTabs.css";
import { useNavigate } from "react-router-dom";

export default function OrderTabs({ active, setActive }) {
  const tabs = ["All", "pending", "processing", "shipped", "delivered", "cancelled"];
  const navigate = useNavigate();
  return (
    <div className="order-tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`order-tab ${active === tab ? "active" : ""}`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}

      <div className="order-tabs-right">
        <button className="cart-btns" onClick={()=>{navigate("/CartPage")}}>My Cart</button>
      </div>
    </div>
  );
}
