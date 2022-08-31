import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import getAPI from './getAPI';

// Configure os seus reducers.
const rootReducer = combineReducers({ user, wallet, getAPI });
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

export default rootReducer;
