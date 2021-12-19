import store from "../store";
import {
  CHECK_METADATA_REQUEST,
  CHECK_METADATA_SUCCESS,
  CHECK_METADATA_FAILED,
} from '../types';

const fetchMetadataRequest = () => {
  return {
    type: CHECK_METADATA_REQUEST,
  };
};

const fetchMetadataSuccess = (payload) => {
  return {
    type: CHECK_METADATA_SUCCESS,
    payload: payload,
  };
};

const fetchMetadataFailed = (payload) => {
  return {
    type: CHECK_METADATA_FAILED,
    payload: payload,
  };
};

export const fetchMetadata = (account) => {
  return async (dispatch) => {
    dispatch(fetchMetadataRequest());
    try {
      let allMetadata = await store
        .getState()
        .blockchain.smartContract.methods.getTokensOwnedByMetadata(account)
        .call();

      dispatch(
        fetchMetadataSuccess({
          allMetadata,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchMetadataFailed("Could not load data from contract."));
    }
  };
};
