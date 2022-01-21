import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../redux/blockchain/blockchainActions';
import { fetchLamps } from '../../redux/lamps/lampActions';
import {
  LavaBackground,
  Title,
  SubTitle,
  MintDetails,
  SocialContainer,
} from './Elements';
import NavBar from './NavBar';
import MintButton from '../MintButton';
import LavaLampCarousel from '../LavaLampCarousel';
import SocialMediaLinks from '../SocialMediaLinks';
import Presale from './Presale';
import DropTimer from './DropTimer';
import Web3 from 'web3';
import {STATES} from '../../constants';
import WhiteList from './WhiteList';

//const releaseDate = new Date(2022, 0, 28, 20, 0, 0, 0);
//const whitelistDate = new Date(2022, 0, 28, 19, 0, 0, 0);
const releaseDate = new Date(2022, 0, 20, 12, 0, 0, 0);
const whitelistDate = new Date(2022, 0, 20, 12, 0, 0, 0);
let saleMode = STATES.drop.dropComingSoon;

const getTimeDiff = () => {
  const secondsDiff = (whitelistDate - new Date()) / 1000;
  const publicSaleSecondsDiff = (releaseDate - new Date()) / 1000;
  if (((releaseDate - new Date()) / 1000) < 0) {
    saleMode = STATES.drop.publicSale;
  } else if (((whitelistDate - new Date()) / 1000) < 0) {
    saleMode = STATES.drop.whitelistSale;
  }

  const days = Math.floor(secondsDiff / 86400);
  const hours = Math.floor((secondsDiff % 86400) / 3600);
  const minutes = Math.floor((secondsDiff % 3600) / 60);
  const seconds = Math.floor((secondsDiff % 3600) % 60);
  const publicSaleMinutes = Math.floor((publicSaleSecondsDiff % 3600) / 60);
  const publicSaleSeconds = Math.floor((publicSaleSecondsDiff % 3600) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
    secondsDiff,
    publicSaleSecondsDiff,
    publicSaleSeconds,
    publicSaleMinutes,
  };
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
  const initialTimeDiff = (whitelistDate - new Date()) / 1000;
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  //const [loading, setLoading] = useState(false);
  //const [status, setStatus] = useState("");
  const [dropComing, setDropComing] = useState(initialTimeDiff > 0 ? true : false);
  const [dropTime, setDropTime] = useState(getTimeDiff);
  const [lampCount, setLampCount] = useState(1);
  const [lampPrice, setLampPrice] = useState(0.03);

  const updateDropTimer = () => {
    const time = getTimeDiff();

    if (time.publicSaleSecondsDiff > 0) {
      setDropTime(time);
    } else {
      setDropComing(false);
   }
  };

  const mint = () => {
    let whitelisted = false;
    if (saleMode === STATES.drop.whitelistSale) {
      WhiteList.forEach((account, i) => {
        if (account === blockchain.account) {
          whitelisted = true;
        }
      });
    }

    if (saleMode === STATES.drop.whitelistSale) {
      if (!whitelisted) {
        window.alert('Whitelist lavagang members only, public sale opens in less than an hour!!! :D');
        return;
      }
    }

    blockchain.smartContract.methods
    .mint(lampCount)
    .send({ from: blockchain.account, value: Web3.utils.toWei((lampCount * 30).toString(), 'finney') })
    .once("error", (err) => {
      console.log(err);
      //setLoading(false);
      //setStatus("Error");
    })
    .then((receipt) => {
      console.log(receipt);
      //setLoading(false);
      dispatch(fetchLamps(blockchain.account));
      //setStatus("Successfully minting your NFT");
    });
  };

  useInterval(() => updateDropTimer(), 1000);

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchLamps(blockchain.account));
    }
  }, [blockchain.smartContract, blockchain.account, dispatch]);

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
        </> :
        <MintButton
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
        />
      }
      <MintDetails>max of 20. minted at .03 ETH</MintDetails>
      <SocialContainer>
        <SocialMediaLinks />
      </SocialContainer>
      <LavaLampCarousel />
      <Presale
        visible={saleMode === STATES.drop.whitelistSale}
        minutes={dropTime.publicSaleMinutes}
        seconds={dropTime.publicSaleSeconds}
      />
    </LavaBackground>
  );
}

export default HeroSection;
