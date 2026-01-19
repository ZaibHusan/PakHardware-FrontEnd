import React, { useContext, useEffect } from 'react'
import Productcard from '../Productcard/Productcard'
import "./Product.css"
import { Appcontext } from '../../Appcontext/Appcontext'
import ProductSkeleton from './ProductSkeleton/ProductSkeleton'
export default function Products() {
    const { products, setpage, setlimit } = useContext(Appcontext)

  
    return (
        <div className="Products">
            <div className="produtcts-header">
                <h1>Trending Products</h1>
            </div>
            <div className="products-container">
                {products.length > 0 ? products.slice(0,8).map((product, index) => (
                    <Productcard key={index} product={product} />
                )) : <ProductSkeleton />}
            </div>
        </div>
    )
}
