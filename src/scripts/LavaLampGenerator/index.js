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

const canvas = createCanvas(350, 350);
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
    350,
    350,
  );

  saveLayer(canvas);
};

const generateLavaLamp = async (backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index) => {
  const layers = grabLayers(backgroundIndex, baseIndex, lava1Index, lava2Index, lava3Index, lava4Index);

  ctx.clearRect(0, 0, 350, 350);
  console.log(canvas);
  saveLayer(canvas);

  await drawImage(layers[0], 0); // background
  await drawImage(layers[1], 1); // base
  await drawImage(layers[2], 2); // l1
  await drawImage(layers[3], 3); // l2
  await drawImage(layers[4], 4); // l3
  await drawImage(layers[5], 5); // l4

  return canvas.toBuffer("image/png");
};

const genRand = (n) => {
  const rand = Math.floor(Math.random() * n);

  return rand;
};

/*const createRandFile = () => {
  generateLavaLamp(genRand(9), genRand(5), genRand(9), genRand(9), genRand(9), genRand(9));

  return canvas.toBuffer("image/png");
};*/

const getColor = (lava) => {
  let value;

  switch(lava) {
    case '0':
      value = 'Blue';
      break;
    case '1':
      value = 'Green';
      break;
    case '2':
      value = 'Light Blue';
      break;
    case '3':
      value = 'Orange';
      break;
    case '4':
      value = 'Pink';
      break;
    case '5':
      value = 'Purple';
      break;
    case '6':
      value = 'Red';
      break;
    case '7':
      value = 'White';
      break;
    case '8':
      value = 'Yellow';
      break;
    default:
    // add error checking
  }

  return value;
};

const getBackground = (background) => {
  let value;

  switch(background) {
    case '0':
      value = 'Black';
      break;
    case '1':
      value = 'Blueberry';
      break;
    case '2':
      value = 'Halo';
      break;
    case '3':
      value = 'Light Blueberry';
      break;
    case '4':
      value = 'Light Raspberry';
      break;
    case '5':
      value = 'Light Strawberry';
      break;
    case '6':
      value = 'Raspberry';
      break;
    case '7':
      value = 'Stars';
      break;
    case '8':
      value = 'Strawberry';
      break;
    default:
    // add error checking
  }

  return value;
};

const getSticker = (sticker) => {
  let value;

  switch(sticker) {
    case '0':
      value = 'none';
      break;
    case '1':
      value = '';
      break;
    case '2':
      value = '';
      break;
    case '3':
      value = '';
      break;
    case '4':
      value = '';
      break;
    case '5':
      value = '';
      break;
    case '6':
      value = '';
      break;
    case '7':
      value = '';
      break;
    case '8':
      value = '';
      break;
    default:
    // add error checking
  }

  return value;
};

const getBase = (base) => {
  let value;

  switch(base) {
    case '0':
      value = 'Alien';
      break;
    case '1':
      value = 'Bong';
      break;
    case '2':
      value = 'Normal';
      break;
    case '3':
      value = 'Pumpkin';
      break;
    case '4':
      value = 'Rocket';
      break;
    default:
    // add error checking
  }

  return value;
};

const getName = (base, lava1, lava2, lava3, lava4) => {
  console.log(base === '0');
  console.log(lava1 === '1');
  let b = 'LavaLamp';
  if (base !== 2) {
    b = getBase(base) + ' LavaLamp';
  }

  return (getColor(lava1) + ' ' + getColor(lava2) + ' ' + getColor(lava3) + ' ' + getColor(lava4) + ' lava ' + b);
};

const getDescription = (base, lava1, lava2, lava3, lava4, tokenId, background) => {
  let b = 'LavaLamp ' + tokenId;
  if (base !== 2) {
    b = getBase(base) + ' LavaLamp ' + tokenId;
  }
  b = b + ' with ';

  return b + getColor(lava1) + ' ' + getColor(lava2) + ' ' + getColor(lava3) + ' ' + getColor(lava4) + ' lava and a ' + background + ' background';
};

const generateMetaData = (tokenId, lavaCount, lava1, lava2, lava3, lava4, base, background, sticker, uri) => {
  metadata = {
    name: getName(base, lava1, lava2, lava3, lava4),
    decription: getDescription(base, lava1, lava2, lava3, lava4, tokenId, background),
    image: uri,
    attributes: [
      {
        "trait_type": "Lava Count",
        "value": lavaCount,
      },
      {
        "trait_type": "Lava Color 1",
        "value": getColor(lava1),
      },
      {
        "trait_type": "Lava Color 2",
        "value": getColor(lava2),
      },
      {
        "trait_type": "Lava Color 3",
        "value": getColor(lava3),
      },
      {
        "trait_type": "Lava Color 4",
        "value": getColor(lava4),
      },
      {
        "trait_type": "Base",
        "value": getBase(base),
      },
      {
        "trait_type": "Background",
        "value": getBackground(background),
      },
      {
        "trait_type": "Sticker",
        "value": getSticker(sticker),
      },
    ]
  };

  return metadata;
};

