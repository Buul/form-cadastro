import { applyMiddleware } from 'redux';
import util from './util';
import form from './form';

export default applyMiddleware(util, form);