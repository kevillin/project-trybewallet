import fetchAPI from '../../services/fetchAPI';

// Coloque aqui suas actions
export const GET_USER = 'GET_USER';
export const GET_WALLET = 'GET_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
export const FAILURE_API = 'FAILURE_API';

export const getUser = (payload) => ({ type: GET_USER, payload });
export const getWallet = (payload) => ({ type: GET_WALLET, payload });
export const requestAPI = () => ({ type: REQUEST_API });
export const receiveAPI = (payload) => ({ type: RECEIVE_API, payload });
export const failureAPI = (error) => ({ type: FAILURE_API, error });

export const fetchAPICoins = () => async (dispatch) => {
  dispatch(requestAPI());

  try {
    const responseAPI = await fetchAPI();
    const responseObj = Object.keys(responseAPI);
    const arrayFiltrado = responseObj.filter((name) => name !== 'USDT');
    dispatch(getWallet(arrayFiltrado));
  } catch (error) {
    dispatch(failureAPI(error));
  }
};
