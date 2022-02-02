import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title-text">Meet App</h1>
        <p className="description-text">Choose your nearest city:</p>
        <CitySearch />
        <p className="description-text">Number of events:</p>
        <NumberOfEvents />
        <EventList />
      </div>
    );
  }
}
export default App;
