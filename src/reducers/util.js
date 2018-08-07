const initialState = {
  orgaoEmiss: [],
};

const util = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_ORGAO_EMISS':
      return { ...state, orgaoEmiss: action.orgaoEmiss }
    case 'RECEIVE_ORGAO_EMISS_ERROR':
      return { ...state, orgaoEmiss: action.orgaoEmiss }
    default:
      return state;
  }
};

export default util;
