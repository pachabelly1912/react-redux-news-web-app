import { takeLatest, put } from 'redux-saga/effects';
import _ from 'lodash';
import { fetchData } from 'api';
import * as actions from './actions';

export function* onFetchData(action) {
  const result = yield fetchData(action.payload);
  const { docs } = result;
  if (action.payload === 0) {
    yield put({
      type: actions.toggleLoading.toString(),
      payload: true,
    });
  }
  if (!_.isEmpty(docs)) {
    const news = docs.filter((item) => !_.isEmpty(item.uri));
    const data = news.map((item) => {
      const multimedia = item.multimedia.find(
        (media) => media.subtype === 'windowsTile336H'
      );
      return {
        snippet: item.snippet,
        source: item.source,
        multimedia: _.isEmpty(multimedia) ? '' : `https://www.nytimes.com/${multimedia.url}`,
        pubDate: item.pub_date
      };
    });
    yield put({
      type: actions.receivedData.toString(),
      payload: {
        data,
        page: action.payload + 1,
      }
    });
  }
  yield put({
    type: actions.toggleLoading.toString(),
    payload: false,
  });
}

export default function* watchFetchData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.fetchData.toString(), onFetchData);
}
