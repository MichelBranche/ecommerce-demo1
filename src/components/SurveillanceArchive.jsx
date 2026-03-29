import React from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    const { addToCart } = useCart();
    const { id, img, title, price, inStock } = product;
    const isSold = !inStock;

    const handleBuy = (e) => {
        e.preventDefault(); // prevents navigating to the custom page if user clicks buy directly
        if (!isSold) addToCart(product);
    };

    return (
        <Link to={`/product/${id}`} className="product-card" style={{ textDecoration: 'none' }}>
            <div className="prod-img-box">
                <img src={img} className="prod-img" alt={title} />
                {isSold && <div className="sold-stamp">SOLD OUT</div>}
            </div>
            <div className="prod-info">
                <h3 className="prod-title">{title}</h3>
                <div className="prod-bottom">
                    <span className="prod-price" style={isSold ? { color: 'var(--pure-black)', textDecoration: 'line-through' } : {}}>{price}</span>
                    <button className="buy-btn" onClick={handleBuy} disabled={isSold}>
                        {isSold ? 'UNAVAILABLE' : 'ADD TO CART'}
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default function StoreSection() {
    return (
        <section className="poster-section section-grey s4-store" id="archive">
            <h1 className="store-header parallax" data-speed="0.03">DISTRICT STORE</h1>
            
            <div className="store-grid parallax" data-speed="-0.05">
                {products.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}
