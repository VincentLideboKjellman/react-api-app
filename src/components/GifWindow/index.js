import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GifWindow.css';
import Header from '../Header';
import Button from '../Button';

class GifWindow extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            gif: 'https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif',
        };
        this.fetchGif = this.fetchGif.bind(this);
    }

    componentDidMount() {
        // this.fetchGif();
    }

    fetchGif(event) {

        event.stopPropagation()
        const API = 'https://api.giphy.com/v1/gifs/random?&api_key=xq1QYQUuQza2EN6C84vpKA2BU2gDYIPG&tag=dog';
        // const apikey = 'xq1QYQUuQza2EN6C84vpKA2BU2gDYIPG';

        fetch(API)
            .then(response => response.json())
            .then(res => {

                console.log(res)

                this.setState({ gif: res.data.image_url})
            
            })
        

        

        // event.preventDefault();
    }


    render(){    

        return(
            <div className="gif-container">
            
                <img className="gif-box" src={this.state.gif} alt="A Gif Pic Should Be Here"></img>

                <Button updateGif={this.fetchGif} buttonText="Get A Random Doggo!"></Button>


            </div>
        )
    }

}

export default GifWindow;