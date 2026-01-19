import React, { useContext, useEffect, useState } from 'react'
import Shop_banner from '../../Components/Shop-banner/Shop-banner.jsx'
import Productcard from '../../Components/Productcard/Productcard.jsx';
import Shopdecription from './shopdecription/shopdecription.jsx';
import "./shop.css"
import { Appcontext } from '../../Appcontext/Appcontext.jsx';
import ShopRightSkeleton from './Skeleton/Skeleton.jsx';

export default function Shop() {
  const [buttonloading, setbuttonloading] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [sort, setSort] = useState("Default");



  const {
    products,
    page,
    setpage,
    setlimit,
    totalpages,
    setcategory,
    category,
    limit,
    loading, setloading
  } = useContext(Appcontext);

  console.log(loading)

  useEffect(() => {
    setlimit(20);
    setpage(1);
  }, []);




  const scrollingTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setbuttonloading(false);
  }

  useEffect(() => {
    scrollingTop();
  }, [products]);



  const start = (page - 1) * limit + 1;
  const end = page * limit;



  const hardwareCategories = [
    { id: 1, name: "Power Tools" },
    { id: 2, name: "Electrical" },
    { id: 3, name: "Plumbing" },
    { id: 4, name: "Hardware" },
    { id: 5, name: "Safety Tools" }
  ];


  useEffect(() => {
    let temp = [...products];

    // 1. Category filter
    if (selectedCategories.length > 0) {
      temp = temp.filter(p => selectedCategories.includes(p.category));
    }

    // 2. Price filter
    temp = temp.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);



    // 4. Sorting
    if (sort === "Price: Low to High") {
      temp.sort((a, b) => a.price - b.price);
    }
    else if (sort === "Price: High to Low") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(temp);

  }, [products, selectedCategories, priceRange, sort]);



  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
  };




  const handleCategoryChange = (slug) => {
    setSelectedCategories(prev => {
      if (prev.includes(slug)) {
        return prev.filter(cat => cat !== slug);
      } else {
        return [...prev, slug];
      }
    });
  };


  const handleSort = (e) => {
    setSort(e.target.value);
  };



  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);






  return (
    <div className="Shop">
      <Shop_banner />
      <div className="shop-container">
        <div className="shop-left">
          <div className="category-list">
            <h1><a href="/">Home</a></h1>
            <hr />
            <ul>
              {hardwareCategories.map((category) => (
                <li onClick={() => {
                  setcategory(category.name)
                }} key={category.id} style={{backgroundColor: category.name === category ? "#e5e5e5" : ""}}>
                  <div >{category.name}</div>
                  <span className="material-symbols-outlined">
                    add
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shop-filter">
            <h1>Filter By</h1>
            <hr />
            <div className="Categories">
              <h3>Categories</h3>
              {hardwareCategories.map((category, index) => (
                <label htmlFor={`category-${index}`} key={index}>
                  {category.name}<input onChange={() => handleCategoryChange(category.name)} type="checkbox" id={`category-${index}`} />
                </label>
              ))}
            </div>
            <div className="Price">
              <h3>Min Price</h3>
              <div className="price-range">
                <p>{(priceRange.max)}</p>
                <div className="sigle-line">
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    onChange={(e) => setTimeout(() => { handlePriceChange(0, Number(e.target.value)) }, 1000)}
                  />
                </div>
                <p>5000</p>
              </div>
            </div>
          </div>
        </div>



        {loading ? (
          <ShopRightSkeleton />
        ) : (
          <div className="shop-right">
            <div className="shop-decription">
              <p>We focus on quality, functionality, and value, ensuring that every product delivers dependable performance for both heavy-duty work and everyday use. Browse our categories to find the right tools and materials for your project, all in one place.</p>
            </div>
            <div className="shop-list-top">
              <p>There are {filteredProducts.length} products.</p>
              <div className="Sort">
                <p>Sort by:</p>
                <select value={sort} onChange={handleSort}>
                  <option>Default</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>




            <div className="shop-list">
              {filteredProducts.map((product, index) => {
                return <Productcard product={product} key={index} />
              })}
            </div>




            <div className="pagination-wrapper">
              <p className="page-info">
                Showing {start}-{end}
              </p>

              {buttonloading ? (
                <button className="loading-btn" disabled>
                  <span className="loader"></span>
                  Loading...
                </button>
              ) : (
                <div className="pagination">
                  <button
                    className="page-btn"
                    disabled={page === 1}
                    onClick={() => {
                      setpage(page - 1)
                      setbuttonloading(true)
                      scrollingTop()
                    }}
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                    Prev
                  </button>

                  <button
                    className="page-btn"
                    disabled={page === totalpages}
                    onClick={() => {
                      setpage(page + 1)
                      setbuttonloading(true)
                      scrollingTop()
                    }}
                  >
                    Next
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              )}
            </div>


          </div>
        )}

      </div>
      <div className="shop-details">
        <Shopdecription />
      </div>
    </div>
  )
}
