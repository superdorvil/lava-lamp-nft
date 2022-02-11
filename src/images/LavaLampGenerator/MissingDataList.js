const fs = require('fs');
const missLampsDir = __dirname + '/missing_data/lamps/';
const missMetaDir = __dirname + '/missing_data/metadata/';
const sLampsDir = __dirname + '/missing_data/seq_lamps/';
const sMetaDir = __dirname + '/missing_data/seq_metadata/';
const oLampsDir = __dirname + '/missing_data/old_lamps/';
const oMetaDir = __dirname + '/missing_data/old_metadata/';
const oldLampsDir = __dirname + '/ipfs/lamps/';
const oldMetaDir = __dirname + '/ipfs/metadata/';
const {idList} = require('./IDList');
const {
  generateTraits,
} = require('./generator/GenerateTraits');
const {
  generateAssets,
  generate7979LavaLamps,
  generateLavaLamp,
} = require('./generator/GenerateLavaLampSVGs');
const {generateMetadata} = require('./generator/GenerateLavaLampMetadata');
const myArgs = process.argv.slice(2);

function saveFile({data, fileSuffix, id, dir, append, prepend}) {
  const filePath = dir + id + fileSuffix;
  const newData = data;

  // writeFile function with filename, content and callback function
  fs.writeFile(filePath, newData, function (err) {
    if (err) throw err;
  });

}

function saveNFiles({data, fileSuffix, dir}) {
  // Check if files exist
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  // save all lamps
  data.forEach((d, id) => {
    saveFile({data: d, fileSuffix, id: missingData[id], dir});
  });
}

function saveNFiles2({data, fileSuffix, dir}) {
  // Check if files exist
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  // save all lamps
  data.forEach((d, id) => {
    saveFile({data: d, fileSuffix, id, dir});
  });
}

const missingData = [
  5586,
];

if (myArgs[0]) {
  if (myArgs[0].length === "QmVym72VC5uGjH75HF3aEwU871GdciVnsLdiMhVKjFbVJY".length) {
    const cid = myArgs[0];
    const lavaLampMetadata = [];
    const files = [];
    missingData.forEach((id, i) => {
      const newFile = (id) + '.json';
      files.push(newFile);
    });

    files.forEach((file, i) => {
      const data = fs.readFileSync(missMetaDir + file, 'utf8');
      const newData = data.replace('~', cid);
      lavaLampMetadata.push(newData);
    });

    saveNFiles({
      data: lavaLampMetadata,
      fileSuffix: '.json',
      dir: missMetaDir,
    });
    return;
  }
}




const files = [];

missingData.forEach((id, i) => {
  fs.copyFile(oldLampsDir + id + '.svg', oLampsDir + i + '.svg', () => {});
  fs.copyFile(oldMetaDir + id + '.json', oMetaDir + i + '.json', () => {});
});

const traits = generateTraits();
const lavaLampSVGs = [];
const lavaLampMetadata = [];

missingData.forEach((id, i) => {
//  console.log(id);
  lavaLampSVGs.push(generateLavaLamp({...traits[id]}));
  lavaLampMetadata.push(
    JSON.stringify(
      generateMetadata({
        ...traits[id],
        uri: `ipfs://~/${id}.svg`
      })
    )
  );
});


saveNFiles({
  data: lavaLampSVGs,
  fileSuffix: '.svg',
  dir: missLampsDir,
});
saveNFiles({
  data: lavaLampMetadata,
  fileSuffix: '.json',
  dir: missMetaDir,
});

saveNFiles2({
  data: lavaLampSVGs,
  fileSuffix: '.svg',
  dir: sLampsDir,
});
saveNFiles2({
  data: lavaLampMetadata,
  fileSuffix: '.json',
  dir: sMetaDir,
});
