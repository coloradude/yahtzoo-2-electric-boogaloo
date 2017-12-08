const calculateScores = (state, action) => {
    console.log('clicked the button')
    console.log(state, action, 'reducer')
    switch(action.type){
      case 'CALCULATE_VALUES': 
        const dice = state.diceBoard.dice.map(die => {
          console.log(die)
          return die.isActive ? 
            {value: Math.floor(Math.random() * 6), die: die.isActive} :
            die
        })
      
        default: return state
  }
    
}

export default calculateScores