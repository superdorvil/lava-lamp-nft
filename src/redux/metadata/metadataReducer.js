import {
  CHECK_METADATA_REQUEST,
  CHECK_METADATA_SUCCESS,
  CHECK_METADATA_FAILED,
} from '../types';

const initialState = {
  loading: false,
  allMetadata: [],
  error: false,
  errorMsg: "",
};

const metadataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_METADATA_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case CHECK_METADATA_SUCCESS:
      return {
        ...initialState,
        loading: false,
        allMetadata: action.payload.allMetadata,
      };
    case CHECK_METADATA_FAILED:
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

export default metadataReducer;
