
import homeReducer from '../reducer';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      page: 0,
      data: [],
      isLoading: true,
      showMobal: false,
      detailIndex: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });
});
