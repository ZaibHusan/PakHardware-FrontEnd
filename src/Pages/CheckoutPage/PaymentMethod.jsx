import React from "react";

export default function PaymentMethod() {
  return (
    <div className="checkout-card">
      <h3>Payment Method</h3>

      <div className="payment-options">
        <label className="active">
          <input
            type="radio"
            name="payment"
            value="cash"
            checked
            readOnly
          />
          Cash on Delivery
        </label>

        <label className="disabled">
          <input
            type="radio"
            name="payment"
            value="online"
            disabled
          />
          Online Payment (Coming Soon)
        </label>
      </div>
    </div>
  );
}
