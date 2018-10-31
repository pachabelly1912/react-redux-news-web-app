import { toggleLoading, receivedData, toggleModal } from './actions';

const initialState = {
  page: 0,
  data: [],
  isLoading: true,
  showMobal: false,
  detailIndex: null,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case toggleLoading.toString():
      return {
        ...state,
        isLoading: action.payload,
      };
    case toggleModal.toString():
      return {
        ...state,
        showMobal: !state.showMobal,
        detailIndex: !state.showMobal ? action.payload : null
      };
    case receivedData.toString():
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        page: action.payload.page,
      };
    default:
      return state;
  }
}

export default homeReducer;
