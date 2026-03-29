import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useLenis } from 'lenis/react';

export default function Checkout() {
    const { cartItems, clearCart } = useCart();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const lenis = useLenis();
    const navigate = useNavigate();

    useEffect(() => {
        if (lenis) lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);

        if (cartItems.length === 0 && !isSubmitted) {
            navigate('/');
        }
    }, [lenis, cartItems, isSubmitted, navigate]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const priceNum = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
            return total + (isNaN(priceNum) ? 0 : priceNum);
        }, 0).toFixed(2);
    };

    const handleCheckout = (e) => {
        e.preventDefault(); // Prevents real HTTP POST
        setIsSubmitted(true);
        clearCart();
    };

    if (isSubmitted) {
        return (
            <section className="checkout-success-page">
                <h1 className="success-headline">PROTOCOL INITIATED</h1>
                <p className="success-sub">YOUR ORDER HAS BEEN SECURED IN THE SYSTEM.</p>
                <Link to="/" className="success-home-btn">RETURN TO ARCHIVE</Link>
            </section>
        );
    }

    return (
        <section className="checkout-page section-grey">
            <div className="checkout-container">
                <div className="checkout-form-side">
                    <h1 className="checkout-title">SECURE TERMINAL</h1>
                    <p className="checkout-subtitle">ENTER LOGISTICS COORDS</p>
                    
                    <form className="ch-form" onSubmit={handleCheckout}>
                        <div className="input-group">
                            <label>OPERATIVE NAME</label>
                            <input type="text" required placeholder="_ _ _ _" />
                        </div>
                        <div className="input-group">
                            <label>TRANSMISSION EMAIL</label>
                            <input type="email" required placeholder="name@network.com" />
                        </div>
                        <div className="input-group">
                            <label>DROP LOCATION / ADDRESS</label>
                            <input type="text" required placeholder="ZONE 4, DISTRICT 9" />
                        </div>
                        <div className="input-group split-group">
                            <div className="input-half">
                                <label>CITY</label>
                                <input type="text" required placeholder="BERLIN" />
                            </div>
                            <div className="input-half">
                                <label>ZIP CODE</label>
                                <input type="text" required placeholder="10115" />
                            </div>
                        </div>

                        <button type="submit" className="ch-submit-btn">AUTHORIZE PAYMENT</button>
                    </form>
                </div>

                <div className="checkout-summary-side">
                    <h2 className="summary-title">CART PROTOCOL // {cartItems.length}</h2>
                    <div className="summary-items">
                        {cartItems.map((item, idx) => (
                            <div key={idx} className="summary-item">
                                <span className="s-name">{item.title}</span>
                                <span className="s-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-total">
                        <span>TOTAL</span>
                        <span>€ {calculateTotal()}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
