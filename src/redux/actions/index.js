import fetchCoins from '../../services/fetchAPI';

// Coloque aqui suas actions
export const GET_USER = 'GET_USER';
export const GET_WALLET = 'GET_WALLET';
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
// export const RECEIVE_API = 'RECEIVE_API';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const getUser = (payload) => ({ type: GET_USER, payload });
export const getWallet = (payload) => ({ type: GET_WALLET, payload });
export const requestExpenses = (payload) => ({ type: REQUEST_EXPENSES, payload });
// export const receiveAPI = (payload) => ({ type: RECEIVE_API, payload });
export const removeItem = (payload) => ({ type: REMOVE_ITEM, payload });

export const fetchAPICoins = () => async (dispatch) => {
  const responseAPI = await fetchCoins();
  const responseObj = Object.keys(responseAPI);
  const arrayFiltrado = responseObj.filter((name) => name !== 'USDT');
  dispatch(getWallet(arrayFiltrado));
};

// export const pegaExpenses = () => async (dispatch) => {
//   const responseAPI = await fetchAPI();
//   const responseObj = Object.entries(responseAPI);
//   dispatch(requestExpenses(responseObj));
// };
