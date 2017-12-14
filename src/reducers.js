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
  return propertyNames.length === 2 && (scores[propertyNames[0]] === 3 || scores[propertyNames[1]] === 3) ? 25 : 0
}

const hasStraightScore = (dice, smallOrLarge) => {
  // Sets score depending on being called for small straight of large straight
  const potentialScore = smallOrLarge === 4 ? 30 : 40
  // Sorts the dice based on value
  const sorted = dice.sort((a, b) => a.value - b.value)
  
 // For first 4 die, pulls out die that arent 1 smaller than next die.
  // Pulls out last die if it isnt 1 more than previous
  const filtered = sorted.filter((die, i) => {
    return i < 4 ?
      sorted[i].value + 1 === sorted[i + 1].value :
      sorted[i].value - 1 === sorted[i - 1].value
    }
  )

 // Compares length of sorted/filtered array to expected length
  // of array if a straight is present
  return filtered.length >= smallOrLarge ? potentialScore : 0

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
        const dice = state.diceBoard.dice.map( die => {
          return die.isReadyToRoll ? {
                  value: (Math.ceil(Math.random() * 6)),
                  isReadyToRoll: true
              }
              : die
          
        })

      const gameBoard = {...state.gameBoard}
      const activePlayer = newState.players.filter(player => player.isActive)[0].scorecard

      const ones = gameBoard.ones.isActive && !activePlayer.ones ? genericNumsScore(dice, 1) : 0
      const twos = gameBoard.twos.isActive && !activePlayer.twos ? genericNumsScore(dice, 2) : 0
      const threes = gameBoard.threes.isActive && !activePlayer.threes ? genericNumsScore(dice, 3) : 0
      const fours = gameBoard.fours.isActive && !activePlayer.fours ? genericNumsScore(dice, 4) : 0
      const fives = gameBoard.fives.isActive && !activePlayer.fives ? genericNumsScore(dice, 5) : 0
      const sixes = gameBoard.sixes.isActive && !activePlayer.sixes ? genericNumsScore(dice, 6) : 0
      const threeOfAKind = gameBoard.threeOfAKind.isActive && !activePlayer.threeOfAKind ? threeOrFourOfAKindScore(dice, 3) : 0
      const fourOfAKind = gameBoard.fourOfAKind.isActive && !activePlayer.fourOfAKind ? threeOrFourOfAKindScore(dice, 4) : 0
      const fullHouse = gameBoard.fullHouse.isActive && !activePlayer.fullHouse ? fullHouseScore(dice) : 0
      const smallStraight = gameBoard.smallStraight.isActive && !activePlayer.smallStraight ? hasStraightScore(dice, 4) : 0
      const largeStright = gameBoard.largeStraight.isActive && !activePlayer.largeStraight ? hasStraightScore(dice, 5) : 0
      const yahtzoo = gameBoard.yahtzoo.isActive && !activePlayer.yahtzoo ? yahtzooScore(dice) : 0
      const chance = gameBoard.chance.isActive && !activePlayer.chance ? dice.reduce((curr, next) => curr + next.value, 0) : 0


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
          score: smallStraight,
          isActive: true
        },
        largeStraight: {
          score: largeStright,
          isActive: true
        },
        yahtzoo: {
          score: yahtzoo,
          isActive: true
        },
        chance: {
          score: chance,
          isActive: true
        }
      }

      newState.diceBoard.rollsLeft--
        
      newState.diceBoard.dice = dice
        console.log(newState, 'newstate')
      return newState

    default:
      console.log('default')
      return state
  }
}

export default calculateScores


