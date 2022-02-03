import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
  };

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title-text">Meet App</h1>
        <div>
          <p className="description-text">Choose your nearest city:</p>
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <p className="description-text">Number of events:</p>
          <NumberOfEvents />
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}
export default App;
