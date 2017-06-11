/**
 * Created by rob on 6/11/2017.
 */
import {FETCH_DBLIST, RECEIVE_DBLIST, FETCH_QUERY_RES,RECEIVE_QUERY_RES} from './actionTypes';

import  ncbiResources from '../Api/ncbiResources';
export function receiveDbList(json) {
    return {type: RECEIVE_DBLIST, dbList: json};
};
export function fetchDbList() {

    return  dispatch => {

     return  ncbiResources.getDbList().then((dbList)=>{

           dispatch(receiveDbList(dbList));
       })


    }
};



export function receiveDbQuery(json) {
    return {type: RECEIVE_QUERY_RES, res: json};
};

export function fetchDbQuery() {

    return  dispatch => {

        return  ncbiResources.getQueryResults().then((res)=>{

            dispatch(receiveDbQuery(res));
        })


    }
};
