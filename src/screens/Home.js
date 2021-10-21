import React from 'react';
import HeroSection from '../components/HeroSection';
import LavaLampImages from '../components/LavaLampImages';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import {
  infoSectionOne,
  infoSectionTwo,
} from '../components/InfoSection/Data';
import LampProperties from '../components/LampProperties';

function Home() {
  return (
    <>
      <HeroSection />
      <LavaLampImages />
      <InfoSection info={infoSectionOne} />
      <InfoSection info={infoSectionTwo} />
      <LampProperties />
      <Footer />
    </>
  );
}

export default Home;
