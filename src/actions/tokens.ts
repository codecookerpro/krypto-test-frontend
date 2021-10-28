import { ThunkAction } from 'redux-thunk'
import * as ActionTypes from '../utils/action-types';
import * as API from '../services/tokens';

export const setTokens = (tokens: ITokens) => {
  return {
    type: ActionTypes.SET_TOKENS,
    tokens
  };
};

export const readTokens = (): ThunkAction<void, RootState, unknown, TokenReadAction> => {
  return async (dispatch) => {
    try {
      const res = await API.readTokens();
      return dispatch(setTokens(res.data.tokens));
    } catch (e) { 
      console.log(e);
    }
  };
};
