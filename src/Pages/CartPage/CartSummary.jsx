import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { CartContext } from "../../Appcontext/CartContext";

export default function CartSummary() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
const DeliveryFee = 180;
  return (
    <div className="cart-summary-panel">

      <div className="cart-summary-header">
        <p>Order Summary</p>
      </div>

      <div className="cart-summary-body">

        <div className="summary-line">
          <span>Items</span>
          <span className="summary-value">
            <CountUp end={totalItems} duration={0.6} />
          </span>
        </div>

        <div className="summary-line total-line">
          <span>Total</span>
          <span className="summary-value total-value">
            Rs. <CountUp end={total} duration={0.8} separator="," />
          </span>
        </div>

        <div className="summary-line">
          <span>Delivery Fee</span>
          <span className="summary-value">
            Rs. <CountUp end={DeliveryFee} duration={0.6} separator="," />
          </span>
        </div>

      </div>

      <div className="cart-summary-footer">
        <button
          className="checkout-action-btn"
          onClick={() => navigate("/checkout")}
        >
          Continue to Checkout
        </button>
      </div>

    </div>
  );
}
