import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../redux/blockchain/blockchainActions';
import { fetchMetadata } from '../../redux/metadata/metadataActions';
import {
  LavaBackground,
  Title,
  SubTitle,
  MintDetails,
  SocialContainer,
} from './Elements';
import NavBar from './NavBar';
import MintButton from '../MintButton';
import MyLavaLampsCarousel from '../MyLavaLampsCarousel';
import LavaLampCarousel from '../LavaLampCarousel';
import SocialMediaLinks from '../SocialMediaLinks';
import DropTimer from './DropTimer';
import Web3 from 'web3';
import {STATES} from '../../constants';

const releaseDate = new Date(2022, 0, 15, 0, 0, 0, 0);
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

function decimalMultiply ( val1, val2 ) {
    return ((val1 * 10) * (val2 * 10)) / 100;
}

function HeroSection({toggleModal}) {
  const initialTimeDiff = (releaseDate - new Date()) / 1000;
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const metadata = useSelector((state) => state.metadata);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [NFTS, setNFTS] = useState([]);
  const [dropComing, setDropComing] = useState(initialTimeDiff > 0 ? true : false);
  const [dropTime, setDropTime] = useState(getTimeDiff);
  const [lampCount, setLampCount] = useState(1);
  const [lampPrice, setLampPrice] = useState(0.03);

  const updateDropTimer = () => {
    const time = getTimeDiff();

    if (time.secondsDiff > 0) {
      setDropTime(time);
    } else {
      setDropComing(false);
   }
  };

  const mint = () => {
    blockchain.smartContract.methods
    .claim(lampCount)
    .send({ from: blockchain.account, value: Web3.utils.toWei((lampCount * 30).toString(), 'finney') })
    .once("error", (err) => {
      console.log(err);
      setLoading(false);
      setStatus("Error");
    })
    .then((receipt) => {
      console.log(receipt);
      setLoading(false);
      dispatch(fetchMetadata(blockchain.account));
      setStatus("Successfully minting your NFT");
    });
  };

  useInterval(() => updateDropTimer(), 1000);

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchMetadata(blockchain.account));
    }
  }, [blockchain.smartContract, blockchain.account, dispatch]);

  /*useEffect(() => {
    //fetchMetatDataForNFTS();
  }, [metadata.allMetadata]);*/

  return (
    <LavaBackground dropComing={dropComing}>
      <NavBar
        blockchainAccount={blockchain.account}
        connectWallet={() => dispatch(connect())}
        openLavaList={() => toggleModal({state: STATES.modal.lavaList})}
      />
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
        </> : <></>
        /*<MintButton
          lampCount={lampCount}
          lampPrice={lampPrice}
          mint={() => {blockchain.account ? mint() : window.alert('Please connect wallet to blockchain and join the lavagang!!!! :D')}}
          incrementLampCount={
            () => {
              const lc = lampCount < 20 ? lampCount + 1 : lampCount;
              setLampCount(lc);
              setLampPrice(decimalMultiply(lc, .03));
            }
          }
          decrementLampCount={
            () => {
              const lc = lampCount > 1 ? lampCount - 1 : lampCount;
              setLampCount(lc);
              setLampPrice(decimalMultiply(lc, .03));
            }
          }
        />*/
      }
      <MintDetails>max of 20. minted at .03 ETH</MintDetails>
      <SocialContainer>
        <SocialMediaLinks />
      </SocialContainer>
      {metadata.allMetadata.length > 0 ?
        <MyLavaLampsCarousel metadata={metadata.allMetadata} /> :
        <LavaLampCarousel />
      }
    </LavaBackground>
  );
}

export default HeroSection;
