const fs = require('fs');
const path = require('path');
const {
  Lavalien,
  Crown,
  Halo,
  Wings
} = require('./layers/attributes/');
const {
  Black,
  Blueberry,
  LightBlueberry,
  LightRaspberry,
  LightStrawberry,
  Raspberry,
  Sky,
  Purple,
  Stars,
  Strawberry,
} = require('./layers/backgrounds/');
const {
  Alien,
  Bong,
  GoldAlien,
  GoldBong,
  GoldNormal,
  GoldPumpkin,
  GoldRocket,
  Normal,
  Pumpkin,
  Rocket,
} = require('./layers/bases/');
const {
  Lava1,
  Lava2,
  Lava3,
  Lava4
} = require('./layers/lavas/');
const {
  LavaCeption,
  Leaves,
  Peace,
  Smoke,
  Swirls,
  YinYang
} = require('./layers/overlays/');

const lavaColors = [
  {color1: '#321A93', color2: '#3603FF', color: 'blue'},
  {color1: '#71FF30', color2: '#25BC46', color: 'green'},
  {color1: '#21F6EA', color2: '#2183F6', color: 'light blue'},
  {color1: '#FFB800', color2: '#FF7800', color: 'orange'},
  {color1: '#FF00D6', color2: '#D700B4', color: 'pink'},
  {color1: '#5000B6', color2: '#7E5EFF', color: 'purple'},
  {color1: '#F85449', color2: '#C53434', color: 'red'},
  {color1: '#FFFFFF', color2: '#D0C9C9', color: 'white'},
  {color1: '#FABE09', color2: '#FDF21B', color: 'yellow'},
];

function generateRandomNumber({n}) {
  const rand = Math.floor(Math.random() * n);

  return rand;
};

function generateAttributeSVG({index}) {
  let attribute = '';

  switch(index) {
    case 0:
      attribute = '';
      break;
    case 1:
      attribute = Lavalien();
      break;
    case 2:
      attribute = '';//Crown();
      break;
    case 3:
      attribute = Halo();
      break;
    case 4:
      attribute = Wings();
      break;
    default:
    // add error checking
  }

  return attribute;
}

function generateBackgroundSVG({index}) {
  let background = '';

  switch(index) {
    case 0:
      background = Black();
      break;
    case 1:
      background = Blueberry();
      break;
    case 2:
      background = LightBlueberry();
      break;
    case 3:
      background = LightRaspberry();
      break;
    case 4:
      background = LightStrawberry();
      break;
    case 5:
      background = Raspberry();
      break;
    case 6:
      background = Sky();
      break;
    case 7:
      background = Purple();
      break;
    case 8:
      background = Stars();
      break;
    case 9:
      background = Strawberry();
      break;
    default:
    // add error checking
  }

  return background;
}

function generateBaseSVG({index}) {
  let base = '';

  switch(index) {
    case 0:
      base = Alien();
      break;
    case 1:
      base = Bong();
      break;
    case 2:
      base = GoldAlien();
      break;
    case 3:
      base = GoldBong();
      break;
    case 4:
      base = GoldNormal();
      break;
    case 5:
      base = GoldPumpkin();
      break;
    case 6:
      base = GoldRocket();
      break;
    case 7:
      base = Normal();
      break;
    case 8:
      base = Pumpkin();
      break;
    case 9:
      base = Rocket();
      break;
    default:
    // add error checking
  }

  return base;
}

function generateLavaSVG({index, color}) {
  let lava = '';

  if (color === 0) {
    return lava;
  }

  const colors = lavaColors[color - 1];

  switch(index) {
    case 0:
      lava = Lava1({colors});
      break;
    case 1:
      lava = Lava2({colors});
      break;
    case 2:
      lava = Lava3({colors});
      break;
    case 3:
      lava = Lava4({colors});
      break;
    default:
    // add error checking
  }

  return lava;
}

function generateOverlaySVG({index}) {
  let overlay = '';

  switch(index) {
    case 0:
      overlay = '';
      break;
    case 1:
      overlay = LavaCeption();
      break;
    case 2:
      overlay = Leaves();
      break;
    case 3:
      overlay = Peace();
      break;
    case 4:
      overlay = Smoke();
      break;
    case 5:
      overlay = Swirls();
      break;
    case 6:
      overlay = YinYang();
      break;
    default:
    // add error checking
  }

  return overlay;
}

