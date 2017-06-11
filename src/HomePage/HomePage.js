/**
 * Created by rob on 6/10/2017.
 */
import React, { Component } from 'react';
import '../App/App.css';
import Info from '../InfoComp/Info';
import SearchForm from '../SearchComp/SearchForm';

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
