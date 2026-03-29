import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Hero from '../components/Hero';
import PostPunk from '../components/PostPunk';
import Grunge from '../components/Grunge';
import StoreSection from '../components/SurveillanceArchive';
import GraffitiWall from '../components/GraffitiWall';
import MosaicChaos from '../components/MosaicChaos';
import TerminalMarquee from '../components/TerminalMarquee';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    // Parallax logic for Home Page 
    gsap.utils.toArray('.parallax').forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed'));
      if (!isNaN(speed)) {
        gsap.to(el, {
            yPercent: speed * 300, 
            ease: "none",
            scrollTrigger: {
                trigger: el.closest('.poster-section'), 
                start: "top bottom",
                end: "bottom top",
                scrub: 1 
            }
        });
      }
    });
    ScrollTrigger.refresh();
  }, { scope: container });

  return (
    <div ref={container}>
      <main>
        <Hero />
        <PostPunk />
        <Grunge />
        <StoreSection />
        <GraffitiWall />
        <MosaicChaos />
        <TerminalMarquee />
      </main>
    </div>
  );
}
