import React from 'react'

import styles from '../css/styles'

export const RollSquare = ({
  rollFunc, 
  rollsLeft
}) => {
  return <div 
    style={styles.playSquare} 
    onClick={rollsLeft > 0 ? rollFunc : null}>{rollsLeft > 0 ? `Roll(${rollsLeft})` : 'Scratch or Score'}
  </div>
}