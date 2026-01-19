import React from "react";
import "./ProductSkeleton.css";

export default function ProductSkeleton({ count = 8 }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div className="product-skeleton-card" key={i}>
                    <div className="skeleton-img shimmer"></div>
                    <div className="skeleton-text shimmer"></div>
                    <div className="skeleton-text small shimmer"></div>
                    <div className="skeleton-btn shimmer"></div>
                </div>

            ))}
        </>
    );
}
