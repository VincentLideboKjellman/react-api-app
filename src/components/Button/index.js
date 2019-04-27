import React, { Component } from 'react';
import PropTypes from "prop-types";


const Button = (props) => {

    return(
        <button classNsme="gif-button" type="button">{props.buttonText}</button>
    )
}


export default Button;