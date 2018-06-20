import React, { Component } from 'react';
import './App.css';
import Tachyons from 'tachyons'
import SearchBar from '../components/SearchBar'
import Musicians from '../components/Musicians'
import Musician from '../components/Musician'
import Axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      musicians: [],
      input: ''
    }
  }

  componentDidMount() {
      Axios.get('https://linkedjazz.org/api/people/all')
      .then(musicians => musicians.data)
      .then(musicians => this.setState({
        musicians
      }))
  }

  handleChange = (e) => {
    const entry = e.target.value
    this.setState({
      input: entry
    })
  }

  render() {
    const filteredMusicians = this.state.musicians.filter(musician => {
      return musician.name.toLowerCase().includes(this.state.input.toLowerCase())
    })
    return (
      <div>
        <h1 className="tc">JAZZ LOOKUP</h1>
        <hr/>
        <SearchBar 
          handleChange={this.handleChange}
          input={this.state.input}/>
        <Musicians musicians={filteredMusicians} />
      </div>
    );
  }
}

export default App;