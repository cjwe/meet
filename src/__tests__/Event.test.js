import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';

import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />);
  });

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event summary(name)', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render event start time', () => {
    expect(EventWrapper.find('.startTime')).toHaveLength(1);
  });
});
