import React from 'react';

export default function PostPunk() {
    return (
        <section className="poster-section section-grey s2-postpunk" id="punk">
            <div className="stretch-typo parallax" data-speed="0.12">
                <span>POST</span>
                <span>PUNK</span>
            </div>

            <img src="https://loremflickr.com/800/600/punk,singer/all" alt="Punk Singer" className="bw-print punk-img parallax" data-speed="-0.05" />

            <div className="punk-text-columns">
                <p className="punk-p">
                    THIS MUSIC IS NOT TRYING TO PLEASE. THERE IS NO FAMILIAR HARMONY, NO SWEET MELODIES, NO UNNECESSARY WORDS. <span className="red-highlight">ONLY RAW EMOTIONS,</span> NOT POLISHED TO A SHINE, AND HONESTY THAT CUTS LIKE A BROKEN STRING.
                </p>
                <p className="punk-p">
                    IT'S NOT JUST A STYLE, <span className="red-txt">IT'S A CULT.</span> THIS IS THE AESTHETIC OF GRAY WALLS, LONG RAINCOATS, AND STARING AT NOTHING. THIS IS MUSIC THAT SOUNDS NOT IN THE SPEAKERS, BUT INSIDE, FILLING THE HEART WITH THE MECHANICAL RHYTHM OF THE ERA.
                </p>
            </div>
        </section>
    );
}
