import React from 'react';
import HeroSection from '../components/HeroSection';
import LavaPool from '../components/LavaPool';
import LavaLampTraits from '../components/LavaLampTraits';
import LavaLampFaqs from '../components/LavaLampFaqs';
import LavaLampStats from '../components/LavaLampStats';
import SerialNumbers from '../components/SerialNumbers';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <LavaPool />
      <LavaLampTraits />
      <LavaLampFaqs />
      <SerialNumbers />
      <LavaLampStats />
      <Footer />
    </>
  );
}

export default Home;
