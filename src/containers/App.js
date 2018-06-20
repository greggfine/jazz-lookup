import React, { Component } from 'react';
import './App.css';
import Tachyons from 'tachyons'
import SearchBar from '../components/SearchBar'
import Musicians from '../components/Musicians'
import Musician from '../components/Musician'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      musicians: []
    }
  }

  componentDidMount() {
    fetch('http://linkedjazz.org/api/people/all')
      .then(musicians => musicians.json())
      .then(musicians => this.setState({
        musicians
      }))
  }

  render() {
    return (
      <div>
        <h1 className="tc">JAZZ LOOKUP</h1>
        <hr/>
        <SearchBar />
        <Musicians musicians={this.state.musicians} />
      </div>
    );
  }
}

export default App;



{/* 

  STRUCTURE:
        APP  >
          TITLE
          SEARCH BAR
          GRID >
            ITEMS
*/}


