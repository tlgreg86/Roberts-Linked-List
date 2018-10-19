import React, { Component } from 'react';
import './App.css';

import MainPage from './containers/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 
          Containers:
            MainPage.js
            InputSection.js
            Cards.js
          Components:
            InputField.js
            Button.js
            Header.js
            Card.js
        */}
        <MainPage />
      </div>
    );
  }
}

export default App;
