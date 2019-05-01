import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Button.css';
import '../GifWindow';

const Button = (props) => {

    return(
        <div>
            <button onClick={props.updateGif} className="gif-button" type="button">{props.buttonText}</button>
        </div>
    )
}

//onClick={this.fetchGif}

export default Button;