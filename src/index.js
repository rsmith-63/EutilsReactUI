import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App/App';
import configureStore from './store/configureStore';
import HomePage from './HomePage/HomePage';
import ContactPage from './ContactPage/ContactPage';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App>
            <Route exact path='/' component={HomePage}/>
            <Route path='/contact' component={ContactPage}/>
        </App>
    </BrowserRouter>
    </Provider>,
        document.getElementById('root')
        );
