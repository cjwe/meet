import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import NumberOfEvents from '../NumberOfEvents';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 is the default number', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user does not specify number of events', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
      AppWrapper.update();
    });

    then('the user should see 32 events by default', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user has searched for events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specifies the number of events to see', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      const eventsNumber = { target: { value: 10 } };
      NumberOfEventsWrapper.find('input').simulate('change', eventsNumber);
    });

    then('the user should see the specified number of events', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(10);
    });
  });
});
