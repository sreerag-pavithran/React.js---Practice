import React, { Component } from 'react';
import './App.css';
// import Greet from './components/greet';
// import Welcome from './components/welcome';
import Message from './components/message';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Message />
      </div>
    )
  }
}

export default App;
