import Web3 from 'web3';
import LavaLamp from '../../abis/LavaLamp.json';
import {
  CONNECTION_REQUEST,
  CONNECTION_SUCCESS,
  CONNECTION_FAILED,
  UPDATE_ACCOUNT,
} from '../types';

const connectRequest = () => {
  console.log('action connect request');
  return {
    type: CONNECTION_REQUEST,
  };
};

const connectSuccess = (payload) => {
  console.log('action connect success');
  return {
    type: CONNECTION_SUCCESS,
    payload: payload,
  };
};

const connectFailed = (payload) => {
  console.log('action connect failed');
  return {
    type: CONNECTION_FAILED,
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  console.log('action update account req');
  return {
    type: UPDATE_ACCOUNT,
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());

    if (window.ethereum) {
      console.log('window is ether');
      let web3 = new Web3(window.ethereum);

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        console.log(accounts);

        //https://medium.com/metamask/breaking-changes-to-the-metamask-inpage-provider-b4dde069dd0a
        console.log([]);
        if (accounts.length === [].length) {
          console.log('no account');
           window.ethereum.send('eth_requestAccounts');
        } else {
          console.log('hey');
        }

        const networkId = await window.ethereum.request({
          method: 'net_version',
        });
        console.log(networkId);

        const NetworkData = await LavaLamp.networks[networkId];
        console.log(NetworkData);

        if (NetworkData) {
          const SmartContractObj = new web3.eth.Contract(
            LavaLamp.abi,
            NetworkData.address,
          );

          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );

          // Add listeners start
          window.ethereum.on('accountsChanged', (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          window.ethereum.on('chainChanged', () => {
            window.location.reload();
          });
        } else {
          dispatch(connectFailed('Change network to Polygon')); // why polygon
        }
      } catch (err) {
        console.log('error, somthing went wrong ' + err);
        dispatch(connectFailed('Something went wrong.'));
      }
    } else {
      dispatch(connectFailed('Install Metamask.'));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    // dispatch(fetchData(account));
  };
};
