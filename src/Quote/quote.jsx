import React from 'react';
import './quote.scss';

export default class Quote extends React.Component {
    render() {
        return (
          <>
            <div className="quote">
                <div className="user">User: {this.props.user}</div>
                <div className="text">Text: {this.props.text}</div>
                <div className="rating">Rating: {this.props.rating}</div>
            </div>
            <br/>
          </>
        );
    }
}