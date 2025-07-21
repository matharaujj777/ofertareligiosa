import React from 'react';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import BooksCarousel from './components/BooksCarousel';
import Testimonials from './components/Testimonials';
import LimitedOffer from './components/LimitedOffer';
import PricingPackages from './components/PricingPackages';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChoose />
      <BooksCarousel />
      <Testimonials />
      <LimitedOffer />
      <PricingPackages />
      <FAQ />
      <Guarantee />
    </div>
  );
}

export default App;