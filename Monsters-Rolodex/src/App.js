import React, { Component } from 'react';
import './App.css';
import { CardList} from './components/card-list/card-list';
import './components/search/search.style.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({ monsters: users }))
  }

render(){
  const { monsters, searchField } = this.state;
  const filteredMonster = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className="App">
    <h1 className="head">Monsters Rolodex</h1>
    <input type="search"
    className="searchbar"
      placeholder="Search Monsters"
        onChange={ e => 
          this.setState({ searchField: e.target.value })
    }/>
    <CardList monsters = {filteredMonster
    } />
    </div>
  );
}
}

export default App;
