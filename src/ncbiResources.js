/**
 * Created by rob on 2/25/2017.
 */

const ncbiResources ={
    getDbList(){
        const url = `http://localhost:4000/api/dblist`;
        return fetch(url)
            .then(function(response) {

               return response.json().then(function(json) {
                    return json;
                });

            }).catch(function(error) {
                console.log('error', error);
            })


    },
    getQueryResults(selectedDb, term){
        // todo fix for selected db
        console.log('selectedDb', selectedDb);
        const url = `http://localhost:4000/api/query?${term}`;
        return fetch(url)
            .then(function (response) {

                return response.json().then(function (json) {
                    return json;
                });

            }).catch(function (error) {
                console.log('error', error);
            })

    }

};
export default ncbiResources;
