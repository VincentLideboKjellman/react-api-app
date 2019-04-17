import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Header.css'


const Header = (props) => {

    return(
        <div>
            <h1 className="header-style">{props.header}</h1>
        </div>
    )

}


export default Header;