// createRandFile();
// createFile(genRand(9), genRand(5), genRand(9), genRand(9), genRand(9), genRand(9));
// generateLavaLamp(genRand(9), genRand(9), genRand(9), genRand(9), genRand(9), genRand(5));

module.exports = { generateLavaLamp, generateMetaData };

/*
const generateMetaData = (tokenId, uri) => {
  let r;
  let lavaIndex = tokenId;
  let lavaCount = 0;
  let lava1;
  let lava2;
  let lava3;
  let lava4;
  let base;
  let background;
  let sticker;
  let metadata;

  lava1 = lavaIndex % 10;
  lavaIndex = (lavaIndex - lava1) / 10;
  lava2 = lavaIndex % 10;
  lavaIndex = (lavaIndex - lava2) / 10;
  lava3 = lavaIndex % 10;
  lavaIndex = (lavaIndex - lava3) / 10;
  lava4 = lavaIndex % 10;
  lavaIndex = (lavaIndex - lava4) / 10;

  if (lava1 > 0) {
    lavaCount = lavaCount + 1;
  }
  if (lava2 > 0) {
    lavaCount = lavaCount + 1;
  }
  if (lava3 > 0) {
    lavaCount = lavaCount + 1;
  }
  if (lava4 > 0) {
    lavaCount = lavaCount + 1;
  }

  // bases
  r = genRand(5);
  if (r < 1) {
      base = 0;
  } else if (r < 2) {
      base = 1;
  } else if (r < 3) {
      base = 2;
  } else if (r < 4) {
      base = 3;
  } else if (r < 5) {
      base = 4;
  }

  // background
  r = genRand(9);
  if (r < 1) {
      background = 0;
  } else if (r < 2) {
      background = 1;
  } else if (r < 3) {
      background = 2;
  } else if (r < 4) {
      background = 3;
  } else if (r < 5) {
      background = 4;
  } else if (r < 6) {
      background = 5;
  } else if (r < 7) {
      background = 6;
  } else if (r < 8) {
      background = 7;
  } else if (r < 9) {
      background = 8;
  }

  // sticker
  r = genRand(9);
  if (r < 1) {
      sticker = 0;
  } else if (r < 2) {
      sticker = 1;
  } else if (r < 3) {
      sticker = 2;
  } else if (r < 4) {
      sticker = 3;
  } else if (r < 5) {
      sticker = 4;
  } else if (r < 6) {
      sticker = 5;
  } else if (r < 7) {
      sticker = 6;
  } else if (r < 8) {
      sticker = 7;
  } else if (r < 9) {
      sticker = 8;
  }
  sticker = 0;

  metadata = {
    name: getName(base, lava1, lava2, lava3, lava4),
    decription: getDescription(base, lava1, lava2, lava3, lava4, tokenId, background),
    image: uri,
    attributes: [
      {
        "trait_type": "Lava Count",
        "value": lavaCount,
      },
      {
        "trait_type": "Lava Color 1",
        "value": getColor(lava1),
      },
      {
        "trait_type": "Lava Color 2",
        "value": getColor(lava2),
      },
      {
        "trait_type": "Lava Color 3",
        "value": getColor(lava3),
      },
      {
        "trait_type": "Lava Color 4",
        "value": getColor(lava4),
      },
      {
        "trait_type": "Base",
        "value": getBase(base),
      },
      {
        "trait_type": "Background",
        "value": getBackground(background),
      },
      {
        "trait_type": "Sticker",
        "value": getSticker(sticker),
      },
    ]
  };

  return metadata;
};


    let metadataJson = {
      name: 'Lamp Name, Probably the base and SerialNumber',
      decription: 'LavaLamps are lit!!!',
      image: `${baseUri}/token/lavalamp/${tokenId}/${lavaCount}/${lava1}/${lava2}/${lava3}/${lava4}/${base}/${background}/${sticker}`,
      attributes: [
        {
          "trait_type": "Lava Count",
          "value": lavaCount,
        },
        {
          "trait_type": "Color 1",
          "value": lava1,
        },
        {
          "trait_type": "Color 2",
          "value": lava2,
        },
        {
          "trait_type": "Color 3",
          "value": lava3,
        },
        {
          "trait_type": "Color 4",
          "value": lava4,
        },
        {
          "trait_type": "Base",
          "value": base,
        },
        {
          "trait_type": "Background",
          "value": background,
        },
        {
          "trait_type": "Sticker",
          "value": "Should we actually do stickers? It would look weird on the alien lamp, maybe on the normal base only???, i like that",
        },
      ]
    };
*/
