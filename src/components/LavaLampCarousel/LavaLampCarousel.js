import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampImages from './LavaLampImages';
import lamp0 from '../../../src/images/carousel/lavalamp0.svg';
import lamp1 from '../../../src/images/carousel/lavalamp1.svg';
import lamp2 from '../../../src/images/carousel/lavalamp2.svg';
import lamp3 from '../../../src/images/carousel/lavalamp3.svg';
import lamp4 from '../../../src/images/carousel/lavalamp4.svg';
import lamp5 from '../../../src/images/carousel/lavalamp5.svg';
import lamp6 from '../../../src/images/carousel/lavalamp6.svg';
import lamp7 from '../../../src/images/carousel/lavalamp7.svg';
import lamp8 from '../../../src/images/carousel/lavalamp8.svg';
import lamp9 from '../../../src/images/carousel/lavalamp9.svg';
import lamp10 from '../../../src/images/carousel/lavalamp10.svg';
import lamp11 from '../../../src/images/carousel/lavalamp11.svg';
import lamp12 from '../../../src/images/carousel/lavalamp12.svg';
import lamp13 from '../../../src/images/carousel/lavalamp13.svg';
import lamp14 from '../../../src/images/carousel/lavalamp14.svg';
import lamp15 from '../../../src/images/carousel/lavalamp15.svg';
import lamp16 from '../../../src/images/carousel/lavalamp16.svg';
import lamp17 from '../../../src/images/carousel/lavalamp17.svg';
import lamp18 from '../../../src/images/carousel/lavalamp18.svg';
import lamp19 from '../../../src/images/carousel/lavalamp19.svg';
import lamp20 from '../../../src/images/carousel/lavalamp20.svg';
import lamp21 from '../../../src/images/carousel/lavalamp21.svg';
import lamp22 from '../../../src/images/carousel/lavalamp22.svg';
import lamp23 from '../../../src/images/carousel/lavalamp23.svg';
import lamp24 from '../../../src/images/carousel/lavalamp24.svg';
import lamp25 from '../../../src/images/carousel/lavalamp25.svg';
import lamp26 from '../../../src/images/carousel/lavalamp26.svg';
import lamp27 from '../../../src/images/carousel/lavalamp27.svg';

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
