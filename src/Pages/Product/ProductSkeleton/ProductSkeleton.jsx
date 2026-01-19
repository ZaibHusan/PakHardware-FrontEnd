import React from "react";
import "./ProductSkeleton.css";

export default function ProductSkeleton() {
  return (
    <div className="Product">
      {/* Breadcrumb */}
      <div className="skeleton-breadcrumb shimmer"></div>

      <section className="product-layout">
        {/* Gallery */}
        <div className="product-gallery">
          <div className="product-thumbs">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="skeleton-thumb shimmer"></div>
            ))}
          </div>

          <div className="product-main-image">
            <div className="skeleton-main-image shimmer"></div>
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <div className="skeleton-line small shimmer"></div>
          <div className="skeleton-line large shimmer"></div>

          <div className="skeleton-price shimmer"></div>

          <div className="skeleton-actions">
            <div className="skeleton-btn shimmer"></div>
            <div className="skeleton-btn shimmer"></div>
          </div>

          <div className="skeleton-policy shimmer"></div>
          <div className="skeleton-policy shimmer"></div>
          <div className="skeleton-policy shimmer"></div>
        </div>
      </section>

      {/* Description */}
      <section className="product-description">
        <div className="skeleton-desc-text shimmer"></div>
        <div className="skeleton-desc-image shimmer"></div>
      </section>

      {/* Related */}
      <section className="related-products">
        <div className="skeleton-related-title shimmer"></div>

        <div className="related-grid">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="skeleton-card shimmer"></div>
          ))}
        </div>
      </section>
    </div>
  );
}
