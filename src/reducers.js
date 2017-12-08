const calculateScores = (state, action) => {
    console.log(state, action, 'reducer')
    switch(action.type){
      case 'CALCULATE_VALUES': 
      console.log(state.diceBoard.dice, 'dice!!!!!!!!!')
        return state.diceBoard.dice.map(die => {
        //   console.log(die)
          return !die.isActive ? 
            {value: (Math.floor(Math.random() * 6)), die: die.isActive} :
            die
        })
      
        default:
        console.log('default')
        return state
  }
    
}

export default calculateScores