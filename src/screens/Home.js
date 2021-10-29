import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import LavaLampImages from '../components/LavaLampImages';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import LavaList from '../components/LavaList';
import {
  infoSectionOne,
  infoSectionTwo,
} from '../components/InfoSection/Data';
import LampProperties from '../components/LampProperties';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <HeroSection />
      <LavaLampImages />
      <InfoSection info={infoSectionOne} toggleModal={toggleModal} />
      <InfoSection info={infoSectionTwo}  buttonDisabled />
      <LampProperties />
      <Footer />
      <LavaList isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}

export default Home;
