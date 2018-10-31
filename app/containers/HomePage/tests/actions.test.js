
import { fetchData, receivedData } from '../actions';

describe('Home Actions', () => {
  describe('fetchData', () => {
    it('should return the correct type and the passed page', () => {
      const expectedResult = {
        type: 'FETCH_DATA',
        payload: function next() {}
      };

      expect(fetchData(1)).toEqual(expectedResult);
    });
  });
});

describe('Home Actions', () => {
  describe('toggle loading', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = {
        type: 'TOGGLE_LOADING',
      };

      expect(receivedData()).toEqual(expectedResult);
    });
  });
});
