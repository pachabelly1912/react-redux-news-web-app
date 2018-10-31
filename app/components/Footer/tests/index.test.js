import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render my name', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <a>Tran Dinh Nguyen Kha</a>
      )
    ).toBe(true);
  });
});
