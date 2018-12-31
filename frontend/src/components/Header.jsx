import React from 'react';
import { Navbar  } from 'react-materialize';
import { Link } from 'react-router-dom'

const Header = () => (
  <Navbar className='indigo darken-4 header'>
    <Link to='/'>
      <h1 className='title'>Tic Tac Toe</h1>
    </Link>
  </Navbar>
)

export default Header
