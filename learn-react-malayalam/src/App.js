import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Counter from './components/classCounter';


function App() {
  const [name, setName] = React.useState('Sreerag')
  const resetName = () =>{
    setName('');
  }
  return (
    
    
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={resetName}>Reset</button>
    </div>
      
    
  );
}

export default App;
