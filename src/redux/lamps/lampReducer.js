import {
  CHECK_LAMP_REQUEST,
  CHECK_LAMP_SUCCESS,
  CHECK_LAMP_FAILED,
} from '../types';

const initialState = {
  loading: false,
  myLamps: [],
  remainingLamps: 0,
  //lampsBurned: 0,
  //lampsMinted: 0,
  //ethPerShare: 0,
  error: false,
  errorMsg: "",
};

const lampReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LAMP_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case CHECK_LAMP_SUCCESS:
      return {
        ...initialState,
        loading: false,
        myLamps: action.payload.myLamps,
        remainingLamps: action.payload.remainingLamps,
        //lampsBurned: action.payload.lampsBurned,
        //lampsMinted: action.payload.lampsMinted,
        //ethPerShare: action.payload.ethPerShare,
      };
    case CHECK_LAMP_FAILED:
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default lampReducer;
