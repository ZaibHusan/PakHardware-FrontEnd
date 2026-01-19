import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Appcontext/CartContext";
import "./CartIcon.css";
import CountUp from "react-countup";

export default function CartIcon() {
  const { cart } = useContext(CartContext);

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/CartPage" className="cart-root">
      <span className="material-symbols-outlined cart-symbol">shopping_cart</span>
      {totalQty > 0 && <span className="cart-count"><CountUp end={totalQty} /></span>}
    </Link>
  );
}
