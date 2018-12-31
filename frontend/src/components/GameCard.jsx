import React from 'react'
import { Col, Card, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'
import tictactoe from '../assets/tic-tac-toe.jpg'

const GameCard = () => {
  return (
    <Col m={4} s={1}>
      <Link to='/'>
        <Card className='small'
          header={<CardTitle image={tictactoe}>Juego</CardTitle>}>

        </Card>
      </Link>
    </Col>
  )
}

export default GameCard