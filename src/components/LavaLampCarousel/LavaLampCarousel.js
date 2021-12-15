import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampImages from './LavaLampImages';
import l1 from '../../images/l1.svg';
import l2 from '../../images/l2.svg';
import l3 from '../../images/l3.svg';
import l4 from '../../images/l4.svg';
import l5 from '../../images/l5.svg';
import l6 from '../../images/l6.svg';
import l7 from '../../images/l7.svg';
import l8 from '../../images/l8.svg';
import l9 from '../../images/l9.svg';
import l10 from '../../images/l10.svg';
import l11 from '../../images/l11.svg';
import l12 from '../../images/l12.svg';
import l13 from '../../images/l13.svg';
import l14 from '../../images/l14.svg';
import l15 from '../../images/l15.svg';
import l16 from '../../images/l16.svg';
import l17 from '../../images/l17.svg';
import l18 from '../../images/l18.svg';
import l19 from '../../images/l19.svg';
import l20 from '../../images/l20.svg';

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
            lamp1={l1}
            lamp2={l2}
            lamp3={l3}
            lamp4={l4}
            lamp5={l5}
          />
        </Slide>
        <Slide index={1}>
          <LavaLampImages
            lamp1={l6}
            lamp2={l7}
            lamp3={l8}
            lamp4={l9}
            lamp5={l10}
          />
        </Slide>
        <Slide index={2}>
          <LavaLampImages
            lamp1={l11}
            lamp2={l12}
            lamp3={l13}
            lamp4={l14}
            lamp5={l15}
          />
        </Slide>
        <Slide index={3}>
          <LavaLampImages
            lamp1={l16}
            lamp2={l17}
            lamp3={l18}
            lamp4={l19}
            lamp5={l20}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}

export default LavaLampCarousel;
