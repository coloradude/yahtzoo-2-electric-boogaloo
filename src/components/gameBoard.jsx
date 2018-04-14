import React from 'react'

import '../css/index.css'

export const RollSquare = ({
  rollFunc, 
  rollsLeft
}) => {
  return <div 
    className='playSquare'
    onClick={rollsLeft > 0 ? rollFunc : null}>{rollsLeft > 0 ? `Roll(${rollsLeft})` : 'Scratch or Score'}
  </div>
}