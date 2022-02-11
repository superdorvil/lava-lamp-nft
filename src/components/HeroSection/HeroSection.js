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
  DataBlockContainer,
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
import DataBlock from '../DataBlock';
import {COLORS} from '../../constants';

function decimalMultiply ( val1, val2 ) {
  return ((val1 * 10) * (val2 * 10)) / 100;
}

function HeroSection({toggleModal}) {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const lamps = useSelector((state) => state.lamps);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [lampCount, setLampCount] = useState(1);
  const [lampPrice, setLampPrice] = useState(0.03);

  const mint = () => {
    console.log('mint');
    if (lamps.lampsMinted === 7980) {
      window.alert('All LavaLamps have been minted, join our discord to learn about future projects');
      return;
    }

    console.log(blockchain.smartContract.methods);

/*    blockchain.smartContract.methods
    .mint(lampCount)
    .send({
      from: blockchain.account,
      value: Web3.utils.toWei((lampCount * 30).toString(), 'finney')
    })
    .once("error", (err) => {
      console.log(err);
    })
    .then((receipt) => {
      console.log(receipt);
      //setLoading(false);
      dispatch(fetchLamps(blockchain.account));
      //setStatus("Successfully minting your NFT");
    });*/
  };

  const incrementLampCount = () => {
    const lampsLeft = 7980 - lamps.lampsMinted;
    const maxMintAmount = lampsLeft < 20 ? lampsLeft : 20;
    const lc = lampCount < maxMintAmount ? lampCount + 1 : lampCount;
    setLampCount(lc);
    setLampPrice(decimalMultiply(lc, .03));
  }

  const decrementLampCount = () => {
    const lc = lampCount > 1 ? lampCount - 1 : lampCount;
    setLampCount(lc);
    setLampPrice(decimalMultiply(lc, .03));
  }

//  useInterval(() => updateDropTimer(), 1000);

  useEffect(() => {
    console.log(blockchain);
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchLamps(blockchain.account));
    }
  }, [blockchain.smartContract, blockchain.account, dispatch]);

  return (
    <LavaBackground dropComing={false}>
      <NavBar
        blockchainAccount={blockchain.account}
        connectWallet={
          () => {
            dispatch(connect());
            setLampCount(1);
            setLampPrice(decimalMultiply(1, .03));
          }
        }
        openLavaList={() => toggleModal({state: STATES.modal.lavaList})}
      />
      <Title>7,979 LAVA LAMPS</Title>
      <SubTitle>BRINGING NOSTALGIA TO THE BLOCKCHAIN!</SubTitle>
            {/*false ?
        {<>
          <MintDetails>DROP COMING SOON!</MintDetails>
          <DropTimer
            days={dropTime.days}
            hours={dropTime.hours}
            minutes={dropTime.minutes}
            seconds={dropTime.seconds}
          />
        </> :*/}
        <MintButton
          lampCount={lampCount}
          lampPrice={lampPrice}
          mint={
            () => {
              if (lamps.lampsMinted === 7980) {
                window.alert('All LavaLamps have been minted, join our discord to learn about future projects');
                return;
              }

              blockchain.account ?
                mint() :
                window.alert('Please connect wallet to blockchain and join the lavagang!!!! :D')
            }
          }
          incrementLampCount={
            () => {
              if (lamps.lampsMinted === 7980) {
                window.alert('All LavaLamps have been minted, join our discord to learn about future projects');
                return;
              }

              blockchain.account ?
                incrementLampCount() :
                window.alert('Please connect wallet to blockchain and join the lavagang!!!! :D')
            }
          }
          decrementLampCount={
            () => {
              if (lamps.lampsMinted === 7980) {
                window.alert('All LavaLamps have been minted, join our discord to learn about future projects');
                return;
              }

              blockchain.account ?
                decrementLampCount() :
                window.alert('Please connect wallet to blockchain and join the lavagang!!!! :D')
            }
          }
        />
      }
      <SocialContainer>
        <SocialMediaLinks />
      </SocialContainer>
      <LavaLampCarousel />
      {/*<Presale
        visible={saleMode === STATES.drop.whitelistSale}
        minutes={dropTime.publicSaleMinutes}
        seconds={dropTime.publicSaleSeconds}
      />*/}
    </LavaBackground>
  );
}

/*<DataBlockContainer>
  <DataBlock
    lightColor={COLORS.light_blue}
    darkColor={COLORS.dark_blue}
    data={lamps.remainingLamps ? 7980 - lamps.remainingLamps : 0}
    units="REMAINING LAMPS"
  />
  {/*<DataBlock
    lightColor={COLORS.light_red}
    darkColor={COLORS.dark_red}
    data="0.03"
    units="ETH PER SHARE"
  />*///}
//</DataBlockContainer>

export default HeroSection;
