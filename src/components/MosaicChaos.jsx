import React from 'react';

export default function MosaicChaos() {
    return (
        <section className="poster-section section-grey s6-mosaic">
            <h1 className="mosaic-bg-title parallax" data-speed="0.05">CHAOS</h1>

            <div className="mosaic-wrapper">
                <img src="https://loremflickr.com/800/600/punk,band/all" className="mos-img m1 parallax" data-speed="-0.15" />
                <img src="https://loremflickr.com/800/600/brutalist,architecture/all" className="mos-img m2 parallax" data-speed="0.2" />
                <img src="https://loremflickr.com/800/600/hypebeast,streetwear/all" className="mos-img m3 parallax" data-speed="-0.08" />
                <img src="https://loremflickr.com/600/600/concrete,building/all" className="mos-img m4 parallax" data-speed="0.12" />
                
                <div className="m-box-1 parallax" data-speed="0.25"></div>
                <div className="m-box-2 parallax" data-speed="-0.2"></div>
            </div>

            <div className="dense-text-block text-blk-4 parallax" data-speed="0.02">
                <p>WE ARE THE NOISE IN THE SYSTEM.<br/>NO ALIGNMENT.</p>
            </div>
        </section>
    );
}
