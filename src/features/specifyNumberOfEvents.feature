Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user is on the main page
    When the user does not specify number of events
    Then the user should see 32 events by default

  Scenario: User can change the number of events they want to see
    Given the user has searched for events
    When the user specifies the number of events to see
    Then the user should see the specified number of events