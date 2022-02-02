import React from 'react';
import { shallow } from 'enzyme';

import Event from '../Event';

import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />);
  });

  // Event Details Tests
  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event summary(name)', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render event start time', () => {
    expect(EventWrapper.find('.startTime')).toHaveLength(1);
  });

  test('render event time zone', () => {
    expect(EventWrapper.find('.timeZone')).toHaveLength(1);
  });

  test('render event location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render event link', () => {
    expect(EventWrapper.find('.htmlLink')).toHaveLength(1);
  });

  test('render event description', () => {
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  //Collapse & Button tests
  test('render show details button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('clicking show-details button shows event details', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('render hide details button', () => {
    expect(EventWrapper.find('.hide-details')).toHaveLength(1);
  });

  test('clicking hide-details button hides event details', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});
