import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampTraits from './LavaLampTraits';
import Data from './Data';

function LavaLampTraitsCarousel() {
  return (
    <CarouselProvider
      isIntrinsicHeight={true}
      totalSlides={3}
      isPlaying={true}
      interval={5000}
      orientation="horizontal"
      visibleSlides={1}
      dragEnabled={false}
    >
      <Slider>
        <Slide index={0}><LavaLampTraits traits={Data[0]} /></Slide>
        <Slide index={1}><LavaLampTraits traits={Data[1]} /></Slide>
        <Slide index={2}><LavaLampTraits traits={Data[2]} /></Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default LavaLampTraitsCarousel;
