import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import Navbottom from "../../Components/Navbottom/Navbottom";
import { useNavigate, useParams } from "react-router-dom";
import Discount from "../../Components/Discount/Discount";
import api from "../../Appcontext/api.js";
import { toast } from "react-toastify";
import Productcard from "../../Components/Productcard/Productcard.jsx";
import ProductSkeleton from "./ProductSkeleton/ProductSkeleton.jsx";
import { delay } from "../../Appcontext/delay.js";
import { Appcontext } from "../../Appcontext/Appcontext.jsx";
import { CartContext } from "../../Appcontext/CartContext.jsx";

export default function Product() {
    const { products } = useContext(Appcontext);
    const [Relatedproducts, setRelatedproducts] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [adding, setAdding] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchSingleProduct = async () => {

        try {
            setLoading(true);
            const res = await api.get(`/Product/getproduct/${id}`);

            if (res.data.success) {
                setProduct(res.data.product);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to load product");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSingleProduct();
    }, [id]);




    const arrangeRelatedProduct = () => {
        if (!products.length || !product) return;

        // 1. Remove current product
        const filtered = products.filter(p => p._id !== product._id);

        // 2. Match by category
        let related = filtered.filter(p => p.category === product.category);

        // 3. If not enough, match by brand
        if (related.length < 6) {
            const byBrand = filtered.filter(p =>
                p.brand === product.brand && !related.includes(p)
            );
            related = [...related, ...byBrand];
        }

        // 4. Shuffle
        related = related.sort(() => 0.5 - Math.random());

        // 5. Take only 6
        setRelatedproducts(related.slice(0, 6));
    };


    const handleAddToCart = async (e) => {
        e.stopPropagation(); // stop card navigation
        if (adding) return;

        try {
            setAdding(true);
            await addToCart(product);
        } finally {
            setAdding(false);
        }
    };


    useEffect(() => {
        arrangeRelatedProduct();
    }, [product, products]);


    if (loading) return <ProductSkeleton />;
    if (!product) return <div style={{ padding: 40 }}>Product not found</div>;

    const images = product.image || [];

    return (
        <div className="Product">
            <Navbottom />

            {/* Breadcrumb */}
            <div className="product-breadcrumb">
                <span onClick={() => navigate("/")}>Home</span>
                <span>{">"}</span>
                <span onClick={() => navigate("/shop")}>Shop</span>
                <span>{">"}</span>
                <p>{product.name}</p>
            </div>

            {/* Main */}
            <section className="product-layout">
                {/* Gallery */}
                <div className="product-gallery">
                    <div className="product-thumbs">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                onClick={() => setSelectedImage(i)}
                                src={img.url}
                                alt="product"
                            />
                        ))}
                    </div>

                    <div className="product-main-image">
                        <img
                            src={images[selectedImage]?.url}
                            alt="main product"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="product-info">
                    <p className="product-brand">{product.brand}</p>

                    <h1 className="product-title">{product.name}</h1>

                    <div className="product-price">
                        <span className="old">Rs {product.originalPrice}</span>
                        <span className="new">Rs {product.price}</span>
                    </div>

                    <div className="product-actions">
                        <button
                            className={`btn-outline ${adding ? "btn-loading" : ""}`}
                            onClick={handleAddToCart}
                            disabled={adding}
                        >
                            {adding ? (
                                <span className="btn-spinner"></span>
                            ) : (
                                "Add to cart"
                            )}
                        </button>
                    </div>

                    <ul className="product-policies">
                        <li>
                            <span className="material-symbols-outlined">local_shipping</span>
                            <div>
                                <strong>Free Shipping & Returns</strong>
                                <p>Orders over Rs 5000</p>
                            </div>
                        </li>

                        <li>
                            <span className="material-symbols-outlined">schedule</span>
                            <div>
                                <strong>Estimated Delivery</strong>
                                <p>Dispatched within 24 hours</p>
                            </div>
                        </li>

                        <li>
                            <span className="material-symbols-outlined">lock</span>
                            <div>
                                <strong>Security Policy</strong>
                                <p>Secure payments & data protection</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Description */}
            <section className="product-description">
                <div className="description-text">
                    <h2>About this product</h2>
                    <p>{product.description}</p>
                </div>

                <div className="description-image">
                    <img
                        src={images[0]?.url}
                        alt="detail"
                    />
                </div>
            </section>
            {/* Related */}

            <section className="related-products">
                <h2>You might also like</h2>
                <div className="related-grid">
                    {Relatedproducts.length > 0 ? (
                        Relatedproducts.map((item) => (
                            <Productcard product={item} key={item._id} />
                        ))
                    ) : (
                        <p style={{ color: "#777", fontSize: "0.9rem" }}>
                            No related products found
                        </p>
                    )}
                </div>
            </section>


            <Discount />
        </div>
    );
}
