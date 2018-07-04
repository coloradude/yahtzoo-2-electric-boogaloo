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

  // Cases
  // 1. Die was activated and needs to animated on next roll
  // 2. Die was deactivated and doesn't need to animate on next roll
  // 3. No dice was activated so all need to animate on next roll
  // Use a three way marker -1, 0, q or something like that to add/remove classes

  // This isn't going to work but it's a starting point
  // Might need to add another property 'isRolling'
  // The reason for this is that i need to keep track of dice that should animate
  // but I dont want to triger the animation until they actually roll.
  // So the shouldBeAnimated property is relevant to the dice template but the
  // isRolling property only relates to the calculate values reducer and then 
  // everything can be reset

  // Dice default (none activated): !isReadyToRoll shouldBeAnimated !isRolling
  // Some clicked: isReadyToRoll shouldBeAnimated some are isRolling some not isRolling

  // Change to an all active property shouldnt be an individual property it should be 
  // an Object wide property

  // Ignore all of this. Needs to be a different action. Pull the logic out into two seperate dispatches that get dispatched from the view

  let classes

  if (!die.isReadyToRoll && die.isRolling){
    classes = 'tada'
  } else if (die.isReadyToRoll){
    classes = 'isReadyToRoll'
  } else if (die.isReadyToRoll && die.isRolling){
    classes = 'tada'
  } else if (!die.isReadyToRoll || !die.shouldBeAnimated){
    classes = ''
  }

  return <img 
    src={dieImage}
    className={`die animated ${classes}`}
    onClick={() => toggleDie(dieIndex)}
  />

}

export default DiePiece