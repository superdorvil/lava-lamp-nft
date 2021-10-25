const fs = require("fs");
const { createCanvas, loadImage } = require("canvas"); // brew install pkg-config cairo pango libpng jpeg giflib librsvg
const {
  backgrounds,
  bases,
  lava1,
  lava2,
  lava3,
  lava4,
  directory,
} = require('./config.js');

const canvas = createCanvas(768, 768);
const ctx = canvas.getContext("2d");

const grabLayers = (backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index) => {
  return ([
    backgrounds[backgroundIndex],
    bases[baseIndex],
    lava1[lava1Index],
    lava2[lava2Index],
    lava3[lava3Index],
    lava4[lava4Index],
  ]);
};

const saveLayer = (_canvas) => {
  const buffer = _canvas.toBuffer('image/png');
  fs.writeFileSync(__dirname + '/lavalamp.png', buffer);

  return buffer;
};

const drawImage = async (layer, dirIndex) => {
  const image = await loadImage(directory[dirIndex] + layer);

  ctx.drawImage(
    image,
    0,
    0,
    300,
    300,
  );

  saveLayer(canvas);
};

const generateLavaLamp = async (backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index) => {
  const layers = grabLayers(backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index);

  ctx.clearRect(0, 0, 300, 300);
  saveLayer(canvas);

  await drawImage(layers[0], 0); // background
  await drawImage(layers[1], 1); // base
  await drawImage(layers[2], 2); // l1
  await drawImage(layers[3], 3); // l2
  await drawImage(layers[4], 4); // l3
  await drawImage(layers[5], 5); // l4

  /*const image = await loadImage('./lavalamp.png');

  ctx.drawImage(
    image,
    0,
    0,
    300,
    300,
  );*/

  return canvas.toBuffer("image/png");
};

const genRand = (n) => {
  const rand = Math.floor(Math.random() * n);

  return rand;
};

const createRandFile = () => {
  generateLavaLamp(genRand(9), genRand(5), genRand(9), genRand(9), genRand(9), genRand(9));

  return canvas.toBuffer("image/png");
};

// createRandFile();
// createFile(genRand(9), genRand(5), genRand(9), genRand(9), genRand(9), genRand(9));
// generateLavaLamp(genRand(9), genRand(9), genRand(9), genRand(9), genRand(9), genRand(5));

module.exports = { generateLavaLamp };
