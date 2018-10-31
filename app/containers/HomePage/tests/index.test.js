/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingIndicator from 'components/LoadingIndicator';
import InfiniteScroll from 'react-infinite-scroller';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { fetchData } from '../actions';

describe('<HomePage />', () => {
  it('should render Indicator', () => {
    const renderedComponent = shallow(<HomePage data={[]} isLoading />);
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });

  it('should render InfiniteScroll', () => {
    const renderedComponent = shallow(
      <HomePage
        data={[
          {
            multimedia:
              'https://www.nytimes.com/images/2018/11/04/travel/04Hours-Singapore5/merlin_143821452_ed4b5ea3-b52c-496a-9a16-3c225ef111c0-windowsTile336H.jpg',
            pubDate: '2018-10-25T09:00:09+0000',
            snippet:
              'Yes, there are futuristic mega malls and skyscrapers. But you’ll also find a rich cultural heritage reflected in traditional temples and shrines, street food and homegrown art.',
            source: 'The New York Times'
          }
        ]}
        isLoading={false}
        fetchData={() => {}}
        page={0}
        shallow={false}
        toggleModal={() => {}}
      />
    );
    expect(renderedComponent.contains(<InfiniteScroll />)).toEqual(true);
  });

  it('should dispatch function to get data', () => {
    const submitSpy = jest.fn();
    mount(<HomePage data={[]} fetchData={submitSpy} loading />);
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onFetchData', () => {
      it('fetchData should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.fetchData).toBeDefined();
      });

      it('toggleModal should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.toggleModal).toBeDefined();
      });

      it('should dispatch fetchData when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.fetchData(0);
        expect(dispatch).toHaveBeenCalledWith(fetchData(0));
      });
    });
  });
});
