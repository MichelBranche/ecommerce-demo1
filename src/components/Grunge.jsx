import React from 'react';

export default function Grunge() {
    return (
        <section className="poster-section section-red s3-grunge" id="grunge">
            <h1 className="grunge-title parallax" data-speed="0.2">GRUNGE</h1>
            <h1 className="grunge-title-2 parallax" data-speed="-0.1">NJ</h1>
            
            <img src="https://loremflickr.com/800/1200/hypebeast,fashion/all" alt="Fashion" className="bw-print grunge-cutout parallax" data-speed="-0.02" />

            <div className="fake-logo">₪</div>
            <div className="grunge-small-block parallax" data-speed="0.05">
                <p>
                    AT THE HEART OF GRUNGE DESIGN IS AN EMPHASIS ON IMPERFECTION AND DIY ETHOS. DESIGN ELEMENTS SUCH AS DISTRESSED TEXTURES, ROUGH EDGES, AND IRREGULAR TYPOGRAPHY ARE COMMONLY USED TO CONVEY A SENSE OF AUTHENTICITY AND EDGINESS.
                </p>
            </div>
        </section>
    );
}
