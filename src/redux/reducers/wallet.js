// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
};

export default function getWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_WALLET':
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
}
