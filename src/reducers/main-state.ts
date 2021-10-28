import { handleActions } from 'redux-actions';
import * as ActionTypes from '../utils/action-types';
import * as mainStateUpdaters from './main-state-updaters';

const actionHandler = {
  [ActionTypes.SET_TOKENS]: mainStateUpdaters.setTokensUpdater,
};

export default handleActions<ITokenState, {}>(actionHandler, mainStateUpdaters.INITIAL_MAIN_STATE);
