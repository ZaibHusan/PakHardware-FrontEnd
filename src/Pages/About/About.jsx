import React from 'react'
import "./About.css"
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets';

export default function About() {
  const navigate = useNavigate();
  const teamMembers = [
    {
      name: "Sohaib Khan",
      role: "Owner & Founder",
      experience: "Managing hardware business operations, suppliers & customer relations",
      image: assets.Sohaib
    },
    {
      name: "Mr Tayyab",
      role: "Sales & Technical Support Manager",
      experience: "Guides customers on tools, machinery and product usage",
      image: assets.Tayyab
    },
    {
      name: "Usman Khan",
      role: "Store Manager",
      experience: "Oversees daily store operations, inventory and staff management",
      image: assets.Usman
    },
    {
      name: "Irshad Khan",
      role: "Customer Support Assistant",
      experience: "Handles walk-in customers, billing and basic product support",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
    }
  ];

  return (
    <div className="About">
      <div className="About-Hero">
        <img src="https://i.pinimg.com/1200x/fb/1b/7f/fb1b7fc8048fbda0618b0c132ca0f0ad.jpg" alt="" />
        <div className="hero-text-d">
          <h1><span>About</span>Us</h1>
          <p><span onClick={() => navigate("/")}>Home</span> <span>{">"}</span> <span>About</span></p>
        </div>
      </div>


      <div className="About_us">
        <img src="https://i.pinimg.com/736x/08/aa/83/08aa8332c543af45cdcd72d4d9e5cd27.jpg" alt="" />
        <div className="About_us_text">
          <h2>About Us</h2>
          <p>PAK Hardware is your reliable destination for quality hardware tools, building materials, and everyday essentials. We serve homeowners, technicians, contractors, and businesses who value durability, performance, and fair pricing.
            <p>Our focus is simple: provide trusted products, clear information, and a smooth buying experience. Every item in our store is selected with practicality in mind, whether it’s for home repairs, construction projects, or professional use.</p>
            <p>We believe hardware shopping should be straightforward, not confusing or overpriced. That’s why we emphasize quality control, honest pricing, and customer support that actually responds.
              <p>PAK Hardware is built on long-term relationships, not one-time sales. If it’s in our store, it’s something we stand behind.</p>
            </p>
          </p>
        </div>
      </div>



      <div className="our-team">
        <div className="out-team-header">
          <span>Our team</span>
          <h1>Meet our team</h1>
        </div>
        <div className="our-team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.experience}</p>
            </div>
          ))}
        </div>
      </div>



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

    </div>
  )
}
