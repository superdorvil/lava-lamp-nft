const fs = require('fs');
const {
  generateAssets,
  generate7979LavaLamps,
  generateLavaLamp,
} = require('./generator/GenerateLavaLampSVGs');
const {generateMetadata} = require('./generator/GenerateLavaLampMetadata');
const {
  attributes,
  backgrounds,
  bases,
  glasses,
  glassColors,
  glassColorIndexes,
  lavaColors,
  lavaColorIndexes,
  rarities,
  overlays,
  swagger,
  attributeMetadata,
  backgroundMetadata,
  baseMetadata,
  glassMetadata,
  glassColorMetadata,
  lavaColorMetadata,
  rarityMetadata,
  overlayMetadata,
  swagMetadata,
  generateTraits,
} = require('./generator/GenerateTraits');
const {
  hash,
  saveFile,
  saveNFiles,
} = require('./utils');

const randomDir = __dirname + '/random/';
const svgs = [];

const lavaLamps = [
  {
    attribute: attributes.none,
    background: backgrounds.aurora,
    base: bases.standard,
    glass: glasses.normal,
    glassColor: glassColorIndexes.pearl,
    lava1: lavaColorIndexes.red,
    lava2: lavaColorIndexes.red,
    lava3: lavaColorIndexes.red,
    lava4: lavaColorIndexes.red,
    overlay: overlays.ethereum,
    rarity: rarities.og,
    swag: swagger.inactive,
  },
];

lavaLamps.forEach((ll, i) => {
  svgs.push(
    generateLavaLamp({
      attribute: ll.attribute,
      background: ll.background,
      base: ll.base,
      glass: ll.glass,
      glassColor: ll.glassColor,
      lava1: ll.lava1,
      lava2: ll.lava1,
      lava3: ll.lava1,
      lava4: ll.lava1,
      overlay: ll.overlay,
      rarity: ll.rarity,
      swag: ll.swag,
    })
  )
});

// we are limiting the files to not overcrowd ipfs folder
saveNFiles({
  data: svgs,
  fileSuffix: '.svg',
  dir: randomDir,
});
