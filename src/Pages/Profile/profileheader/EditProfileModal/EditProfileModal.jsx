import React, { useContext, useState } from "react";
import "./EditProfileModal.css";
import { assets } from "../../../../assets/index.js";
import api from "../../../../Appcontext/api.js";
import { toast } from "react-toastify";
import { Appcontext } from "../../../../Appcontext/Appcontext.jsx";

export default function EditProfileModal({ user, onClose }) {
    const [name, setName] = useState(user.name || "");
    const [preview, setPreview] = useState(user.avatar || null);
    const [file, setFile] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const {  isUserlogin } = useContext(Appcontext);

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        if (selected) {
            setFile(selected);
            setPreview(URL.createObjectURL(selected));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true)
        // Later: call API here
        const formData = new FormData();
        formData.append("name", name);
        if (file) formData.append("avatar", file);

        try {
            const res = await api.post("/Userroutes/profileEdit", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            setDisabled(false)

            if (res.data.success) {
                isUserlogin();
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <div className="modal-header">
                    <h3>Edit Profile</h3>
                    <span className="close-btn" onClick={onClose}>×</span>
                </div>

                <form className="modal-body" onSubmit={handleSubmit}>
                    <div className="avatar-section">
                        <img
                            src={preview || assets.profile}
                            alt="Preview"
                            className="avatar-preview"
                        />
                        <label className="upload-btn">
                            Change Photo
                            <input type="file" hidden onChange={handleImageChange} />
                        </label>
                    </div>

                    <div className="input-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>
                            Cancel
                        </button>
                        <button disabled={disabled} type="submit" className={disabled ? "save-btn save-btn-loading" : "save-btn"}>
                           {disabled ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
