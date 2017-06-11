/**
 * Created by rob on 6/10/2017.
 */
import React, { Component } from 'react';
import './App.css';
import Info from './Info';
import SearchForm from './SearchForm';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <SearchForm />
                <Info />
            </div>
        );
    }
}

export default HomePage;
