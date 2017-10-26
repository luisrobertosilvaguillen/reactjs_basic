//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import  Header from './Global/Header';
import  Content from './Global/Content';
import  Footer from './Global/Footer';
//Data
import items from '../data/menu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="TEST ROBERTO" items={items} />
        <Content />
        <Footer copyright="&copy; Roberto App 2017" />
      </div>
    );
  }
}

export default App;
