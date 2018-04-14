import React from 'react'

import './roll-square.css'

const RollSquare = ({
  rollFunc, 
  rollsLeft
}) => {
  return <div 
    className='rollSquare'
    onClick={rollsLeft > 0 ? rollFunc : null}>{rollsLeft > 0 ? `Roll(${rollsLeft})` : 'Scratch or Score'}
  </div>
}

export default RollSquare