function generateAttributeMetaData({index}) {
  let attribute = '';

  switch(index) {
    case '0':
      attribute = '';
      break;
    case '1':
      attribute = 'Lavalien';
      break;
    case '2':
      attribute = 'Crown';
      break;
    case '3':
      attribute = 'Halo';
      break;
    case '4':
      attribute = 'Wings';
      break;
    default:
    // add error checking
  }

  return attribute;
}

function generateBackgroundMetaData({index}) {
  let background = '';

  switch(index) {
    case '0':
      background = 'Black';
      break;
    case '1':
      background = 'Blueberry';
      break;
    case '2':
      background = 'Light Blueberry';
      break;
    case '3':
      background = 'Light Raspberry';
      break;
    case '4':
      background = 'Light Strawberry';
      break;
    case '5':
      background = 'Light Raspberry';
      break;
    case '6':
      background = 'Sky';
      break;
    case '7':
      background = 'Purple';
      break;
    case '8':
      background = 'Stars';
      break;
    case '9':
      background = 'Strawberry';
      break;
    default:
    // add error checking
  }

  return background;
};

function generateBaseMetaData({index}) {
  let base = '';

  switch(index) {
    case '0':
      base = 'Alien';
      break;
    case '1':
      base = 'Bong';
      break;
    case '2':
      base = 'Golden Alien';
      break;
    case '3':
      base = 'Golden Bong';
      break;
    case '4':
      base = 'GoldNormal';
      break;
    case '5':
      base = 'Gold Pumpkin';
      break;
    case '6':
      base = 'Gold Rocket';
      break;
    case '7':
      base = 'Normal';
      break;
    case '8':
      base = 'Pumpkin';
      break;
    case '9':
      base = 'Rocket';
      break;
    default:
    // add error checking
  }

  return base;
}

function generateLavaColorMetaData({index}) {
  let lava = '';

  switch(index) {
    case '0':
      lava = 'none';
      break;
    case '1':
      lava = 'Blue';
      break;
    case '2':
      lava = 'Green';
      break;
    case '3':
      lava = 'Light Blue';
      break;
    case '4':
      lava = 'Orange';
      break;
    case '5':
      lava = 'Pink';
      break;
    case '6':
      lava = 'Purple';
      break;
    case '7':
      lava = 'Red';
      break;
    case '8':
      lava = 'White';
      break;
    case '9':
      lava = 'Yellow';
      break;
    default:
    // add error checking
  }

  return lava;
};

function generateOverlayMetadata({index}) {
  let overlay = '';

  switch(index) {
    case '0':
      overlay = '';
      break;
    case '1':
      overlay = 'LavaCeption';
      break;
    case '2':
      overlay = 'Leaves';
      break;
    case '3':
      overlay = 'Peace';
      break;
    case '4':
      overlay = 'Smoke';
      break;
    case '5':
      overlay = 'Swirls';
      break;
    case '6':
      overlay = 'YinYang';
      break;
    default:
    // add error checking
  }

  return overlay;
}

function generateNameMetaData({base, lava1, lava2, lava3, lava4}) {
  let b = 'LavaLamp';
  if (base !== 2) {
    b = generateBaseMetaData({index: base}) + ' LavaLamp';
  }

  return (generateLavaColorMetaData({index: lava1}) + ' ' + generateLavaColorMetaData({index: lava2}) + ' ' + generateLavaColorMetaData({index: lava3}) + ' ' + generateLavaColorMetaData({index: lava4}) + ' lava ' + b);
};

function generateDescriptionMetaData({attribute, background, base, lava1, lava2, lava3, lava4, overlay, tokenId}) {
  let b = 'LavaLamp ' + tokenId;
  if (base !== 2) {
    b = getBase({index: base}) + ' LavaLamp ' + tokenId;
  }
  b = b + ' with ';

  return b + generateLavaColorMetaData({index: lava1}) + ' ' + generateLavaColorMetaData({index: lava2}) + ' ' + generateLavaColorMetaData({index: lava3}) + ' ' + generateLavaColorMetaData({index: lava4}) + ' lava and a ' + background + ' background';
};

