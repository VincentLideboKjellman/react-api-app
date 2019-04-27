import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SiteContainer.css';
import Header from '../Header';
import Button from '../Button';

class SiteContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <div className="site-container">
            <Header header="Gif Extractor"></Header>
            
            <Button buttonText="Get A Random Gif!"></Button>





            </div>
        )
    }

}

export default SiteContainer;