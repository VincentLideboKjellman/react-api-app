import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SiteContainer.css';
import Header from '../Header';
import Button from '../Button';
import GifWindow from '../GifWindow';

class SiteContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
           

            <div className="site-container">
            <Header header="Gif Extractor"></Header>

            <GifWindow></GifWindow>
            
            
            </div>
        )
    }

}

export default SiteContainer;