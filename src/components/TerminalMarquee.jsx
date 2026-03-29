import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function TerminalMarquee() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.to('.terminal-warning', {
            opacity: 0.1, duration: 0.1, yoyo: true, repeat: -1, repeatDelay: Math.random() * 2
        });

        const tracks = gsap.utils.toArray('.m-track');
        tracks.forEach(track => {
            const dir = track.getAttribute('data-direction') == "1" ? -33.33 : 33.33;
            gsap.to(track, {
                xPercent: dir,
                ease: "none",
                duration: 5, 
                repeat: -1
            });
        });
    }, { scope: sectionRef });

    return (
        <section className="poster-section section-red s7-marquee" ref={sectionRef}>
            <div className="huge-marquees">
                {[1, -1, 1, -1, 1].map((dir, idx) => (
                    <div key={idx} className="h-marquee-track m-track" data-direction={dir}>
                        <span className="hm-item">NO SYSTEM // NO RULES // BREAK DOWN // </span>
                        <span className="hm-item">NO SYSTEM // NO RULES // BREAK DOWN // </span>
                        <span className="hm-item">NO SYSTEM // NO RULES // BREAK DOWN // </span>
                    </div>
                ))}
            </div>
            <div className="terminal-warning">CRITICAL ERROR</div>
        </section>
    );
}
