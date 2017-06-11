/**
 * Created by rob on 6/11/2017.
 */
import {combineReducers} from 'redux';
import dbList from './searchFormReducer';

const rootReducer = combineReducers({
    dbList
});

export default rootReducer;