import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.eventsNumber')).toHaveLength(1);
  });

  test('renders number input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.eventsNumber').prop('value')).toBe(
      numberOfEvents
    );
  });

  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: '32',
    });
    const eventsNumber = { target: { value: '10' } };
    NumberOfEventsWrapper.find('.eventsNumber').simulate(
      'change',
      eventsNumber
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('10');
  });
});
