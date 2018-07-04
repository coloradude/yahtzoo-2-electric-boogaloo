import React from 'react'

const GameOverModal = ({name1, name2, score1, score2}) => {
  return [
    <div id='playerNameModalBackdrop' className='playerNameModalBackdrop'></div>,
    <div className='playerNameModal'>
      <div className='playerNameModalContent'>
        <h3>The winner is {score1 > score2 ? name1 : name2}</h3>
        <div className='playerNameInput'>
          <span>{name1} Score: {score1} </span>
        </div>
        <div className='playerNameInput'>
          <span>{name2} Score: {score2}  </span>
        </div>
        <button 
          className='startGameButton'
          >Reset Game</button>
      </div>
    </div>
  ]
}

export default GameOverModal