import React from 'react'
import './Brand.css'
import Title from '../Title/Title.jsx';
export default function Brand() {
const brands = [
  { name: "Asana", logo: "https://prestashop.codezeel.com/PRS23/PRS230555/default/img/m/8.jpg" },
  { name: "Bostitch", logo: "https://prestashop.codezeel.com/PRS23/PRS230555/default/img/m/10.jpg" },
  { name: "Cartify", logo: "https://prestashop.codezeel.com/PRS23/PRS230555/default/img/m/1.jpg" },
  { name: "Ecomzone", logo: "https://prestashop.codezeel.com/PRS23/PRS230555/default/img/m/2.jpg" },
  { name: "Ecoshop", logo: "https://prestashop.codezeel.com/PRS23/PRS230555/default/img/m/3.jpg" },
  { name: "Knipex", logo: "https://prestashop.codezeel.com/PRS23/PRS230555/default/img/m/9.jpg" },
];

    return (
        <div className="Brand">
            <Title Title={"Trusted Brands"} Decription={"Discover quality products across all categories, curated just for you."} />
            <div className="brand-container">
                {brands.map((brand, index) => (
                    <div className="brand-box" key={index}>
                        <img src={brand.logo} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
