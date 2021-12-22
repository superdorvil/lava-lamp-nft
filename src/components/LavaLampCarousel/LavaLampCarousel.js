import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampImages from './LavaLampImages';
const {
  generateLavaLamp,
  generateRandomLavaLamp,
} = require('../../../src/images/LavaLampGenerator/');

function LavaLampCarousel() {
  return (
    <CarouselProvider
      isIntrinsicHeight={true}
      totalSlides={4}
      isPlaying={true}
      interval={5000}
      orientation="horizontal"
      visibleSlides={1}
      dragEnabled={false}
    >
      <Slider>
        <Slide index={0}>
          <LavaLampImages
            lamp1={generateRandomLavaLamp()}
            lamp2={generateRandomLavaLamp()}
            lamp3={generateRandomLavaLamp()}
            lamp4={generateRandomLavaLamp()}
            lamp5={generateRandomLavaLamp()}
          />
        </Slide>
        <Slide index={1}>
          <LavaLampImages
            lamp1={generateRandomLavaLamp()}
            lamp2={generateRandomLavaLamp()}
            lamp3={generateRandomLavaLamp()}
            lamp4={generateRandomLavaLamp()}
            lamp5={generateRandomLavaLamp()}
          />
        </Slide>
        <Slide index={2}>
          <LavaLampImages
            lamp1={generateRandomLavaLamp()}
            lamp2={generateRandomLavaLamp()}
            lamp3={generateRandomLavaLamp()}
            lamp4={generateRandomLavaLamp()}
            lamp5={generateRandomLavaLamp()}
          />
        </Slide>
        <Slide index={3}>
          <LavaLampImages
            lamp1={generateRandomLavaLamp()}
            lamp2={generateRandomLavaLamp()}
            lamp3={generateRandomLavaLamp()}
            lamp4={generateRandomLavaLamp()}
            lamp5={generateRandomLavaLamp()}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default LavaLampCarousel;
