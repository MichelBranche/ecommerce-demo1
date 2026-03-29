import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLenis } from 'lenis/react';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const lenis = useLenis();
    
    // Hard reset di Lenis per azzerare l'y-axis physics cache
    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [id, lenis]);

    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="pd-error-screen">
                <h1 className="terminal-warning">PRODUCT NOT FOUND // ERROR 404</h1>
                <Link to="/" className="pd-back-error">RETURN TO ARCHIVE</Link>
            </div>
        );
    }

    return (
        <section className="product-detail-page section-grey">
            <div className="pd-split">
                <div className="pd-image-side">
                    <img src={product.img} alt={product.title} />
                </div>
                
                <div className="pd-info-side">
                    <Link to="/" className="pd-back">{"<"} BACK TO STORE</Link>
                    
                    <h1 className="pd-title">{product.title}</h1>
                    <div className="pd-divider"></div>
                    
                    <p className="pd-desc">{product.description}</p>
                    
                    <div className="pd-action-box">
                        <span className="pd-price">{product.price}</span>
                        <button 
                            className="pd-buy-btn"
                            onClick={() => addToCart(product)}
                            disabled={!product.inStock}
                        >
                            {product.inStock ? 'ADD TO CART' : 'UNAVAILABLE'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
