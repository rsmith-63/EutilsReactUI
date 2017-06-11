/**
 * Created by rob on 6/11/2017.
 */
import initialState from './initialState';
import {FETCH_DBLIST, RECEIVE_DBLIST} from '../actions/actionTypes';

export default function dbList(state = initialState.dbList, action) {
    let newState;
    switch (action.type) {
        case FETCH_DBLIST:
            console.log('FETCH_DBLIST Action');
            return action;
        case RECEIVE_DBLIST:
            newState = Object.assign({}, state);
            newState = action.dbList;
            console.log('RECEIVE_DBLIST Action');
            return newState;
        default:
            return state;
    }
}