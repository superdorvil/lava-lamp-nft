import {
  CONNECTION_REQUEST,
  CONNECTION_SUCCESS,
  CONNECTION_FAILED,
  UPDATE_ACCOUNT,
} from '../types';

const initialState = {
  loading: false,
  account: null,
  smartContract: null,
  web3: null,
  errorMsg: '',
};

const blockchainReducer = (state = initialState, action) => {
  //console.log('reducer type = ' + action.type);
  switch (action.type) {
    case CONNECTION_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case CONNECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        smartContract: action.payload.smartContract,
        web3: action.payload.web3,
      };
    case CONNECTION_FAILED:
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case UPDATE_ACCOUNT:
      console.log(action.payload.account);
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
