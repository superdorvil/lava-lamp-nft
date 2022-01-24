require('dotenv').config()
const express = require('express');
const path = require('path');
const Web3 = require('web3');
const {
  generateLavaLamp,
  generateMetadata,
} = require('./src/images/LavaLampGenerator/');
const {LampMetadata} = require('./src/images/LavaLampGenerator/ipfs/LampMetadata');
const {LavaLampPlaceholder} = require('./src/images/LavaLampPlaceholder');

const app = express();

const port = process.env.PORT || 3000;
const baseUri = process.env.BASE_URI || 'http://localhost:3000';
const contractAddress = process.env.CONTRACT_ADDRESS;
const network = process.env.NETWORK || 'rinkeby'; // rink or main probably
// This is either ganache or rinkeby
//const web3 = new Web3(new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${infuraToken}`));
// ETH_CLIENT_URL="http://localhost:7545"
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETH_CLIENT_URL));
const LavaLamp = require("./src/abis/LavaLamp.json");
const contract = new web3.eth.Contract(LavaLamp.abi, contractAddress);

app.use(express.static(path.join(__dirname, 'build'))); // use build for development

app.get('/token/:tokenId', async (req, res) => {
  const tokenId = req.params.tokenId;
  let metadata;
  if (tokenId <= LampMetadata.length) {
    metadata = generateMetadata({
      ...LampMetadata[tokenId],
      uri: `${baseUri}/token/lavalamp/${tokenId}`
    });
  } else {
    metadata = {
      "name": "LavaLamp " + tokenId,
      "decription":"LavaLamp " + tokenId + ' temporary image, refresh in 24 hours',
      "image": `${baseUri}/token/lavalamp/${tokenId}`,
    }
  }

  res.json(metadata);
})

app.get('/token/lavalamp/:tokenId', async (req, res) => {
  const tokenId = req.params.tokenId;

  try {
    res.setHeader('Content~Type', 'image/svg+xml');

    if (tokenId <= LampMetadata.length) {
      res.send(generateLavaLamp({...LampMetadata[tokenId]}));
    } else {
      res.send(LavaLampPlaceholder());
    }
  }
  catch {
    res.sendStatus(404);
  }
})

app.get('/opensea', async (req, res) => {
  if (baseUri === 'http://www.superdorvil.tech') {
    res.redirect(`https://testnets.opensea.io/assets/${contractAddress}/0`);
  } else {
    res.redirect('https://opensea.io');
  }
});

app.listen(port, () => {
  console.log(`App launched on ${port}`);
});
