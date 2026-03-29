import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCart } from '../context/CartContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Navigation() {
    const tearOverlayRef = useRef(null);
    const { cartItems, openCart } = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const handleTearNavigation = (e, targetId) => {
        e.preventDefault();
        const tearOverlay = tearOverlayRef.current;
        if (!tearOverlay) return;

        const isHome = location.pathname === '/';

        gsap.to(tearOverlay, {
            top: "-10vh",
            duration: 0.35,
            ease: "power4.in",
            onComplete: () => {
                if (isHome) {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop,
                            behavior: "auto"
                        });
                    }
                } else {
                    // Force navigation to home with hash
                    navigate(`/${targetId}`);
                }
                
                setTimeout(() => {
                    gsap.to(tearOverlay, {
                        top: "120vh",
                        duration: 0.4,
                        ease: "power4.out",
                        onComplete: () => {
                            gsap.set(tearOverlay, { top: "-130vh" });
                            if (isHome) ScrollTrigger.refresh();
                        }
                    });
                }, 50);
            }
        });
    };

    return (
        <>
            <div className="paper-tear-overlay" ref={tearOverlayRef}></div>
            <header className="poster-header header-bg-invert">
                <Link to="/" className="logo-box" style={{ textDecoration: 'none' }}>SYS_OFF</Link>
                <nav className="nav-links">
                    <a href="#brutal" onClick={(e) => handleTearNavigation(e, '#brutal')}>BRUTAL</a>
                    <a href="#punk" onClick={(e) => handleTearNavigation(e, '#punk')}>PUNK</a>
                    <a href="#grunge" onClick={(e) => handleTearNavigation(e, '#grunge')}>GRUNGE</a>
                    <a href="#archive" onClick={(e) => handleTearNavigation(e, '#archive')}>STORE</a>
                    <a href="#cart" onClick={(e) => { e.preventDefault(); openCart(); }} className="cart-nav-btn" style={{ color: 'var(--print-red)' }}>CART [{cartItems.length}]</a>
                </nav>
            </header>
        </>
    );
}
