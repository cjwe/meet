# Meet App 
Meet App is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. 
Users are able to 
- Filter events by city. 
- Show/hide event details. 
- Specify number of events. 
- Use the app when offline
- Add an app shortcut to the home screen
- And view a chart showing the number of upcoming events by city.

## User Stories
### FEATURE 2: As a user, I should be able to interact with events so that I am able to expand and collapse individual events to view their information.** 

-   Scenario 1: An event element is collapsed by default

**Given** the main page is open

**When** the user has not interacted with the app

**Then** all event elements are collapsed

-   Scenario 2: User can expand an event to see its details

**Given** the user found an event to view

**When** the user clicks on an event 

**Then** the details of the event expand

-   Scenario 3: User can collapse an event to hide its details

**Given** the user finished viewing the event

**When** the user clicks to hide the event 

**Then** the details of the event collapse

### FEATURE 3: As a user, I should be able to specify the number of events displayed so that I can customize the amount of information displayed to me.** 

-   Scenario 1: When user hasn’t specified a number, 32 is the default number

**Given** the user has not specified the number of events

**When** the event page loads

**Then** the default number of 32 events will populate



-   Scenario 2: User can change the number of events they want to see

**Given** the user updated the number of events to display

**When** the event page loads

**Then** the number of events the user specified will populate

### FEATURE 4: As a user, I should be able to access the app offline so that I view saved information when on the go (offline).**

-   Scenario 1: Show cached data when there’s no internet connection

**Given** the user previously used the app 

**When** the user opens the app with no internet

**Then** the app will display cached data

-   Scenario 2: Show error when user changes the settings (city, time range)

**Given** the app loaded with no internet connection

**When** the user attempts to change settings (city, time range)

**Then** an error message is displayed

### FEATURE 5: As a user, I should be able to view data in accessible ways (charts, diagrams) so that I can quickly receive information of interest to me.** 

-   Scenario 1: Show a chart with the number of upcoming events in each city

**Given** the event page for a city was loaded

**When** the user views the upcoming events

**Then** a chart with the upcoming events is displayed
