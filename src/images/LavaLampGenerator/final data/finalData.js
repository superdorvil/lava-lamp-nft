const fs = require('fs');
const {
  hash,
  saveFile,
  saveNFiles,
} = require('../utils');

const lampsDir = __dirname + '/lamps/';
const metaDir = __dirname + '/metadata/';

function updateMetadataURLs({oldCID, newCID}) {
  const lavaLampMetadata = [];
  const files = [];
  for (let i = 0; i < 7980; i++) {
    const newFile = (i) + '.json';
    files.push(newFile);
  }

  files.forEach((file, i) => {
    const data = fs.readFileSync(metaDir + file, 'utf8');
    const newData = data.replace(oldCID, newCID);
    lavaLampMetadata.push(newData);
  });

  saveNFiles({
    data: lavaLampMetadata,
    fileSuffix: '.json',
    dir: metaDir,
  });
}

updateMetadataURLs({
  oldCID: 'QmVqtfkmNDdESrfan7HTMjrcHTgKnHaYJkQ5eqPtjNnvZH',
  newCID: 'QmfDrsjferMpDGerqoBatfJAHCsFpwivCxVMDYNCgv1DnC',
})
