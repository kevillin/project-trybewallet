// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function getWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_WALLET':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'REQUEST_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}
