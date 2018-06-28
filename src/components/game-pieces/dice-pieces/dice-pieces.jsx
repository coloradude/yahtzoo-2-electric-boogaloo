import React from 'react'

import css from './dice-pieces.css'

import die1 from '../../../images/die-1.svg'
import die2 from '../../../images/die-2.svg'
import die3 from '../../../images/die-3.svg'
import die4 from '../../../images/die-4.svg'
import die5 from '../../../images/die-5.svg'
import die6 from '../../../images/die-6.svg'

const DiePiece = ({die, toggleDie, dieIndex}) => {
    
  let dieImage

  switch(die.value) {
    case 1: dieImage = die1 
    break
    case 2: dieImage = die2
    break
    case 3: dieImage = die3
    break
    case 4: dieImage = die4
    break
    case 5: dieImage = die5
    break
    case 6: dieImage = die6
    break
  }

  return <img 
    src={dieImage}
    className={die.isReadyToRoll ? 'die isReadyToRoll animated' : 'die animated tada'} 
    onClick={() => toggleDie(dieIndex)}
  />
}

export default DiePiece