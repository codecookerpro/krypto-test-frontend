export const INITIAL_MAIN_STATE = Object.freeze({
  tokens: {},
});

export const setTokensUpdater = (state: ITokenState, payload: any): ITokenState => ({
  ...state,
  tokens: payload.tokens || {},
});