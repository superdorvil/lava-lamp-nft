import React from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LavaLampImages from './LavaLampImages';
import LavaLamp from './LavaLamp';
import { MyLavaLamps, Container } from './LavaLampElements';
const {
  generateLavaLamp,
  generateRandomLavaLamp,
  BuyMoreLavaLamps,
} = require('../../../src/images/LavaLampGenerator/');


function MyLavaLampsCarousel({metadata}) {
  const lampImages = [];
  const tempMetadata = [];
  const lampMetadata = [];
  const emptyLampCount = 5 - (metadata.length % 5);
  const totalLampCount = metadata.length;
  let count = 0;

  metadata.forEach((meta, i) => {
    tempMetadata.push(meta);
  });

  for (let i = 0; i < emptyLampCount; i++) {
    tempMetadata.push('');
  }

  const sliderCount = tempMetadata.length / 5;

  for (let i = 0; i < sliderCount; i++) {
    lampMetadata.push([]);
  }

  for (let i = 0; i < sliderCount; i++) {
    for (let j = 0; j < 5; j++) {
      lampMetadata[i].push(tempMetadata[count]);
      count++;
    }
  }

  lampMetadata.forEach((meta, i) => {
    lampImages.push(
      <LavaLampImages
        key={i}
        lamp1={meta[0] !== '' ?
          generateLavaLamp({
            attribute: parseInt(meta[0].attribute, 10),
            background: parseInt(meta[0].background, 10),
            base: parseInt(meta[0].base, 10),
            glass: parseInt(meta[0].glass, 10),
            glassColor: parseInt(meta[0].glassColor, 10),
            lava1: parseInt(meta[0].lava_1, 10),
            lava2: parseInt(meta[0].lava_2, 10),
            lava3: parseInt(meta[0].lava_3, 10),
            lava4: parseInt(meta[0].lava_4, 10),
            overlay: parseInt(meta[0].overlay, 10),
            rarity: parseInt(meta[0].rarity, 10),
          }) : ''}
        lamp2={meta[1] !== '' ?
          generateLavaLamp({
            attribute: parseInt(meta[1].attribute, 10),
            background: parseInt(meta[1].background, 10),
            base: parseInt(meta[1].base, 10),
            glass: parseInt(meta[1].glass, 10),
            glassColor: parseInt(meta[1].glassColor, 10),
            lava1: parseInt(meta[1].lava_1, 10),
            lava2: parseInt(meta[1].lava_2, 10),
            lava3: parseInt(meta[1].lava_3, 10),
            lava4: parseInt(meta[1].lava_4, 10),
            overlay: parseInt(meta[1].overlay, 10),
            rarity: parseInt(meta[1].rarity, 10),
          }) : ''}
        lamp3={meta[2] !== '' ?
          generateLavaLamp({
            attribute: parseInt(meta[2].attribute, 10),
            background: parseInt(meta[2].background, 10),
            base: parseInt(meta[2].base, 10),
            glass: parseInt(meta[2].glass, 10),
            glassColor: parseInt(meta[2].glassColor, 10),
            lava1: parseInt(meta[2].lava_1, 10),
            lava2: parseInt(meta[2].lava_2, 10),
            lava3: parseInt(meta[2].lava_3, 10),
            lava4: parseInt(meta[2].lava_4, 10),
            overlay: parseInt(meta[2].overlay, 10),
            rarity: parseInt(meta[2].rarity, 10),
          }) : ''}
        lamp4={meta[3] !== '' ?
          generateLavaLamp({
            attribute: parseInt(meta[3].attribute, 10),
            background: parseInt(meta[3].background, 10),
            base: parseInt(meta[3].base, 10),
            glass: parseInt(meta[3].glass, 10),
            glassColor: parseInt(meta[3].glassColor, 10),
            lava1: parseInt(meta[3].lava_1, 10),
            lava2: parseInt(meta[3].lava_2, 10),
            lava3: parseInt(meta[3].lava_3, 10),
            lava4: parseInt(meta[3].lava_4, 10),
            overlay: parseInt(meta[3].overlay, 10),
            rarity: parseInt(meta[3].rarity, 10),
          }) : BuyMoreLavaLamps()}
        lamp5={meta[4] !== '' ?
          generateLavaLamp({
            attribute: parseInt(meta[4].attribute, 10),
            background: parseInt(meta[4].background, 10),
            base: parseInt(meta[4].base, 10),
            glass: parseInt(meta[4].glass, 10),
            glassColor: parseInt(meta[4].glassColor, 10),
            lava1: parseInt(meta[4].lava_1, 10),
            lava2: parseInt(meta[4].lava_2, 10),
            lava3: parseInt(meta[4].lava_3, 10),
            lava4: parseInt(meta[4].lava_4, 10),
            overlay: parseInt(meta[4].overlay, 10),
            rarity: parseInt(meta[4].rarity, 10),
          }) : BuyMoreLavaLamps()}
      />
    );
  });

  return (
    <Container>
      <MyLavaLamps>My LavaLamps</MyLavaLamps>
      {lampImages.map((lm, i) => {
        return lm;
      })}
    </Container>
  );
}

export default MyLavaLampsCarousel;
