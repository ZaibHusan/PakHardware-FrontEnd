import React, { useContext, useState } from "react";
import EditProfileModal from "./EditProfileModal/EditProfileModal.jsx";
import "./profileheader.css";
import { assets } from "../../../assets/index.js";
import { Appcontext } from "../../../Appcontext/Appcontext.jsx";
import api from "../../../Appcontext/api.js";

export default function ProfileHeader({ user }) {
  const [open, setOpen] = useState(false);

  const { isUserlogin } = useContext(Appcontext)
  const Handlelogout = async () => {
    try {
      const res = await api.post("/Userroutes/logout");
      if (res.data.success) {
        isUserlogin();
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="profile-header">
        <div className="profile-header-left">
          <img
            src={user?.avatar || assets.profile}
            alt="User"
            className="profile-avatar"
          />
          <div className="profile-info">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <span>{user?.phone}</span>
          </div>
        </div>

        <div className="profile-header-right">
          <button className="edit-profile-btn" onClick={() => setOpen(true)}>
            Edit Profile
          </button>

          <button className="logout-btn" onClick={() => Handlelogout()}>
            Logout
          </button>
        </div>
      </div>

      {open && <EditProfileModal user={user} onClose={() => setOpen(false)} />}
    </>
  );
}
