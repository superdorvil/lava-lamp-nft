import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampImages from './LavaLampImages';
import lavaLampTraits from './LavaLampTraits';
const {
  generateLavaLamp,
} = require('../../../src/images/LavaLampGenerator/');

function LavaLampCarousel() {
  return (
    <CarouselProvider
      isIntrinsicHeight={true}
      totalSlides={4}
      isPlaying={true}
      interval={3000}
      orientation="horizontal"
      visibleSlides={1}
      dragEnabled={false}
    >
      <Slider>
        <Slide index={0}>
          <LavaLampImages
          lamp1={generateLavaLamp(lavaLampTraits[0])}
          lamp2={generateLavaLamp(lavaLampTraits[1])}
          lamp3={generateLavaLamp(lavaLampTraits[2])}
          lamp4={generateLavaLamp(lavaLampTraits[3])}
          lamp5={generateLavaLamp(lavaLampTraits[4])}
          lamp6={generateLavaLamp(lavaLampTraits[5])}
          lamp7={generateLavaLamp(lavaLampTraits[6])}
          />
        </Slide>
        <Slide index={1}>
          <LavaLampImages
            lamp1={generateLavaLamp(lavaLampTraits[7])}
            lamp2={generateLavaLamp(lavaLampTraits[8])}
            lamp3={generateLavaLamp(lavaLampTraits[9])}
            lamp4={generateLavaLamp(lavaLampTraits[10])}
            lamp5={generateLavaLamp(lavaLampTraits[11])}
            lamp6={generateLavaLamp(lavaLampTraits[12])}
            lamp7={generateLavaLamp(lavaLampTraits[13])}
          />
        </Slide>
        <Slide index={2}>
          <LavaLampImages
            lamp1={generateLavaLamp(lavaLampTraits[14])}
            lamp2={generateLavaLamp(lavaLampTraits[15])}
            lamp3={generateLavaLamp(lavaLampTraits[16])}
            lamp4={generateLavaLamp(lavaLampTraits[17])}
            lamp5={generateLavaLamp(lavaLampTraits[18])}
            lamp6={generateLavaLamp(lavaLampTraits[19])}
            lamp7={generateLavaLamp(lavaLampTraits[20])}
          />
        </Slide>
        <Slide index={3}>
          <LavaLampImages
            lamp1={generateLavaLamp(lavaLampTraits[21])}
            lamp2={generateLavaLamp(lavaLampTraits[22])}
            lamp3={generateLavaLamp(lavaLampTraits[23])}
            lamp4={generateLavaLamp(lavaLampTraits[24])}
            lamp5={generateLavaLamp(lavaLampTraits[25])}
            lamp6={generateLavaLamp(lavaLampTraits[26])}
            lamp7={generateLavaLamp(lavaLampTraits[27])}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default LavaLampCarousel;
