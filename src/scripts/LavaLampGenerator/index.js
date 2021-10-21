const fs = require("fs");
const { createCanvas, loadImage } = require("canvas"); // brew install pkg-config cairo pango libpng jpeg giflib librsvg
const console = require("console");

const backgrounds = [
  'black.png',
  'blueberry.png',
  'halo.png',
  'light blueberry.png',
  'light raspberry.png',
  'light strawberry.png',
  'raspberry.png',
  'stars.png',
  'strawberry.png',
];

const bases = [
  'alien.png',
  'bong.png',
  'normal.png',
  'pumpkin.png',
  'rocket.png',
];

const lava1 = [
  'blue.png',
  'green.png',
  'light blue.png',
  'orange.png',
  'pink.png',
  'purple.png',
  'red.png',
  'white.png',
  'yellow.png',
];

const lava2 = [
  'blue.png',
  'green.png',
  'light blue.png',
  'orange.png',
  'pink.png',
  'purple.png',
  'red.png',
  'white.png',
  'yellow.png',
];

const lava3 = [
  'blue.png',
  'green.png',
  'light blue.png',
  'orange.png',
  'pink.png',
  'purple.png',
  'red.png',
  'white.png',
  'yellow.png',
];

const lava4 = [
  'blue.png',
  'green.png',
  'light blue.png',
  'orange.png',
  'pink.png',
  'purple.png',
  'red.png',
  'white.png',
  'yellow.png',
];

const directory = [
  __dirname + '/layers/backgrounds/',
  __dirname + '/layers/bases/',
  __dirname + '/layers/lava 1/',
  __dirname + '/layers/lava 2/',
  __dirname + '/layers/lava 3/',
  __dirname + '/layers/lava 4/',
];

/*
const  = [
  '.png',
  '.png',
  '.png',
  '.png',
  '.png',
  '.png',
  '.png',
  '.png',
  '.png',
  '.png',
  '.png',
  '.png',
];
*/

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
  fs.writeFileSync(__dirname + '/lavalamp.png', _canvas.toBuffer("image/png"));
};

const drawImage = async (layer, dirIndex) => {
  //layers.forEach((layer, i) => {
    const image = await loadImage(directory[dirIndex] + layer);
console.log(directory[dirIndex] + layer);
    ctx.drawImage(
      image,
      0,
      0,
      300,
      300,
    );

    saveLayer(canvas);
//  });
};

const createFile = (backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index) => {
  const layers = grabLayers(backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index);

  layers.forEach((layer, dirIndex) => {
      drawImage(layer, dirIndex);
  });
};

const genRand = (n) => {
  const rand = Math.floor(Math.random() * n);
  console.log(rand);
  return rand;
};

// createFile(genRand(9), genRand(5), genRand(9), genRand(9), genRand(9), genRand(9));

async function generateLavaLamp(lava1Index, lava2Index, lava3Index, lava4Index, backgroundIndex, baseIndex) {
  //createFile(backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index);

  const layers = grabLayers(backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index);
console.log(directory[0] + layers[0]);
  let image = await loadImage(directory[0] + layers[0]);
  ctx.drawImage(
    image,
    0,
    0,
    300,
    300,
  );


console.log('Al of the bruddhas in the world, yes              ' + directory[1] + layers[1]);
  image = await loadImage(directory[1] + layers[1]);
  ctx.drawImage(
    image,
    0,
    0,
    300,
    300,
  );

  fs.writeFileSync(__dirname + '/lavalamp.png', canvas.toBuffer("image/png"));
  console.log(canvas.toBuffer("image/png"));
  return canvas.toBuffer("image/png"); // lavalamp.png
}

//createFile(genRand(9), genRand(5), genRand(9), genRand(9), genRand(9), genRand(9));

const createRandFile = () => {
  createFile(genRand(9), genRand(5), genRand(9), genRand(9), genRand(9), genRand(9));
//console.log('hola' + canvas.toBuffer("image/png"));
  return canvas.toBuffer("image/png");
};

//generateLavaLamp(genRand(9), genRand(9), genRand(9), genRand(9), genRand(9), genRand(5));

module.exports = { generateLavaLamp, createRandFile };
/*const myArgs = process.argv.slice(2);
const { buildSetup, createFiles, createMetaData } = require("./layers/src/main.js");
const { defaultEdition } = require("./layers/src/config.js");
const edition = myArgs.length > 0 ? Number(myArgs[0]) : defaultEdition;

(() => {
  buildSetup();
  createFiles(edition);
  createMetaData();
})();*/
