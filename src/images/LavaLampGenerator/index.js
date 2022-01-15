const fs = require('fs');
const { createHash } = require('crypto');
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

const myArgs = process.argv.slice(2);
const lampsDir = __dirname + '/ipfs/lamps/';
const metaDir = __dirname + '/ipfs/metadata/';
const ipfsDir = __dirname + '/ipfs/';
const assetDir = __dirname + '/generatedLamps/assets/';
const lamps7979Dir = __dirname + '/generatedLamps/lamps7979/';
const nLampsDir = __dirname + '/generatedLamps/nLamps/';

function generateLavaLampsIPFS_7979() {
  const traits = generateTraits();
  const lavaLampSVGs = [];
  const lavaLampMetadata = [];
  const svgHashes = [];
  let summedHashes = '';
  let provinanceHash = '';

  traits.forEach((t, i) => {
    lavaLampSVGs.push(generateLavaLamp({...t}));
    lavaLampMetadata.push(
      JSON.stringify(
        generateMetadata({
          ...t,
          uri: `ipfs://~/${i}.svg`
        })
      )
    );
  });

  lavaLampSVGs.forEach((llsvg, i) => {
    svgHashes.push(hash(llsvg));
  });
  svgHashes.forEach((h, i) => {
    summedHashes = summedHashes + h;
  });
  provinanceHash = hash(summedHashes);

  // we are limiting the files to not overcrowd ipfs folder
  saveNFiles({
    data: lavaLampSVGs,
    fileSuffix: '.svg',
    dir: lampsDir,
  });
  saveNFiles({
    data: lavaLampMetadata,
    fileSuffix: '.json',
    dir: metaDir,
  });
  saveFile({
    data: JSON.stringify(traits),
    fileSuffix: '.js',
    dir: ipfsDir,
    id: 'LampMetaData'
  })
  saveFile({
    data: JSON.stringify({summedHashes, svgHashes}),
    fileSuffix: '.js',
    dir: ipfsDir,
    id: 'ProvinanceHashList'
  })
  saveFile({
    data: JSON.stringify(provinanceHash),
    fileSuffix: '.js',
    dir: ipfsDir,
    id: 'ProvinanceHash'
  })
}

function updateMetadataURLs({cid}) {
  const lavaLampMetadata = [];
  const files = [];
  fs.readdirSync(metaDir).forEach((file, i) => {
      const newFile = (i) + '.json';
      files.push(newFile);
    });

  files.forEach((file, i) => {
    const data = fs.readFileSync(metaDir + file, 'utf8');
    const newData = data.replace('~', cid);
    lavaLampMetadata.push(newData);
  });

  saveNFiles({
    data: lavaLampMetadata,
    fileSuffix: '.json',
    dir: metaDir,
  });
}

if (myArgs[0] === 'generate some random bullshit') {
  saveNFiles({
    data: generateAssets(),
    fileSuffix: '.svg',
    dir: assetDir,
  });
  /*saveNFiles({
    data: generateNRandomLavaLamps(),
    fileSuffix: '.svg',
    dir: nLampsDir,
  });*/
  saveNFiles({
    data: generate7979LavaLamps(),
    fileSuffix: '.svg',
    dir: lamps7979Dir,
  });
}

if (myArgs[0] === '7979 lavalamps SVG') {
  generateLavaLampsIPFS_7979();
}

if (myArgs[0] === 'Update 7979 lavalamps MetaData' && myArgs[1]) {
  updateMetadataURLs({cid: myArgs[1]});
}

// Images Qmf5gsiT9aBCK3ttuaTojWjx8uhKgQ4pWVsGhiNge8ENVh
// Meta QmRbRi2ixepCr4f2XEgDpUUHtHuhAaCQ92VqNievCiNc39
// Gateway for ipfs https://gateway.pinata.cloud/ipfs/QmRbRi2ixepCr4f2XEgDpUUHtHuhAaCQ92VqNievCiNc39
module.exports = {
  generateLavaLamp,
  generateMetadata,
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
};
