import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampImages from './LavaLampImages';
import lamp0 from '../../../src/images/carousel/LavaLamp0.png';
import lamp1 from '../../../src/images/carousel/LavaLamp1.png';
import lamp2 from '../../../src/images/carousel/LavaLamp2.png';
import lamp3 from '../../../src/images/carousel/LavaLamp3.png';
import lamp4 from '../../../src/images/carousel/LavaLamp4.png';
import lamp5 from '../../../src/images/carousel/LavaLamp5.png';
import lamp6 from '../../../src/images/carousel/LavaLamp6.png';
import lamp7 from '../../../src/images/carousel/LavaLamp7.png';
import lamp8 from '../../../src/images/carousel/LavaLamp8.png';
import lamp9 from '../../../src/images/carousel/LavaLamp9.png';
import lamp10 from '../../../src/images/carousel/LavaLamp10.png';
import lamp11 from '../../../src/images/carousel/LavaLamp11.png';
import lamp12 from '../../../src/images/carousel/LavaLamp12.png';
import lamp13 from '../../../src/images/carousel/LavaLamp13.png';
import lamp14 from '../../../src/images/carousel/LavaLamp14.png';
import lamp15 from '../../../src/images/carousel/LavaLamp15.png';
import lamp16 from '../../../src/images/carousel/LavaLamp16.png';
import lamp17 from '../../../src/images/carousel/LavaLamp17.png';
import lamp18 from '../../../src/images/carousel/LavaLamp18.png';
import lamp19 from '../../../src/images/carousel/LavaLamp19.png';
import lamp20 from '../../../src/images/carousel/LavaLamp20.png';
import lamp21 from '../../../src/images/carousel/LavaLamp21.png';
import lamp22 from '../../../src/images/carousel/LavaLamp22.png';
import lamp23 from '../../../src/images/carousel/LavaLamp23.png';
import lamp24 from '../../../src/images/carousel/LavaLamp24.png';
import lamp25 from '../../../src/images/carousel/LavaLamp25.png';
import lamp26 from '../../../src/images/carousel/LavaLamp26.png';
import lamp27 from '../../../src/images/carousel/LavaLamp27.png';

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
            lamp1={lamp0}
            lamp2={lamp1}
            lamp3={lamp2}
            lamp4={lamp3}
            lamp5={lamp4}
            lamp6={lamp5}
            lamp7={lamp6}
          />
        </Slide>
        <Slide index={1}>
          <LavaLampImages
            lamp1={lamp7}
            lamp2={lamp8}
            lamp3={lamp9}
            lamp4={lamp10}
            lamp5={lamp11}
            lamp6={lamp12}
            lamp7={lamp13}
          />
        </Slide>
        <Slide index={2}>
          <LavaLampImages
            lamp1={lamp14}
            lamp2={lamp15}
            lamp3={lamp16}
            lamp4={lamp17}
            lamp5={lamp18}
            lamp6={lamp19}
            lamp7={lamp20}
          />
        </Slide>
        <Slide index={3}>
          <LavaLampImages
            lamp1={lamp21}
            lamp2={lamp22}
            lamp3={lamp23}
            lamp4={lamp24}
            lamp5={lamp25}
            lamp6={lamp26}
            lamp7={lamp27}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default LavaLampCarousel;
