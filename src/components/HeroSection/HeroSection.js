import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../redux/blockchain/blockchainActions';
import {
  LavaBackground,
  TopLeftText,
  Title,
  SubTitle,
  MintDetails,
} from './HeroElements';
import MintButton from '../MintButton';
import SocialMediaLinks from '../SocialMediaLinks';
import Web3 from 'web3';
import styled from "styled-components";

//export const StyledButton = styled.button`
//  padding: 8px;
//`;

function HeroSection({dropComing}) {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  const mint = (uri) => {
    blockchain.smartContract.methods
    .claim(blockchain.account, uri)
    .send({ from: blockchain.account, value: Web3.utils.toWei('30', 'finney') })
    .once("error", (err) => {
      console.log(err);
      // setLoading(false);
      // setStatus("Error");
    })
    .then((receipt) => {
      console.log(receipt);
      // setLoading(false);
      // clearCanvas();
      // dispatch(fetchData(blockchain.account));
      // setStatus("Successfully minting your NFT");
    });
  };

  // Should remove this and add a mint button
  useEffect(() => {
    //console.log('hola');
    dispatch(connect());

    //return function is called whenever the function is cleaned up
  }, []);

  return (
    <LavaBackground>
      {/*<StyledButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
        }}
      >*/}
      Hello BLOCKCHAIN Me
      </StyledButton>
      <TopLeftText>LAVA LAMPS</TopLeftText>
      <Title>7,979 LAVA LAMPS</Title>
      <SubTitle>BRINGING NOSTALGIA TO THE BLOCKCHAIN!</SubTitle>
      <MintDetails>{dropComing ? 'DROP COMING SOON!' : ''}</MintDetails>
      <MintButton mint={mint} />
      <MintDetails>max of 20. minted at .03 ETH</MintDetails>
      <SocialMediaLinks />
    </LavaBackground>
  );
}

export default HeroSection;
