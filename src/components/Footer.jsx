import React from 'react';

export default function Footer() {
    return (
        <footer className="district-footer">
            <div className="footer-top">
                <div className="newsletter-block">
                    <h2>JOIN THE RESISTANCE</h2>
                    <p>EXCLUSIVE DROPS. NO SPAM. ONLY CHAOS.</p>
                    <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="YOUR EMAIL CONDUIT" className="nl-input" />
                        <button type="submit" className="nl-btn">SUBSCRIBE</button>
                    </form>
                </div>
                
                <div className="links-block">
                    <div className="link-col">
                        <h4>SYSTEM</h4>
                        <a href="#brutal">ARCHIVE</a>
                        <a href="#store">STORE</a>
                        <a href="#">ABOUT_US</a>
                    </div>
                    <div className="link-col">
                        <h4>SUPPORT</h4>
                        <a href="#">FAQ</a>
                        <a href="#">SHIPPING</a>
                        <a href="#">RETURNS</a>
                    </div>
                    <div className="link-col">
                        <h4>NETWORK</h4>
                        <a href="#">INSTAGRAM</a>
                        <a href="#">DISCORD</a>
                        <a href="#">TIKTOK</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <h1 className="footer-logo">SYS_OFF</h1>
                <div className="copyright-box">
                    <p className="copyright">&copy; 2026 DISTRICT ARCHIVE. ALL RIGHTS RESERVED.</p>
                    <p className="designer-credit">
                        DESIGN BY <a href="https://devmichelbranche.vercel.app/" target="_blank" rel="noopener noreferrer" className="designer-link">MICHEL BRANCHE</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
