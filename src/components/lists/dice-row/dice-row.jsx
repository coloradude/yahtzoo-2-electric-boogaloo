import React from 'react'

import DiePiece from '../../game-pieces/dice-pieces/dice-pieces.jsx'

const DiceRow = (({dice, toggleDie}) => {
  return dice.map((die, dieIndex) => {
    return <DiePiece 
      die={die}
      toggleDie={toggleDie}
      dieIndex={dieIndex}
    />
  })
})

export default DiceRow