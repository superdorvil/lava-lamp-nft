import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import PowTracker from '../components/PowTracker';
import LavaLampTraitsCarousel from '../components/LavaLampTraitsCarousel';
import LavaLampFaqs from '../components/LavaLampFaqs';
import LavaLampStats from '../components/LavaLampStats';
import SerialNumbers from '../components/SerialNumbers';
import Footer from '../components/Footer';
import LavaModal from '../components/LavaModal';
import {STATES} from '../constants';

function Home() {
  const [state, updateState] = useState(STATES.modal.closed);

  function toggleModal({state}) {
    updateState(state);
  }

  return (
    <>
      <HeroSection toggleModal={toggleModal} />
      <PowTracker />
      <LavaLampTraitsCarousel />
      <LavaLampFaqs />
      <SerialNumbers />
      <Footer />
      <LavaModal state={state} toggleModal={toggleModal} />
    </>
  );
}

export default Home;
