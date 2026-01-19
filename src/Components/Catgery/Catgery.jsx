import React from "react";
import CategoriBox from "../CategoriBox/CategoriBox.jsx";
import "./Catgery.css";

export default function Catgery() {
 const categories = [
  {
    title: "Power Tools",
    image: "https://static.thenounproject.com/png/2622954-200.png"
  },
  {
    title: "Hand Tools",
    image: "https://static.thenounproject.com/png/1283258-200.png"
  },
  {
    title: "Electrical",
    image: "https://static.thenounproject.com/png/7806776-200.png"
  },
  {
    title: "Plumbing",
    image: "https://static.thenounproject.com/png/1785612-200.png"
  },
  {
    title: "Fasteners",
    image: "https://static.thenounproject.com/png/2131230-200.png"   // bolts & screws
  },
  {
    title: "Paint & Coatings",
    image: "https://static.thenounproject.com/png/1416287-200.png"   // paint roller
  }
];


  return (
    <div className="Categery">
      <div className="categery-container">
        {categories.map((cat, index) => (
          <CategoriBox key={index} image={cat.image} title={cat.title} />
        ))}
      </div>
    </div>
  );
}