const generateMetaData = ({attribute, background, base, lavaCount, lava1, lava2, lava3, lava4, overlay, tokenId, uri}) => {
  metadata = {
    name: generateNameMetaData({attribute, base, lava1, lava2, lava3, lava4}),
    decription: generateDescriptionMetaData({attribute, background, base, lava1, lava2, lava3, lava4, overlay, tokenId}),
    image: uri,
    attributes: [
      {
        "trait_type": "Lava Count",
        "value": lavaCount,
      },
      {
        "trait_type": "Lava Color 1",
        "value": generateLavaColorMetaData({lava1}),
      },
      {
        "trait_type": "Lava Color 2",
        "value": generateLavaColorMetaData({lava2}),
      },
      {
        "trait_type": "Lava Color 3",
        "value": generateLavaColorMetaData({lava3}),
      },
      {
        "trait_type": "Lava Color 4",
        "value": generateLavaColorMetaData({lava4}),
      },
      {
        "trait_type": "Base",
        "value": generateBaseMetaData({base}),
      },
      {
        "trait_type": "Background",
        "value": generateBackgroundMetaData({background}),
      },
      {
        "trait_type": "Attribute",
        "value": generateAttributeMetaData({attribute}),
      },
    ]
  };

  return metadata;
};

function generateLavaLamp({attribute, base, background, lava1, lava2, lava3, lava4, overlay}) {
  const openTag = '<svg width="768" height="768" viewBox="0 0 768 768" fill="none" xmlns="http://www.w3.org/2000/svg">';
  const closeTag = '</svg>';

  return `
    ${openTag}
    ${generateBackgroundSVG({index: background})}
    ${generateOverlaySVG({index: overlay})}
    ${generateBaseSVG({index: base})}
    ${generateLavaSVG({index: 0, color: lava1})}
    ${generateLavaSVG({index: 1, color: lava2})}
    ${generateLavaSVG({index: 2, color: lava3})}
    ${generateLavaSVG({index: 3, color: lava4})}
    ${generateAttributeSVG({index: attribute})}
    ${closeTag}
  `;
}

function generateRandomLavaLamp() {
  return generateLavaLamp({
    attribute: generateRandomNumber({n: 5}),
    base: generateRandomNumber({n: 10}),
    background: generateRandomNumber({n: 10}),
    lava1: generateRandomNumber({n: 10}),
    lava2: generateRandomNumber({n: 10}),
    lava3: generateRandomNumber({n: 10}),
    lava4: generateRandomNumber({n: 10}),
    overlay: generateRandomNumber({n: 7}),
  });
}

const dirBananas = __dirname + '/bananas/';
const dir7979 = __dirname + '/lavalamps7979/';

function saveLavaLamp({lavaLamp, id, dir}) {
  const filePath = dir + 'lamp_' + id + '.svg';

  // writeFile function with filename, content and callback function
  fs.writeFile(filePath, lavaLamp, function (err) {
    if (err) throw err;
  });
}

function saveNLavaLamps({lavaLamps, dir}) {
  // Check if files exist
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  // unlink all the files
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(dir, file), err => {
        if (err) throw err;
      });
    }
  });

  // save all lamps
  lavaLamps.forEach((lavaLamp, id) => {
    saveLavaLamp({lavaLamp, id, dir});
  });
}

function generateNRandomLavaLamps({n}) {
  const lavaLamps = [];

  for (let i = 0; i < n; i++) {
    lavaLamps.push(generateRandomLavaLamp());
  }

  saveNLavaLamps({lavaLamps, dir: dirBananas});
}

function generate7979LavaLamps() {
  const lavaLamps = [];
  let lavaIndex;
  let lava1;
  let lava2;
  let lava3;
  let lava4;

  for (let i = 0; i < 7800; i++) {
    lavaIndex = i;
    lava1 = lavaIndex % 10;
    lavaIndex = (lavaIndex - lava1) / 10;
    lava2 = lavaIndex % 10;
    lavaIndex = (lavaIndex - lava2) / 10;
    lava3 = lavaIndex % 10;
    lavaIndex = (lavaIndex - lava3) / 10;
    lava4 = lavaIndex % 10;
    lavaIndex = (lavaIndex - lava4) / 10;

    lavaLamps.push(generateLavaLamp({
      attribute: generateRandomNumber({n: 5}),
      base: generateRandomNumber({n: 10}),
      background: generateRandomNumber({n: 10}),
      lava1,
      lava2,
      lava3,
      lava4,
      overlay: generateRandomNumber({n: 7}),
    }));
  }

  saveNLavaLamps({lavaLamps, dir: dir7979});
}

// generateNRandomLavaLamps({n: 10000});
// generate7979LavaLamps();

module.exports = {
  generateLavaLamp,
  generateMetaData,
  generateRandomLavaLamp,
  generateNRandomLavaLamps,
};
