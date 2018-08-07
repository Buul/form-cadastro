import axios from 'axios';
import * as actions from '../actions';
import { API } from '../constants';

const util = store => next => action => {
  next(action);
  switch (action.type) {
    case 'GET_ORGAO_EMISS':
      axios({
        url: `${API}/orgaoEmissor`,
        method: 'get',
      }).then(
        (res) => {
          next(actions.receiveOrgaoEmiss(res.data));
        },
        (err) => {
          next(actions.receiveOrgaoEmissError(err));
        }
      );
      break;
    default:
      break;
  }
};

export default util;
