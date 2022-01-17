import store from "../store";
import {
  CHECK_LAMP_REQUEST,
  CHECK_LAMP_SUCCESS,
  CHECK_LAMP_FAILED,
} from '../types';

const fetchLampRequest = () => {
  return {
    type: CHECK_LAMP_REQUEST,
  };
};

const fetchLampSuccess = (payload) => {
  return {
    type: CHECK_LAMP_SUCCESS,
    payload: payload,
  };
};

const fetchLampFailed = (payload) => {
  return {
    type: CHECK_LAMP_FAILED,
    payload: payload,
  };
};

export const fetchLamps = (account) => {
  console.log(account)
  return async (dispatch) => {
    dispatch(fetchLampRequest());
    try {
      const myLamps = await store
        .getState()
        .blockchain.smartContract.methods.getTokensOwnedBy(account)
        .call();
      const burnCount = await store
        .getState()
        .blockchain.smartContract.methods.burnCount()
        .call();
      const remainingLamps = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      // need to figure out
      const ethPerShare = 0;

      dispatch(
        fetchLampSuccess({
          myLamps,
          burnCount,
          remainingLamps,
          ethPerShare,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchLampFailed("Could not load data from contract."));
    }
  };
};
