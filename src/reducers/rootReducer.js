/**
 * Created by rob on 6/11/2017.
 */
import {combineReducers} from 'redux';
import searchForm from './searchFormReducer';

const rootReducer = combineReducers({
    searchForm
});

export default rootReducer;