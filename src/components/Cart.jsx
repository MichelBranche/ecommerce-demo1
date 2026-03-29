import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const priceNum = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
            return total + (isNaN(priceNum) ? 0 : priceNum);
        }, 0).toFixed(2);
    };

    const handleCheckout = () => {
        closeCart();
        navigate('/checkout');
    };

    return (
        <>
            <div 
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`} 
                onClick={closeCart}
            ></div>
            
            <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>CHECKOUT // {cartItems.length} ITEMS</h2>
                    <button className="cart-close" onClick={closeCart}>[X]</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">CART IS EMPTY. NO SYSTEM ACTIVITY.</div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt={item.title} className="ci-img" />
                                <div className="ci-info">
                                    <h4 className="ci-title">{item.title}</h4>
                                    <span className="ci-price">{item.price}</span>
                                </div>
                                <button className="ci-remove" onClick={() => removeFromCart(item.id)}>REMOVE</button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="cf-total">
                        <span>TOTAL:</span>
                        <span>€ {calculateTotal()}</span>
                    </div>
                    <button className="cf-checkout-btn" onClick={handleCheckout} disabled={cartItems.length === 0}>
                        PROCEED TO PAY
                    </button>
                </div>
            </div>
        </>
    );
}
