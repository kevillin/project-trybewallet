// Coloque aqui suas actions
export const GET_USER = 'GET_USER';
export const GET_WALLET = 'GET_WALLET';
export const GET_API = 'GET_API';

export const getUser = (payload) => ({ type: GET_USER, payload });
export const getWallet = (payload) => ({ type: GET_WALLET, payload });
export const getAPI = (payload) => ({ type: GET_API, payload });

export const fetchCoins = () => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const requestJson = await request.json();
  const arrayValues = Object.entries(requestJson);
  console.log(arrayValues);
  dispatch(getAPI(arrayValues));
};
