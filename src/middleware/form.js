import axios from 'axios';
import * as actions from '../actions';
import { API } from '../constants';

const form = store => next => action => {
  next(action);
  switch (action.type) {
    case 'POST_FORM':
      axios({
        url: `${API}/`,
        data: action.data,
        method: 'post',
      }).then(
        (res) => {
          next(actions.addSuccess(res.data));
        },
        (err) => {
          next(actions.addError(err));
        }
      );
      break;
    default:
      break;
  }
};

export default form;
