import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import SiteContainer from '../SiteContainer';

class App extends Component {
  render() {
    return (
      <SiteContainer>
      
      <Header header="Meme Extractor"></Header>

      </SiteContainer>

    );
  }
}

export default App;
