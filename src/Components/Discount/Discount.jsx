import React from 'react'
import './Discount.css'
import { useNavigate } from 'react-router-dom'
export default function Discount() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/shop')
    }
    return (
        <div className="Discount">
            <div className="discount-left">
                <img src="https://prestashop.codezeel.com/PRS23/PRS230555/default/img/cms/sub-banner-1.jpg" alt="" />
                <div className="discount-left-text">
                    <p>up to 50% off</p>
                    <h1><span>Circular Saw</span><span>with laser</span></h1>
                    <button onClick={handleClick}>Shop now</button>
                </div>
            </div>
            <div className="discount-right">
                <img src="https://prestashop.codezeel.com/PRS23/PRS230555/default/img/cms/sub-banner-2.jpg" alt="" />
                <div className="discount-right-text">
                    <p>up to 35% off</p>
                    <h1><span>Dewalt DW715</span><span>Cordless Drill</span></h1>
                    <button onClick={handleClick}>Shop now</button>
                </div></div>
        </div>
    )
}
