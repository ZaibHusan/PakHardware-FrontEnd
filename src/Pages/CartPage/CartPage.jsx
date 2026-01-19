import { useContext } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./cart.css";
import { CartContext } from "../../Appcontext/CartContext";

export default function CartPage() {
  const { cart, cartLoading } = useContext(CartContext);

  if (cartLoading) {
    return (
      <div className="cart-loading">
        <p>Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">

      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <span>{cart.length} Items</span>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>No items in cart.</p>
        </div>
      ) : (
        <div className="cart-body">

          <div className="cart-left">
            {cart.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>

          <div className="cart-right">
            <CartSummary />
          </div>

        </div>
      )}
    </div>
  );
}
