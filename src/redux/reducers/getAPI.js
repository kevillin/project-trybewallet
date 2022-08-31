import { REQUEST_API, RECEIVE_API, FAILURE_API } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  error: '',
};

export default function getAPI(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case RECEIVE_API:
    return {
      ...state,
      currencies: action.payload,
    };
  case FAILURE_API:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
}
