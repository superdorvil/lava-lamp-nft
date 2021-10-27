import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../redux/blockchain/blockchainActions';
import {
  LavaBackground,
  TopLeftText,
  Title,
  SubTitle,
  MintDetails,
  MintButton,
  MintContainer,
} from './HeroElements';
import BuyButton from './BuyLampButton';
import LampIncrementer from './LampIncrementer';
import SocialMediaLinks from './SocialMediaLinks';
import DropTimer from './DropTimer';
import Web3 from 'web3';
import styled from "styled-components";
import { create } from "ipfs-http-client";
//import { generateLavaLamp, generateMetaData } from '../../scripts/LavaLampGenerator';
//const Canvas = require("canvas");
const ipfsClient = create("https://ipfs.infura.io:5001/api/v0");
const { createCanvas, loadImage } = require("canvas"); // brew install pkg-config cairo pango libpng jpeg giflib librsvg
//const { generateLavaLamp, generateMetaData } = require('../../scripts/LavaLampGenerator');
//const Canvas = require('canvas');
//const canvas = createCanvas(768, 768);
//let canvas = new Canvas(100, 100, 'png');

//let canvas = document.getElementById("canvas");
//let context = canvas.getContext("2d");
//canvas.toBuffer('image/png');

//export const StyledButton = styled.button`
//  padding: 8px;
//`;

function HeroSection({dropComing}) {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const ipfsBaseUrl = "https://ipfs.infura.io/ipfs/";
  const lampPrice = Web3.utils.toWei('30', 'finney');

  const mint = (uri, tokenId) => {
    blockchain.smartContract.methods
    .claim(blockchain.account, uri, tokenId)
    .send({ from: blockchain.account, value: lampPrice })
    .once("error", (err) => {
      console.log(err);
      // setLoading(false);
      // setStatus("Error");
    })
    .then((receipt) => {
      console.log(receipt);
      // setLoading(false);
      // dispatch(fetchData(blockchain.account));
      // setStatus("Successfully minting your NFT");
    });
  };

  const createMetaDataAndMint = async () => {
    const tokenId = await blockchain.smartContract.methods.getMintableTokenID().call();
    //let {metadata, lavaCount, lava1, lava2, lava3, lava4, base, background, sticker} = generateMetaData(tokenId);
//console.log(tokenId);
//console.log(metadata);
//console.log(base);
//console.log('bro');
//console.log(canvas.toBuffer());
  try{
    (async () => {
      //const lamp = await generateLavaLamp(background, base, lava1, lava2, lava3, lava4);
      //const img = Buffer.from(lamp, 'base64');
      //const addedImage = await ipfsClient.add(img);
      //const uri = ipfsBaseUrl + addedMetaData.path;
      //metadata.image = ipfsBaseUrl + addedMetaData.path;
      //const addedMetaData = await ipfsClient.add(JSON.stringify(metadata));
      //mint(uri, tokenId);
    })();
  } catch(e) {
    console.log(e);
  }
  };

  //const data = canvas.toBuffer('image/png');
  //console.log(data);

  // Should remove this and add a mint button
  useEffect(() => {
    //console.log('hola');
    dispatch(connect());

    //return function is called whenever the function is cleaned up
  }, []);

  /*
  <StyledButton
    onClick={(e) => {
      e.preventDefault();
      clearCanvas();
    }}
  >
    CLEAR
  </StyledButton>
  */

  return (
    <LavaBackground>
      {/*<StyledButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
        }}
      >
      Hello BLOCKCHAIN Me
      </StyledButton>*/}
      <TopLeftText>LAVA LAMPS</TopLeftText>
      <Title>7,979 LAVA LAMPS</Title>
      <SubTitle>BRINGING NOSTALGIA TO THE BLOCKCHAIN!</SubTitle>
      <MintDetails>{dropComing ? 'DROP COMING SOON!' : ''}</MintDetails>
      <MintContainer>
        <MintButton onClick={(e) => {
          e.preventDefault();
          createMetaDataAndMint()}}
        >
        CLICK HERE TO MINT
        </MintButton>
      </MintContainer>
      <MintDetails>max of 20. minted at .03 ETH</MintDetails>
      <SocialMediaLinks />
    </LavaBackground>
  );
}

export default HeroSection;
