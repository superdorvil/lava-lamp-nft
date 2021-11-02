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
import MintButton from './MintButton';
import SocialMediaLinks from './SocialMediaLinks';
import DropTimer from './DropTimer';
import Web3 from 'web3';
import styled from "styled-components";

const releaseDate = new Date(2021, 10, 2, 0, 0, 0, 0);
const getTimeDiff = () => {
  const secondsDiff = (releaseDate - new Date()) / 1000;

  const days = Math.floor(secondsDiff / 86400);
  const hours = Math.floor((secondsDiff % 86400) / 3600);
  const minutes = Math.floor((secondsDiff % 3600) / 60);
  const seconds = Math.floor((secondsDiff % 3600) % 60);

  return {days, hours, minutes, seconds, secondsDiff};
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function HeroSection() {
  const initialTimeDiff = (releaseDate - new Date()) / 1000;
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [dropComing, setDropComing] = useState(initialTimeDiff > 0 ? true : false);
  const [dropTime, setDropTime] = useState(getTimeDiff);
  const [lampCount, setLampCount] = useState(1);
  const lampPrice = Web3.utils.toWei('30', 'finney');

  const updateDropTimer = () => {
    const time = getTimeDiff();

    if (time.secondsDiff > 0) {
      setDropTime(time);
    } else {
      setDropComing(false);
   }
  };

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

  useInterval(() => updateDropTimer(), 1000);

  return (
    <LavaBackground>
      <TopLeftText>LAVA LAMPS</TopLeftText>
      <Title>7,979 LAVA LAMPS</Title>
      <SubTitle>BRINGING NOSTALGIA TO THE BLOCKCHAIN!</SubTitle>
      {dropComing ?
        <>
          <MintDetails>DROP COMING SOON!</MintDetails>
          <DropTimer
            days={dropTime.days}
            hours={dropTime.hours}
            minutes={dropTime.minutes}
            seconds={dropTime.seconds}
          />
        </> :
        <MintButton />
      }
      <MintDetails>max of 20. minted at .03 ETH</MintDetails>
      <SocialMediaLinks />
    </LavaBackground>
  );
}

export default HeroSection;
