import React, { useState } from 'react'
import "./Contact.css"
import Discount from '../../Components/Discount/Discount'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../Appcontext/api'
export default function Contact() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/Userroutes/UserContact", {
        name,
        email,
        phone,
        message
      });

      setLoading(false);

      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Contact">
      <div className="contact-container">

        {/* HERO */}
        <div className="contact-hero">
          <img src="https://i.pinimg.com/1200x/21/1a/d8/211ad85f92e12fa8b909036291cf34f2.jpg" alt="" />
          <div className="hero-text-d">
            <h1><span>Contact</span> Us</h1>
            <p><span onClick={() => navigate("/")}>Home</span> <span>{">"}</span> <span>Contact</span></p>
          </div>
        </div>

        {/* MAIN */}
        <div className="contact-main">
          <div className="main-left">

            <div className="main-left-top">
              <h1>Get in Touch</h1>
              <p>
                Do you have any questions or feedback? We would love to hear from you!
                Please fill out the form below and we will get back to you as soon as possible.
              </p>
            </div>

            <div className="main-left-bottom">

              <div className="main-left-bottom-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div className="main-left-bottom-right">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={loading ? "loading-btn" : ""}
                >
                  {loading ? <span className="btn-loader"></span> : "Send Message"}
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT INFO */}
          <div className="main-right">
            <div className="main-righ-box">
              <span className='material-symbols-outlined'>phone_in_talk</span>
              <h2>Phone Number</h2>
              <p>+92 3289067116</p>
            </div>

            <div className="main-righ-box">
              <span className='material-symbols-outlined'>email</span>
              <h2>Email Address</h2>
              <p>support@pakhardware.com</p>
            </div>

            <div className="main-righ-box">
              <span className='material-symbols-outlined'>location_on</span>
              <h2>Address</h2>
              <p>Akhgram Bazaar, Dir (U), KPK, Pakistan</p>
            </div>
          </div>

        </div>
      </div>

      {/* MAP */}
      <div className="mapp-address">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.8599780314194!2d72.01794015096378!3d34.9345508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc74ec35c63b81%3A0x739f8cf1f1fc6457!2sW2M9%2BR9P%2C%20Toormang%2C%20Pakistan!5e0!3m2!1sen!2s!4v1767396971308!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>

      <Discount />
    </div>
  )
}
