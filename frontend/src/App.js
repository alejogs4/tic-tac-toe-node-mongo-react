import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import GameCard from './components/GameCard';
import Row from 'react-materialize/lib/Row';

class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = { games: [] }

    this.getGames = this.getGames.bind(this)
  }

  componentDidMount() {
    this.getGames()
  }

  getGames() {
    fetch('http://localhost:3001/api/v1/games')
      .then(response => response.json())
      .then(games => {
        this.setState({ games })
      })
      .catch(err => console.log(err.message))
  }

  render() {
    const { games } = this.state

    return (
      <Fragment>
        <Header/>
        <Row>
          {games.map(game => (
            <GameCard key={game._id} />
          ))}
        </Row>
      </Fragment>
    );
  }
}

export default App;
