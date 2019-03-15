import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './Quote/quote.jsx'
import './index.scss';
import './index.html';

class App extends React.Component {
    state = {
        quotes: [],
    }

    componentDidMount() {
        fetch('http://bootcamp.podlomar.org/api/quotes')
          .then(r => r.json())
          .then(json => this.setState({quotes: json}));
    }

    render() {
        return (
            <div className="container">
                <h1>Hello World</h1>
                { this.state.quotes.map(quote => <Quote {...quote} />) }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
