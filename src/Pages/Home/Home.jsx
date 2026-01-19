import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero.jsx'
import Title from '../../Components/Title/Title.jsx'
import Catgery from '../../Components/Catgery/Catgery.jsx'
import Discount from '../../Components/Discount/Discount.jsx'
import Products from '../../Components/Products/Products.jsx'
import Service from '../../Components/Service/Service.jsx'
import Clients from '../../Components/Clients/Clients.jsx'
import Brand from '../../Components/Brand/Brand.jsx'

export default function Home() {
    return (
        <div>
           <Hero />
           <Title Title={"Shop By Categories"} Decription={"Discover quality products across all categories, curated just for you."} />
           <Catgery />
           <Discount />
           <Products />
           <Service />
           <Clients />
           <Brand />
        </div>
    )
}
