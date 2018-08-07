export const getOrgaoEmiss = () => ({
  type: 'GET_ORGAO_EMISS',
});

export const receiveOrgaoEmiss = orgaoEmiss => ({
  type: 'RECEIVE_ORGAO_EMISS',
  orgaoEmiss,
});

export const receiveOrgaoEmissError = err => ({
  type: 'RECEIVE_ORGAO_EMISS_ERROR',
  err,
});

export const submitForm = data => ({
  type: 'POST_FORM',
  data,
});

export const addSuccess = dataResponse => ({
  type: 'ADD_SUCCESS',
  dataResponse,
});

export const addError = err => ({
  type: 'ADD_ERROR',
  err,
});

export const submitFormReset = data => ({
  type: 'ADD_RESET',
  data,
});

