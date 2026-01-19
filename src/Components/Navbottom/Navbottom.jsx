import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbottom.css'
import { Appcontext } from '../../Appcontext/Appcontext.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Navbottom() {
    const [toggle, setToggle] = useState(false);
    const { category, setcategory, search, setsearch } = useContext(Appcontext);


    const location = useLocation()


    const Handlesearchchange = (e) => {
        if (location.pathname !== "/shop") {
            navigaate("/shop")
        }
        setsearch(e.target.value)
    }





    const categories = [
        { id: 1, name: "All Categories" },
        { id: 2, name: "Power Tools" },
        { id: 3, name: "Hand Tools" },
        { id: 4, name: "Electrical" },
        { id: 5, name: "Plumbing" }
    ];



    const navigaate = useNavigate()
    const handlecategory = (e) => {
        if (location.pathname !== "/shop") {
            navigaate("/shop")
        }
        setcategory(e.target.value)
    }

    const handldropdown = (cat) => () => {
        if (location.pathname !== "/shop") {
            navigaate("/shop")
        }
        setcategory(cat.name)
    }

    return (
        <div className="Navbottom">


            <div
                className="navbottom-left"
                onMouseEnter={() => setToggle(true)}
                onMouseLeave={() => setToggle(false)}
            >
                <span className="material-symbols-outlined">menu</span>
                <p>Shop By Categories</p>

                {/* DROPDOWN PANEL */}
                <div className={`category-dropdown ${toggle ? "show" : ""}`}>
                    {categories.map((cat, index) => (
                        <div key={index} onClick={handldropdown(cat)} className="category-item">
                            {cat.name}
                        </div>
                    ))}
                </div>
            </div>


            <div className="navbottom-middle">
                <div className="navbottom-middle-container">
                    <div className="navbottom-middle-left">
                        <select onChange={handlecategory} value={category}>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat.name}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <span>|</span>
                    <div className='navbottom-middle-right'>
                        <input onChange={Handlesearchchange} type="text" placeholder='Search products here...' />
                    </div>
                </div>
                <button>Search</button>
            </div>


            <div className="navbottom-right">
                <span className="material-symbols-outlined">
                    local_shipping
                </span>
                <p>Free Shipping Above Rs. 5000</p>
            </div>
        </div >
    )
}
