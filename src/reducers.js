const calculateScores = (state, action) => {
    switch(action.type){
      case 'CALCULATE_VALUES': 
        return state.diceBoard.dice.map(die => {
          return !die.isActive ? 
            {value: Math.ceil(Math.random() * 6), 
            isActive: die.isActive} :
            die
        })
      
        default:
        console.log('default')
        return state
  }
    
}

export default calculateScores

const ones = (dice) => {
    
}