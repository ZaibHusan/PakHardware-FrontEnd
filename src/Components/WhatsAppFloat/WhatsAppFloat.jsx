import React from "react";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923289067116"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
}
