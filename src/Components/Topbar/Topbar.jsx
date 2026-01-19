import React from 'react'
import './Topbar.css'
import { useNavigate } from 'react-router-dom'
export default function Topbar() {
    const navigate = useNavigate();
    return (
        <div className="Topbar">
            <div className="Tobar-left">
                <p>Get Upto 25% Cashback On First Order: GET25OFF - <span onClick={() => navigate('/shop')}>Shop Now</span></p>
            </div>
            <div className="Topbar-right">
                <ul>
                    <span>|</span>
                    <li onClick={() => navigate('/contact')}>Help Center</li>
                    <span>|</span>
                    <li>English</li>
                    <span>|</span>
                    <li>
                        PKR
                        <span className="material-symbols-outlined">
                            keyboard_arrow_down
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
