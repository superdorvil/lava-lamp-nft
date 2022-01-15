const fs = require('fs');
const { createHash } = require('crypto');

function generateRandomNumber({n}) {
  const rand = Math.floor(Math.random() * n);

  return rand;
};

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

function saveFile({data, fileSuffix, id, dir}) {
  const filePath = dir + id + fileSuffix;

  // writeFile function with filename, content and callback function
  fs.writeFile(filePath, data, function (err) {
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
    saveFile({data: d, fileSuffix, id, dir});
  });
}

// fisher yates shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

module.exports = {
  generateRandomNumber,
  hash,
  saveFile,
  saveNFiles,
  shuffleArray,
};
