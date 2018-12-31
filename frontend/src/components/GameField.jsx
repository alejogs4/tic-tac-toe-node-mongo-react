import React from 'react'
/**
 * Component to represent every field of the game
 */
const GameField = ({markField, field, moves}) => {
  const moveField = moves.find(move => move.field === field)

  return (
    <td className='game-field' onClick={markField}>
      {(moveField && moveField.player_one) 
          ? <span className='player-1'>X</span> 
          : (moveField && !moveField.player_one)
            ? <span className='player-2'>O</span>
            : ''
      }
    </td>
  )
}

export default GameField