import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Button.css';


const Button = (props) => {

    return(
        <div>
            <button className="gif-button" type="button">{props.buttonText}</button>
        </div>
    )
}


export default Button;