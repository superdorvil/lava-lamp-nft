import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
