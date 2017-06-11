/**
 * Created by rob on 2/25/2017.
 */
import React from 'react';

import ncbi from '../Img/ncbi.jpg';
const Info = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-xs-12 col-sm-12">
                <div className="page-header">
                    <h1>
                        <small>Ncbi About </small>
                    </h1>
                </div>
                <section className="text-center">
                    The Entrez Programming Utilities (E-utilities) are a set of eight server-side
                    programs that provide a stable interface into the Entrez query and database system at
                    the National Center for Biotechnology Information (NCBI). The E-utilities use a fixed URL syntax
                    that
                    translates a standard set of input parameters into the values necessary for various NCBI software
                    components
                    to search for and retrieve the requested data. The E-utilities are therefore the structured
                    interface to the
                    Entrez system, which currently includes 38 databases covering a variety of biomedical data,
                    including nucleotide and protein
                    sequences, gene records, three-dimensional molecular structures, and the biomedical literature
                </section>
                <div className="media well">
                    <a href="#" className="pull-left">
                        <img  alt="Ncbi e-utils video" src={ncbi} className="media-object img-responsive"/>
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">
                            E-utilities Introduction
                        </h4>
                        <div className="embed-responsive embed-responsive-4by3">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/BCG-M5k-gvE" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default  Info;