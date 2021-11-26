import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampImages from './LavaLampImages';
import {generateRandomLavaLamp} from '../../scripts/LavaLampGenerator';

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
          {/*<LavaLampImages
            lamp1={generateLavaLamp({
              attribute: 0, base: , background: 0, lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp2={generateLavaLamp({
              attribute: 0, base: , background: 5, lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp3={generateLavaLamp({
              attribute: 2, base: , background: 1, lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp4={generateLavaLamp({
              attribute: 1, base: , background: 6, lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp5={generateLavaLamp({
              attribute: 3, base: , background: 7, lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
          />
        </Slide>
        <Slide index={1}>
          <LavaLampImages
            lamp1={generateLavaLamp({
              attribute: 0, base: , background: 5, lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp2={generateLavaLamp({
              attribute: 0, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp3={generateLavaLamp({
              attribute: 1, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp4={generateLavaLamp({
              attribute: 2, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp5={generateLavaLamp({
              attribute: 3, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
          />
        </Slide>
        <Slide index={2}>
          <LavaLampImages
            lamp1={generateLavaLamp({
              attribute: 2, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp2={generateLavaLamp({
              attribute: 1, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp3={generateLavaLamp({
              attribute: 3, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp4={generateLavaLamp({
              attribute: 0, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp5={generateLavaLamp({
              attribute: 1, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
          />
        </Slide>
        <Slide index={3}>
          <LavaLampImages
            lamp1={generateLavaLamp({
              attribute: 0, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp2={generateLavaLamp({
              attribute: 0, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp3={generateLavaLamp({
              attribute: 1, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp4={generateLavaLamp({
              attribute: 2, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
            lamp5={generateLavaLamp({
              attribute: 3, base: , background: , lava1: , lava2: , lava3: , lava4: , glass: , overlay:
            })}
          />
        </Slide>*/}
      </Slider>
    </CarouselProvider>
  );
}

export default LavaLampCarousel;
