import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.array
};

export default App;
