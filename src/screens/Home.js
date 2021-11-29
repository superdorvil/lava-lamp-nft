import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import LavaLampCarousel from '../components/LavaLampCarousel';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import LavaList from '../components/LavaList';
import {
  infoSectionOne,
  infoSectionTwo,
} from '../components/InfoSection/Data';
import LampProperties from '../components/LampProperties';
import SVGImageGrid from '../components/SVGImageGrid';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <HeroSection />
      <LavaLampCarousel/>
      <InfoSection info={infoSectionOne} toggleModal={toggleModal} />
      <InfoSection info={infoSectionTwo}  buttonDisabled />
      <LampProperties />
      <Footer />
      <LavaList isOpen={isOpen} toggleModal={toggleModal} />
      <SVGImageGrid />
    </>
  );
}

export default Home;
