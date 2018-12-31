import React,{ Fragment } from 'react'
import { Col, Card, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'
import tictactoe from '../assets/tic-tac-toe.jpg'

const GameCard = ({game}) => {
  return (
    <Col m={4} s={1}>
      <Link to={`/game/${game._id}`}>
        <Card className='small'
          header={<CardTitle image={tictactoe}>Juego</CardTitle>}>
        <p className='game-data'>
          <span>Estado del juego: </span> 
          {`${game.finish ? 'Terminado' : 'Iniciado'}`}
          <br />
          {game.finish && 
            <Fragment><span>Ganador: </span>{game.winner}</Fragment>
          }
        </p>
        </Card>
      </Link>
    </Col>
  )
}

export default GameCard