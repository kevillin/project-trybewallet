// Coloque aqui suas actions
export const GET_USER = 'GET_USER';
export const GET_WALLET = 'GET_WALLET';

export const getUser = (payload) => ({ type: GET_USER, payload });
export const getWallet = (payload) => ({ type: GET_WALLET, payload });
