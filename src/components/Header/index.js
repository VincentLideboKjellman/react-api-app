import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Header.css'


const Header = (props) => {

    return(
            <h1>{props.header}</h1>
    )

}

export default Header;