import React from "react";

export default function ShippingForm({ shippingAddress, setShippingAddress }) {
  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="checkout-card">
      <h3>Shipping Address</h3>

      <div className="form-grid">
        <input name="fullName" placeholder="Full Name *" value={shippingAddress.fullName} onChange={handleChange} />
        <input name="phone" placeholder="Phone *" value={shippingAddress.phone} onChange={handleChange} />
        <input name="addressLine1" placeholder="Address Line 1 *" value={shippingAddress.addressLine1} onChange={handleChange} />
        <input name="addressLine2" placeholder="Address Line 2" value={shippingAddress.addressLine2} onChange={handleChange} />
        <input name="city" placeholder="City *" value={shippingAddress.city} onChange={handleChange} />
        <input name="state" placeholder="State" value={shippingAddress.state} onChange={handleChange} />
        <input name="postalCode" placeholder="Postal Code" value={shippingAddress.postalCode} onChange={handleChange} />
        <input name="country" placeholder="Country *" value={shippingAddress.country} onChange={handleChange} />
      </div>
    </div>
  );
}
