import { combineReducers } from 'redux';
import mainReducer from './main-state';

const reducers = combineReducers({
  main: mainReducer,
});

export default reducers;
