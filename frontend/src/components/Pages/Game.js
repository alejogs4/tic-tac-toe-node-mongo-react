import React, { Component } from 'react';
import Header from '../Header';
import GameField from '../GameField';
import { API_ROUTE } from '../../constants';

class Game extends Component {
  constructor(...props) {
    super(...props)
    this.state = { game: null, playerOne: true }

    this.getGame = this.getGame.bind(this)
    this.markField = this.markField.bind(this)
  }

  componentDidMount() {
    this.getGame()
  }

  // Fecth the game data
  getGame() {
    const { id } = this.props.match.params

    fetch(`${API_ROUTE}/game/${id}`)
      .then(response => response.json())
      .then(game => {
        this.setState({ game, playerOne: game.turn_player_one })
      })
      .catch(err => console.log(err.message))
  }

  // Make petition in every move of the player
  markField(field) {
    return e => {
      const { id } = this.props.match.params
      const { playerOne } = this.state
      const data = { player_one: playerOne, field }
      
      fetch(`${API_ROUTE}/game/move/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(game => {
        if (game.hasOwnProperty('moves')) this.setState({game, playerOne: !this.state.playerOne})
      })
      .catch(err => console.log(err.message))
    }
  }

  render() {
    const { game, playerOne } = this.state

    return (
      <main>
        <Header />
        {game &&
          <table className='table'>
            <thead>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </thead>
            <tbody>
              <tr>
                <GameField markField={this.markField(0)}
                  field={0}
                  moves={game.moves} />
                <GameField markField={this.markField(1)}
                  field={1}
                  moves={game.moves} />
                <GameField markField={this.markField(2)}
                  field={2}
                  moves={game.moves} />
              </tr>
              <tr>
                <GameField markField={this.markField(3)}
                  field={3}
                  moves={game.moves} />
                <GameField markField={this.markField(4)}
                  field={4}
                  moves={game.moves} />
                <GameField markField={this.markField(5)}
                  field={5}
                  moves={game.moves} />
              </tr>
              <tr>
                <GameField markField={this.markField(6)}
                  field={6}
                  moves={game.moves} />
                <GameField markField={this.markField(7)}
                  field={7}
                  moves={game.moves} />
                <GameField markField={this.markField(8)}
                  field={8}
                  moves={game.moves} />
              </tr>
            </tbody>
            
          </table>
        }
        {(game && game.finish) && <p className='winner'>El ganador es {game.winner}</p>}
        {(game && !game.finish) && <p className='winner'>Es turno del jugador {playerOne ? 'Uno' : 'Dos'}</p>}
      </main>
    )
  }
}

export default Game