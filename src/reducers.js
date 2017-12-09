const genericNumsScore = (dice, num) => {
  return dice.reduce((curr, next) => next.value === num ? curr + next.value : curr, 0)
}

const threeOrFourOfAKindScore = (dice, num) => {
  const reduced = dice.reduce((curr, next) => curr[nex.value] ? curr[next.value] +  : curr[nex.value] = 1, {})

  const finalScore = 0

  for (item in reduced) {
    if (Number(reduced[item]) === num) {
      finalScore = Object.getOwnPropertyName(reduced[item]) * num
    }
  }

  return finalScore
}


const calculateScores = (state, action) => {

  console.log(action)
  console.log(state, 'Reducer state')

  switch(action.type){
    case 'CALCULATE_VALUES': 

    const newState = {...state}

      const dice = state.diceBoard.dice.map(({value, ...rest}) => {
        return die.isReadyToRoll ? {
                value: (Math.ceil(Math.random() * 6)),
                ...rest
            }
            : die
        
      })

    const ones = genericNumsScore(dice, 1))
    const twos = genericNumsScore(dice, 2))
    const threes = genericNumsScore(dice, 3))
    const fours = genericNumsScore(dice, 4))
    const fives = genericNumsScore(dice, 5))
    const sixes = genericNumsScore(dice, 6))
    const threeOfAKind = threeOrFourOfAKindScore(dice, 3)
    const fourOfAKind = threeOrFourOfAKindScore(dice, 4)


      newState.gameBoard = {
        ones: {
          score: ones,
          isActive: true
        },
        twos: {
          score: twos,
          isActive: true
        },
        threes: {
          score: threes,
          isActive: true
        },
        fours: {
          score: fours,
          isActive: true
        },
        fives: {
          score: fives,
          isActive: true
        },
        sixes: {
          score: sixes,
          isActive: true
        },
        ones: {
          score: ones,
          isActive: true
        }
        
    }   





      
      newState.diceBoard.dice = dice
        console.log(newState, 'newstate')
      return newState

    default:
      console.log('default')
      return state
  }
}

export default calculateScores

const ones = (dice) => {

}
