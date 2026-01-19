import React, { useContext, useEffect, useState } from "react";
import ProfileHeader from "./profileheader/profileheader.jsx";
import OrderTabs from "./OrderTabs/OrderTabs.jsx";
import OrdersList from "./OrdersList/OrdersList.jsx";
import "./Profile.css";
import { Appcontext } from "../../Appcontext/Appcontext.jsx";
import { useNavigate } from "react-router-dom";
import api from "../../Appcontext/api.js";
import { toast } from "react-toastify";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("All");
  const { isLogin, user } = useContext(Appcontext);
  const navigate = useNavigate();
  const [orders, setorders] = useState([])


  const getallorders = async () => {
    try {
      const res = await api.get("/Orderroutes/Getorder");

      if (res.data.success) {
        setorders(res.data.Orderformating)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter(o => o.status === activeTab);


  useEffect(() => {
    if (!isLogin) {
      navigate("/AuthPage");
    }
  }, [isLogin, navigate]);


  useEffect(() => {
    getallorders();
  }, [isLogin])

  return (
    <div className="profile-page">
      <ProfileHeader user={user} />

      <OrderTabs active={activeTab} setActive={setActiveTab} />

      <div className="profile-content">
        <OrdersList orders={filteredOrders} />
      </div>
    </div>
  );
}
