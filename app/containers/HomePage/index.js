import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { fetchData, toggleModal } from './actions';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

// const mapDispatchToProps = (dispatch) => ({
// });

const mapStateToProps = (store) => ({
  page: store.home.page,
  data: store.home.data,
  showMobal: store.home.showMobal,
  isLoading: store.home.isLoading,
  detailIndex: store.home.detailIndex,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchData: (page) => dispatch(fetchData(page)),
  toggleModal: (index) => dispatch(toggleModal(index))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(HomePage);
