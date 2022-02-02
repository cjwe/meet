import React, { Component } from 'react';

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="startTime">
          {' '}
          {event.dateTime} <span className="timeZone"> ({event.timeZone})</span>
        </p>
        <p className="location">
          @{event.summary} | {event.location}
        </p>
        if(collapsed === true)
        {
          <button className="show-details" onClick={this.handleClick}>
            Show details
          </button>
        }
        else
        {
          <div className="details-view">
            <h4 className="details-header"> About event:</h4>
            <a className="htmlLink" href={event.htmlLink}>
              See details on Google Calendar
            </a>
            <p className="description">{event.description}</p>
            <button className="hide-details" onClick={this.handleClick}>
              Hide details
            </button>
          </div>
        }
      </div>
    );
  }
}
export default Event;
