import React from 'react'
import '../css/index.css'

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
    className={isActive && rollsLeft < 3 ? 'playSquare': 'playSquare inactive'} 
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
    className={isActive && rollsLeft < 3 ? 'fullWidthPlaySquare': 'fullWidthPlaySquare inactive'} 
    onClick={rollsLeft >= 0 && isActive ? addScore : () => {}}
  >
    {isActive && score && score !== -1 ? `${name} (${score})` : name}
  </div>
}

export const PlaySquareRow = ({children}) => (
  <div className='playSquareRow'>{children}</div>
)