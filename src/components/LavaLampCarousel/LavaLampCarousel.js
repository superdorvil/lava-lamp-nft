import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampImages from './LavaLampImages';
import alienLamp from '../../images/AlienLamp.jpg';
import angelLamp from '../../images/AngelLamp.png';
import normalLamp1 from '../../images/NormalLamp1.jpg';
import normalLamp2 from '../../images/NormalLamp2.png';
import rocketLamp from '../../images/RocketLamp.png';

function LavaLampCarousel() {
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
          <Slide index={0}>
            <LavaLampImages
              lamp1={alienLamp}
              lamp2={angelLamp}
              lamp3={normalLamp1}
              lamp4={normalLamp2}
              lamp5={rocketLamp}
            />
          </Slide>
          <Slide index={1}>
            <LavaLampImages
              lamp1={alienLamp}
              lamp2={normalLamp2}
              lamp3={rocketLamp}
              lamp4={angelLamp}
              lamp5={normalLamp1}
            />
          </Slide>
          <Slide index={2}>
            <LavaLampImages
              lamp1={rocketLamp}
              lamp2={normalLamp1}
              lamp3={angelLamp}
              lamp4={normalLamp2}
              lamp5={alienLamp}
            />
          </Slide>
        </Slider>
      </CarouselProvider>
  );
}

export default LavaLampCarousel;
