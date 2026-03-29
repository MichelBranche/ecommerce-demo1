import React from 'react';

export default function GraffitiWall() {
    return (
        <section className="poster-section section-grey s5-sneakerwall">
            <h1 className="giant-red-text graffiti-title parallax" data-speed="0.2">DROP<br/>003</h1>
            <img src="https://loremflickr.com/1600/1000/brutalism,building/all" alt="Concrete" className="bg-graffiti bw-print"/>

            <div className="sneaker-wrap parallax" data-speed="-0.1">
                <img src="https://loremflickr.com/800/800/offwhite,sneaker/all" alt="Sneaker Cutout" className="bw-print sneaker-img" />
                <div className="graffiti-price">$450</div>
            </div>
            
            <div className="dense-text-block text-blk-3 parallax" data-speed="0.05">
                <p>CONCRETE AND SPRAY. THE NEW SILHOUETTE IS FORGED IN THE STREET NOT THE STUDIO.</p>
            </div>
        </section>
    );
}
