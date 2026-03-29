import React from 'react';

export default function Hero() {
    return (
        <section className="poster-section section-grey s1-brutal" id="brutal">
            <h1 className="giant-red-text tbg-1 parallax" data-speed="0.05">BRUTAL</h1>
            <h1 className="giant-red-text tbg-2 parallax" data-speed="0.1">ISME</h1>

            <div className="main-image-wrapper">
                <img src="https://loremflickr.com/800/1200/brutalism,building/all" alt="Building" className="bw-print building-img parallax" data-speed="-0.02" />
                
                <svg className="red-vector-lines parallax" data-speed="0.08" viewBox="0 0 500 800" fill="none">
                    <path d="M50 800 V 550 H 150 V 400 H 300 L 350 350 H 500" stroke="#E61515" strokeWidth="8" strokeLinejoin="miter" />
                    <path d="M350 800 L 200 450" stroke="#E61515" strokeWidth="3" />
                    <rect x="250" y="550" width="40" height="20" fill="#E61515" />
                </svg>
            </div>

            <div className="dense-text-block text-blk-1">
                <p>Le brutalisme est né du mouvement architectural moderne, mettant en avant la structure brute, l'audace graphique, et l'esthétique minimaliste.</p>
                <div className="red-bar"></div>
            </div>
            <div className="dense-text-block text-blk-2">
                <p>Ce style privilégie la vérité des matériaux, la simplicité.</p>
            </div>
        </section>
    );
}
