import React from 'react';
import { DateTime } from 'luxon';
import './flight.scss';

export default class Flight extends React.Component {

    render() {
        return (
          <>
            <div className="flight">
                <div className="cityFrom">From: {this.props.cityFrom}</div>
                <div className="flyFrom">Airport Code: {this.props.flyFrom}</div>
                <div className="cityTo">To: {this.props.cityTo}</div>
                <div className="flyTo">Airport Code: {this.props.flyTo}</div>
                <div className="price">Price: {this.props.price}</div>
                <div className="dTime">Departure Time: {DateTime.fromMillis(this.props.dTime * 1000).toFormat('hh:mm')}</div>
                <div className="aTime">Arrival time: {DateTime.fromMillis(this.props.aTime * 1000).toFormat('hh:mm')}</div>
            </div>
            <br/>
          </>
        );
    }
}