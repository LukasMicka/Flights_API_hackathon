import React from 'react';
import ReactDOM from 'react-dom';
import Flight from './Flight/flight.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
    state = {
        flights: [],
        isLoading: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=16/03/2019&dateTo=17/03/2019&limit=5&partner=picky')
          .then(r => r.json())
          .then(json => this.setState({flights: json.data, isLoading: false}))
    }

    render() {
        const { flights, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="container">
                <h1>Flights</h1>
            { this.state.flights.map((flight, index) => <Flight key={index} {...flight} />) }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
