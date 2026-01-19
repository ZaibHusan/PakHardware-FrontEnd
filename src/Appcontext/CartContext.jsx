import { createContext, useContext, useEffect, useState } from "react";
import { Appcontext } from "./Appcontext.jsx";
import api from "./api.js";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isLogin, user } = useContext(Appcontext);

  const [cart, setCart] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);


  const fetchCart = async () => {
    try {
      setCartLoading(true);

      if (!isLogin) {
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(localCart);
      } else {
        const res = await api.get("/Cartroutes/getcart");

        if (res.data.success) {
          setCart(res.data.items);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load cart");
    } finally {
      setCartLoading(false);
    }
  };


  const addToCart = async (product) => {
    try {
      if (!isLogin) {
        let localCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = localCart.find(i => i._id === product._id);

        if (existing) {
          localCart = localCart.map(i =>
            i._id === product._id ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          localCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(localCart));
        setCart(localCart);
      } else {
        const res = await api.post("/Cartroutes/addcart", { productId: product._id });

        if (res.data.success) {
          fetchCart();
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product to cart");
    }
  };


  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;

    try {
      if (!isLogin) {
        let localCart = JSON.parse(localStorage.getItem("cart")) || [];

        localCart = localCart.map(i =>
          i._id === productId ? { ...i, quantity } : i
        );

        localStorage.setItem("cart", JSON.stringify(localCart));
        setCart(localCart);
      } else {
        const res = await api.patch("/Cartroutes/updatecart", { productId, quantity });

        if (res.data.success) {
          fetchCart();
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update quantity");
    }
  };


  const removeFromCart = async (productId) => {
    try {
      if (!isLogin) {
        let localCart = JSON.parse(localStorage.getItem("cart")) || [];
        localCart = localCart.filter(i => i._id !== productId);

        localStorage.setItem("cart", JSON.stringify(localCart));
        setCart(localCart);
      } else {
        const res = await api.delete(`/Cartroutes/removecart/${productId}`);

        if (res.data.success) {
          fetchCart();
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove item");
    }
  };

 
  const mergeCartAfterLogin = async () => {
    try {
      const localCart = JSON.parse(localStorage.getItem("cart"));

      if (localCart && localCart.length > 0 && isLogin) {
        const res = await api.post("/Cartroutes/mergecart", { items: localCart });

        if (res.data.success) {
          localStorage.removeItem("cart");
          fetchCart();
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Cart sync failed");
    }
  };


  useEffect(() => {
    fetchCart();
  }, [isLogin]);

  useEffect(() => {
    if (isLogin && user?._id) {
      mergeCartAfterLogin();
    }
  }, [isLogin, user]);

 
  const value = {
    cart,
    cartLoading,
    addToCart,setCart,
    updateQuantity,
    removeFromCart,
    fetchCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
