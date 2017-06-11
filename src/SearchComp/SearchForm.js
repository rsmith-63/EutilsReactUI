/**
 * Created by rob on 2/25/2017.
 */
import React, { Component } from 'react';
import ncbiResources from '../Api/ncbiResources';

class SearchForm extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            dbList:[],
            results:[]
        }
    }

    componentDidMount() {
        // ncbiResources.getDbList().then(data => {
        //     const d = data.unshift('all databases');
        //     return this.setState({dbList: d});
        // })
        ncbiResources.getDbList().then(data => (
            this.setState({dbList: data})
        ) )

    }

    renderOptions(dbData) {
        return dbData.map(db => <option key={db} value={db}>{db}</option> )
    }

    submitSearch(e) {
        e.preventDefault();
        console.log('input val', this.input.value);
        console.log('sel val', this.select.value);
        ncbiResources.getQueryResults(this.select.value,this.input.value).then(data => (
            this.setState({results: data})
        ) );
        console.log('res', this.state.results);
    }

    render() {
        return (
            <div className="SearchForm">
                <div className="container">
                    <div className="row row-content" >
                        <form className="form-horizontal" onSubmit={this.submitSearch.bind(this)}>
                            <legend>NcbiSearch</legend>

                            <fieldset className="col-md-offset-2 col-sm-offset-2 col-lg-offset-3 col-xs-offset-1" >
                                  <div className="form-group" >
                                    <div className="col-lg-3 col-md-4 col-xs-4" >
                                        <div className="col-lg-3 col-md-4 col-xs-4" >
                                            <select  className="form-control" ref={(select) => this.select = select}>
                                                { this.state.dbList.length > 0 ? this.renderOptions(this.state.dbList) : null}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-xs-3">
                                        {/* <input id="Seach" name="Seach" type="text" placeholder="Search Ncbi" className="form-control input-md"/> */}
                                        <input placeholder="Search Ncbi" className="form-control input-md" type="text" ref={(input) => this.input = input} />
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-xs-3">
                                        <button id="SearchButton" name="SearchButton" className="btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                {/* { this.state.results.length > 0 ? <SomeDisplayComponent data={this.state.results} /> : <Info />}*/}
                {/* inside SomeDisplayComponent */}
                {/* <div className="SomeDisplayComponent"><p>{this.props.passedResults}</p></div> */}
            </div>
        );
    }
}

export default SearchForm;
