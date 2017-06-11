/**
 * Created by rob on 6/11/2017.
 */
import {FETCH_DBLIST, RECEIVE_DBLIST} from './actionTypes';

import  ncbiResources from '../Api/ncbiResources';
export function receiveDbList(json) {
    return {type: RECEIVE_DBLIST, dbList: json};
};
export function fetchDbList() {
    debugger;
    return  dispatch => {

     return  ncbiResources.getDbList().then((dbList)=>{

           dispatch(receiveDbList(dbList));
       })


    }
};
