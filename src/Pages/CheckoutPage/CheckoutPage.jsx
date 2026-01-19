import React, { useContext, useState } from "react";
import "./Checkout.css";
import ShippingForm from "./ShippingForm";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import api from "../../Appcontext/api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Appcontext/CartContext.jsx";
import { Appcontext } from "../../Appcontext/Appcontext.jsx";

export default function Checkout() {
    const { cart, setCart } = useContext(CartContext);
    const { user } = useContext(Appcontext);
    const navigate = useNavigate();

    const [shippingAddress, setShippingAddress] = useState({
        fullName: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "Pakistan",
        postalCode: ""
    });

    const paymentMethod = "cash";
    const [notes, setNotes] = useState("");
    const [placingOrder, setPlacingOrder] = useState(false);

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = 180;
    const totalAmount = subtotal + deliveryFee;

    const placeOrder = async () => {
        if (cart.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        if (!shippingAddress.fullName || !shippingAddress.phone || !shippingAddress.addressLine1 || !shippingAddress.city || !shippingAddress.country) {
            toast.error("Please fill all required address fields");
            return;
        }

        try {
            setPlacingOrder(true);

            const orderPayload = {

                items: cart.map(item => ({
                    product: item._id,
                    name: item.name,
                    image: item.image?.[0]?.url || item.image,
                    price: item.price,
                    quantity: item.quantity
                })),
                shippingAddress,
                paymentMethod,
                totalAmount,
                notes
            };



            const res = await api.post("/Orderroutes/createorder", orderPayload);

            if (res.data.success) {
                await setCart([])
                toast.success("Order placed successfully");
                navigate("/shop");
            } else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error("Failed to place order");
        } finally {
            setPlacingOrder(false);
        }
    };

    return (
        <div className="Checkout">
            <div className="checkout-container">

                <div className="checkout-left">
                    <ShippingForm
                        shippingAddress={shippingAddress}
                        setShippingAddress={setShippingAddress}
                    />

                    <PaymentMethod />

                    <div className="checkout-notes">
                        <h3>Order Notes (optional)</h3>
                        <textarea
                            placeholder="Any special instructions..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                </div>

                <div className="checkout-right">
                    <OrderSummary
                        cart={cart}
                        subtotal={subtotal}
                        deliveryFee={deliveryFee}
                        totalAmount={totalAmount}
                    />

                    <button
                        className="place-order-btn"
                        onClick={placeOrder}
                        disabled={placingOrder}
                    >
                        {placingOrder ? "Placing Order..." : "Place Order"}
                    </button>
                </div>

            </div>
        </div>
    );
}
