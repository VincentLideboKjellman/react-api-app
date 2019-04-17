import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SiteContainer.css';
import Header from '../Header';

class SiteContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <div className="site-container">
            <Header header="Meme Extractor"></Header>
            </div>
        )
    }

}

export default SiteContainer;