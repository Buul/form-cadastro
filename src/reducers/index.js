import { combineReducers } from 'redux';
import util from './util';
import form from './form';

const reducers = combineReducers({
  util,
  form,
});

export default reducers;