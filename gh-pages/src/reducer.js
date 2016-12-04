import { combineReducers } from 'redux';

const appName = (state = null) => state;
const url = (state = null) => state;

export default combineReducers({
  appName,
  url,
});
