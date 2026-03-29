import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';

import CursorInk from './components/CursorInk';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Cart from './components/Cart';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {

  // Marquee Titolo Browser (Brutalist Tab Script)
  useEffect(() => {
    const titleText = "[ SYS_OFF ] // STREETWEAR SCUM // ";
    let i = 0;
    
    const scrollTitle = setInterval(() => {
      document.title = titleText.substring(i) + titleText.substring(0, i);
      i = (i + 1) % titleText.length;
    }, 350);

    // Cleanup alla distruzione (sebbene App sia la radice)
    return () => clearInterval(scrollTitle);
  }, []);
  return (
    <ReactLenis root>
      <div className="app-wrapper">
        <div className="noise-overlay"></div>
        
        <CursorInk />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        
        <Footer />
        <Cart />
      </div>
    </ReactLenis>
  );
}

export default App;
