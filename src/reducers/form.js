const initialState = {
  orgaoEmiss: [],
  dataResponse: false,
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUCCESS':
      return { ...state, dataResponse: true }
    case 'ADD_ERROR':
      return { ...state, dataResponse: true }
    case 'ADD_RESET':
      return { ...state, dataResponse: action.data }
    default:
      return state;
  }
};

export default form;
