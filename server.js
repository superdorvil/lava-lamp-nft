require('dotenv').config()
const express = require('express');
const path = require('path');
const Web3 = require('web3');
const {
  generateLavaLamp,
  generateMetadata,
} = require('./src/images/LavaLampGenerator/');
const {LampMetadata} = require('./src/images/LavaLampGenerator/ipfs/LampMetadata');
const {QuestionMarkLavaLamp} = require('./src/images/QuestionMarkLavaLamp');

const app = express();

const port = process.env.PORT || 3000;
const baseUri = process.env.BASE_URI || 'http://localhost:3000';
const contractAddress = process.env.CONTRACT_ADDRESS;
const network = process.env.NETWORK || 'rinkeby'; // rink or main probably
// This is either ganache or rinkeby
//const web3 = new Web3(new Web3.providers.HttpProvider(`https://${network}.infura.io/v3/${infuraToken}`));
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETH_CLIENT_URL));
const LavaLamp = require("./src/abis/LavaLamp.json");
const contract = new web3.eth.Contract(LavaLamp.abi, contractAddress);

// use build for development
// use public for heroku push
app.use(express.static(path.join(__dirname, 'build')));

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
      "description": 'Move quickly, the floor is lava.',
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
      res.send(QuestionMarkLavaLamp());
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
