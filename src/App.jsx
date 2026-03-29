import React from 'react';
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
