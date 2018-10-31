import { createAction } from 'redux-actions';

export const fetchData = createAction('FETCH_DATA');
export const toggleLoading = createAction('TOGGLE_LOADING');
export const receivedData = createAction('RECEIVED_DATA');
export const toggleModal = createAction('TOGGLE_MODAL');
