import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact path='/' component={HomePage}/>
            <Route path='/contact' component={ContactPage}/>
        </App>
    </BrowserRouter>,
        document.getElementById('root')
        );
