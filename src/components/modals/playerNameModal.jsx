import React from 'react'

const PlayerNameModal = ({
  name1 = 'One', 
  name2 = 'Two', 
  updateName, 
  startGame
}) => {
  return [
    <div id='playerNameModalBackdrop' className='playerNameModalBackdrop'></div>,
    <div className='playerNameModal'>
      <div className='playerNameModalContent'>
        <h3>Player Names</h3>
        <div className='playerNameInput'>
          <span>Player 1:  </span>
          <input 
            type='text' 
            placeholder='Player 1 Name'
            onChange={(e) => updateName(e.target.value, 0)}
          />
        </div>
        <div className='playerNameInput'>
          <span>Player 2:  </span>
          <input 
            type='text' 
            placeholder='Player 2 Name'
            onChange={(e) => updateName(e.target.value, 1)}
          />
        </div>
        <button 
          className='startGameButton'
          onClick={() => startGame()}
          >Start Game</button>
      </div>
    </div>
  ]  
}

export default PlayerNameModal