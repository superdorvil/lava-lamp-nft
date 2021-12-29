import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import LavaPool from '../components/LavaPool';
import LavaLampTraits from '../components/LavaLampTraits';
import LavaLampFaqs from '../components/LavaLampFaqs';
import LavaLampStats from '../components/LavaLampStats';
import SerialNumbers from '../components/SerialNumbers';
import Footer from '../components/Footer';
import LavaModal from '../components/LavaModal';
import {STATES} from '../constants';

function Home() {
  const [state, updateState] = useState(STATES.closed);

  function toggleModal({newState}) {
    updateState(newState);
  }

  return (
    <>
      <HeroSection toggleModal={toggleModal} />
      <LavaPool toggleModal={toggleModal} />
      <LavaLampTraits />
      <LavaLampFaqs />
      <SerialNumbers />
      <LavaLampStats />
      <Footer />
      <LavaModal state={state} toggleModal={toggleModal} />
    </>
  );
}

export default Home;
