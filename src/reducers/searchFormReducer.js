/**
 * Created by rob on 6/11/2017.
 */
import initialState from './initialState';
import {FETCH_DBLIST, RECEIVE_DBLIST,FETCH_QUERY_RES,RECEIVE_QUERY_RES} from '../actions/actionTypes';

export default function searchForm(state = initialState.searchForm, action) {
    let newState;
    switch (action.type) {
        case FETCH_DBLIST:
            console.log('FETCH_DBLIST Action');
            return action;
        case RECEIVE_DBLIST:
            newState = Object.assign({}, state);

            newState.dbList = action.dbList;
            console.log('RECEIVE_DBLIST Action');
            return newState;
        case FETCH_QUERY_RES:
            return action;
        case RECEIVE_QUERY_RES:
            newState = Object.assign({}, state);

            newState.res =  action.res;
            return newState;
        default:
            return state;
    }
}