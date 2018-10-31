import axios from 'axios';
import _ from 'lodash';
import url from './url';

export async function fetchData(page = 0) {
  try {
    const response = await axios.get(url(page));
    const { data } = response;
    if (!_.isEmpty(data) && data.status === 'OK' && !_.isEmpty(data.response) && !_.isEmpty(data.response.docs)) {
      return {
        docs: data.response.docs,
        error: false,
        isFinish: false,
      };
    }
    return {
      docs: [],
      error: false,
      isFinish: true,
    };
  } catch (error) {
    return {
      docs: [],
      error: true,
      isFinish: false,
    };
  }
}
