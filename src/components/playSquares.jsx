import React from 'react'
import '../css/index.css'
import styles from '../css/styles'

export const PlaySquare = ({
  name, 
  state: {
    score, 
    isActive 
  }, 
  rollsLeft, 
  addScore
}) => {
  return <div 
    style={isActive && rollsLeft < 3 ? styles.playSquare: styles.inactiveSquare} 
    onClick={rollsLeft >= 0 && isActive ? addScore : () => {}}
  >
    {isActive && score && score !== -1 ? `${name} (${score})` : name}
  </div>
}

export const FullWidthPlaySquare = ({
  name, 
  state: {
    score, 
    isActive 
  }, 
  rollsLeft, 
  addScore
}) => {
  return <div 
    style={isActive && rollsLeft < 3 ? styles.fullWidthPlaySquare: styles.fullWidthInactiveSquare} 
    onClick={rollsLeft >= 0 && isActive ? addScore : () => {}}
  >
    {isActive && score && score !== -1 ? `${name} (${score})` : name}
  </div>
}

export const PlaySquareRow = ({children}) => (
  <div style={styles.playSquareRow}>{children}</div>
)