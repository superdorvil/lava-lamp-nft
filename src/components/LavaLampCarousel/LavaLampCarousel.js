import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container } from './Elements';
import LavaLampImages from './LavaLampImages';
import lavaLampTraits from './LavaLampTraits';
const {
  generateLavaLamp,
} = require('../../../src/images/LavaLampGenerator/');

function LavaLampCarousel() {
  return (
    <Container>
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
              lamp2={generateLavaLamp(lavaLampTraits[0])}
              lamp3={generateLavaLamp(lavaLampTraits[0])}
              lamp4={generateLavaLamp(lavaLampTraits[0])}
              lamp5={generateLavaLamp(lavaLampTraits[0])}
              lamp6={generateLavaLamp(lavaLampTraits[0])}
              lamp7={generateLavaLamp(lavaLampTraits[0])}
            />
          </Slide>
          <Slide index={1}>
            <LavaLampImages
              lamp1={generateLavaLamp(lavaLampTraits[0])}
              lamp2={generateLavaLamp(lavaLampTraits[0])}
              lamp3={generateLavaLamp(lavaLampTraits[0])}
              lamp4={generateLavaLamp(lavaLampTraits[0])}
              lamp5={generateLavaLamp(lavaLampTraits[0])}
              lamp6={generateLavaLamp(lavaLampTraits[0])}
              lamp7={generateLavaLamp(lavaLampTraits[0])}
            />
          </Slide>
          <Slide index={2}>
            <LavaLampImages
              lamp1={generateLavaLamp(lavaLampTraits[0])}
              lamp2={generateLavaLamp(lavaLampTraits[0])}
              lamp3={generateLavaLamp(lavaLampTraits[0])}
              lamp4={generateLavaLamp(lavaLampTraits[0])}
              lamp5={generateLavaLamp(lavaLampTraits[0])}
              lamp6={generateLavaLamp(lavaLampTraits[0])}
              lamp7={generateLavaLamp(lavaLampTraits[0])}
            />
          </Slide>
          <Slide index={3}>
            <LavaLampImages
              lamp1={generateLavaLamp(lavaLampTraits[0])}
              lamp2={generateLavaLamp(lavaLampTraits[0])}
              lamp3={generateLavaLamp(lavaLampTraits[0])}
              lamp4={generateLavaLamp(lavaLampTraits[0])}
              lamp5={generateLavaLamp(lavaLampTraits[0])}
              lamp6={generateLavaLamp(lavaLampTraits[0])}
              lamp7={generateLavaLamp(lavaLampTraits[0])}
            />
          </Slide>
        </Slider>
      </CarouselProvider>
    </Container>
  );
}

export default LavaLampCarousel;
