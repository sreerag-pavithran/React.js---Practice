import React, { useState } from 'react';
import Tweet from './tweet';
import './App.css'

function App(){
  return(
    <div className="App">
      <Tweet name="Sreerag" message="This is a random Tweet" likes="1k"/>
      <Tweet name="Sandra" message="This is a random Tweet" likes="1.5k"/>
      <Tweet name="Pavithran" message="Awesome random Tweet" likes="2k"/>
      <Tweet name="Sajina" message="A new random Tweet" likes="1.8k"/>
      <Tweet name="Nandhu" message="Yea another random Tweet" likes="5k"/>
    </div>
  );
}

export default App