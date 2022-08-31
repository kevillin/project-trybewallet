const INITIAL_STATE = {
  currencies: [],
};

export default function getAPI(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_API':
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
}
