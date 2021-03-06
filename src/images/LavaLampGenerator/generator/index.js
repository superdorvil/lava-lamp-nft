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

module.exports = {
  generateMetadata,
  generateAssets,
  generate7979LavaLamps,
  generateLavaLamp,
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
};
