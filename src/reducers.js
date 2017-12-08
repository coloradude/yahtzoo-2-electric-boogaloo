const calculateScores = (state, action) => {
    console.log('clicked the button')
    console.log(action, 'reducer')
    switch(action.type){
      case '': 
        return state
  
    //   case 'CALCULATE_SCORES':
    //   console.log(state)
    //     console.log('hola')
    //     console.log(state)
    //     const dice = state.diceBoard.dice.map(die => {
    //       console.log(die)
    //       return die.isActive ? 
    //         {value: Math.floor(Math.random() * 6), ...die} :
    //         die
    //     })
      
    default: return state
  }
    
}

export default calculateScores