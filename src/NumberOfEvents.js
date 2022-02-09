import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: '32',
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    this.setState({
      numberOfEvents: number,
    });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          min={1}
          className="eventsNumber"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
