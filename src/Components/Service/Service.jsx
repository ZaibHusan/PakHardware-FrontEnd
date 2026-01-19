import React from 'react'
import './Service.css'
import { useNavigate } from 'react-router-dom'
export default function Service() {
    const services = [
        {
            title: "Money Back Guarantee",
            details: "Guarantee within 30 days",
            icon: "https://fonts.gstatic.com/s/i/materialicons/verified/v6/24px.svg"
        },
        {
            title: "Offers And Discounts",
            details: "Back returns in 7 days",
            icon: "https://fonts.gstatic.com/s/i/materialicons/local_offer/v6/24px.svg"
        },
        {
            title: "24/7 Support Services",
            details: "Contact us anytime",
            icon: "https://fonts.gstatic.com/s/i/materialicons/support_agent/v6/24px.svg"
        }
    ];

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/shop')
    }
    return (
        <div className='Service'>
            <div className="service-container">
                {services.map((service, index) => (
                    <div className="service-box" key={index}>
                        <div className="service-img">
                            <img src={service.icon} alt="" />
                        </div>
                        <div className="service-details">
                            <h3>{service.title}</h3>
                            <p>{service.details}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="service-banner">
                <img src="https://i.pinimg.com/736x/45/68/09/4568095caf41d95b70c92fd15b50c9e7.jpg" alt="" />
                <div className="service-banner-text">
                    <p>Exclusive Month End Offer</p>
                    <h1><span>up to 50% off</span><span>on selected products</span></h1>
                    <button onClick={handleClick}>Shop now</button>
                </div>
            </div>
        </div>
    )
}
