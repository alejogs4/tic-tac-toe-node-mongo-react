import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { API_ROUTE } from '../../constants'
import '../../App.css';
import Header from '../Header'
import GameCard from '../GameCard'
import Row from 'react-materialize/lib/Row'
import Button from 'react-materialize/lib/Button'

class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = { games: [], newGame: null }

    this.getGames = this.getGames.bind(this)
    this.createNewGame = this.createNewGame.bind(this)
  }

  componentDidMount() {
    this.getGames()
  }

  getGames() {
    fetch(`${API_ROUTE}/games`)
      .then(response => response.json())
      .then(games => {
        const gamesOrdered = games.sort((a, b) => a.finish - b.finish)
        this.setState({ games: gamesOrdered })
      })
      .catch(err => console.log(err.message))
  }

  createNewGame() {
    fetch(`${API_ROUTE}/game`, { method: 'POST' })
      .then(response => response.json())
      .then(game => {
        this.setState({ newGame: game._id })
      })
  }

  render() {
    const { games, newGame } = this.state
    if (newGame) return <Redirect to={`/game/${newGame}`} />


    return (
      <Fragment>
        <Header/>
        <Button onClick={this.createNewGame} className='button'>Iniciar nuevo juego</Button>
        <Row>
          {games.map(game => (
            <GameCard key={game._id}
              game={game} />
          ))}
        </Row>
      </Fragment>
    );
  }
}

export default App;
