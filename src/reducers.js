const genericNumsScore = (dice, num) => {
  return dice.reduce((curr, next) => next.value === num ? curr + next.value : curr, 0)
}

const threeOrFourOfAKindScore = (dice, num) => {
  const reduced = dice.reduce((curr, next) => {
    curr[next.value] = curr[next.value] + 1 || 1
    return curr
  }, {})

  let finalScore = 0

  for (let item in reduced) {
    
    if (Number(reduced[item]) >= num) {
      finalScore = dice.reduce((curr, next) => curr + next.value, 0)
    }
  }
  return finalScore
}

const fullHouseScore = dice => {
  const scores = dice.reduce((curr, next) => {
    curr[next.value] = curr[next.value] + 1 || 1
    return curr
  }, {})

  const propertyNames = Object.getOwnPropertyNames(scores)
  return propertyNames.length == 2 && (scores[propertyNames[0]] == 3 || scores[propertyNames[1]] == 3) ? 25 : 0
}

const yahtzooScore = dice => {
  const scores = dice.reduce((curr, next) => {
    curr[next.value] = curr[next.value] + 1 || 1
    return curr
  }, {})
   return Object.getOwnPropertyNames(scores).length === 1 ? 50 : 0
}



const calculateScores = (state, action) => {

  switch(action.type){
    case 'CALCULATE_VALUES': 

    const newState = {...state}

      const dice = state.diceBoard.dice.map(die => {
        return die.isReadyToRoll ? 
          {value: (Math.ceil(Math.random() * 6)), 
          isReadyToRoll: true} :
          die
      })

    const ones = genericNumsScore(dice, 1)
    const twos = genericNumsScore(dice, 2)
    const threes = genericNumsScore(dice, 3)
    const fours = genericNumsScore(dice, 4)
    const fives = genericNumsScore(dice, 5)
    const sixes = genericNumsScore(dice, 6)
    const threeOfAKind = threeOrFourOfAKindScore(dice, 3)
    const fourOfAKind = threeOrFourOfAKindScore(dice, 4)
    const fullHouse = fullHouseScore(dice)
    const yahtzoo = yahtzooScore(dice)
    const chance = dice.reduce((curr, next) => curr + next.value, 0)


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
      threeOfAKind: {
        score: threeOfAKind,
        isActive: true
      },
      fourOfAKind: {
        score: fourOfAKind,
        isActive: true
      },
      fullHouse: {
        score: fullHouse,
        isActive: true
      },
      smallStraight: {
        score: 1,
        isActive: true
      },
      largeStraight: {
        score: 1,
        isActive: true
      },
      yahtzee: {
        score: 1,
        isActive: yahtzoo
      },
      chance: {
        score: chance,
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

