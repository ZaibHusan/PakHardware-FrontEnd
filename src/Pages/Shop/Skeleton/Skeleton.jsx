// ShopRightSkeleton.jsx
import React from "react";
import "./Skeleton.css";

export default function ShopRightSkeleton() {
  return (
    <div className="shop-right skeleton-wrapper">

      {/* Description skeleton */}
      <div className="skeleton-line w-80"></div>
      <div className="skeleton-line w-90"></div>

      {/* Top bar */}
      <div className="skeleton-top-bar">
        <div className="skeleton-line w-30"></div>
        <div className="skeleton-box w-20 h-30"></div>
      </div>

      {/* Product grid skeleton */}
      <div className="skeleton-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="skeleton-card" key={i}>
            <div className="skeleton-img"></div>
            <div className="skeleton-line w-90"></div>
            <div className="skeleton-line w-60"></div>
            <div className="skeleton-line w-40"></div>
          </div>
        ))}
      </div>

    </div>
  );
}
