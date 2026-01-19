import React from "react";
import { Link } from "react-router-dom";
import "./Foooter.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-box">
          <h3>PAK Hardware</h3>
          <p>
            Your trusted hardware store for tools, electrical items,
            plumbing materials and construction essentials. Quality products
            at fair prices.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/profile">My Account</Link></li>
            <li><Link to="/CartPage">Cart</Link></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-box">
          <h3>Categories</h3>
          <ul>
            <li><Link to="/shop?category=Power Tools">Power Tools</Link></li>
            <li><Link to="/shop?category=Hand Tools">Hand Tools</Link></li>
            <li><Link to="/shop?category=Electrical">Electrical</Link></li>
            <li><Link to="/shop?category=Plumbing">Plumbing</Link></li>
            <li><Link to="/shop?category=Fasteners">Fasteners</Link></li>
            <li><Link to="/shop?category=Paint & Coatings">Paint & Coatings</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Akhgram Dir (U) , kpk, Peshawar, Pakistan</p>
          <p>📞 +92 3289067116</p>
          <p>✉️ pakhardware.official.com</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PAK Hardware. All Rights Reserved. <br />
          <span className="footer-credit">Created by Hussan Zaib</span>
        </p>
      </div>
    </footer>
  );
}
