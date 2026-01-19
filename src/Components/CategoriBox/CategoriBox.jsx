import React, { useContext } from 'react'
import "./CategoriBox.css"
import { Appcontext } from '../../Appcontext/Appcontext';
import { useNavigate, useLocation } from 'react-router-dom';
export default function CategoriBox({ image, title }) {
    const { category, setcategory } = useContext(Appcontext);
    const navigaate = useNavigate()
    const location = useLocation()
    const handlecategory = () => {
        if (location.pathname !== "/shop") {
            navigaate("/shop")
        }
        const category = (title) => {
            if (title === "Fasteners" || title === "Paint & Coatings") {
                return "Hand Tools"
            }
            return title
        }
        setcategory(category(title))
    }
    return (
        <div className="CategoriBox" onClick={handlecategory}>
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
    )
}
