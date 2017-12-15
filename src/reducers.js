import {
  genericNumsScore,
  threeOrFourOfAKindScore,
  fullHouseScore,
  hasStraightScore,
  yahtzooScore
} from './score-evaluators/score-evaluators'

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

      // Removed gameBoard.ones.isActive && ... from front of ternary, may need to add again
      // There are 4 possible states for a gameBoard tile
      // 1. Unscored
      // 2. Scored but unavailable
      // 3. Scored and available
      // 4. Scratchable
      // I need to keep isActive state so it can be determine whether an
      //Active square is being pressed o the user is going for a scratch


      // This chunk gives a score if there is an available score based on the dice
      // and if the tile hasnt been scratched by the active player. Otherwise it
      // returns 0 which deactivates the tile

      const ones = !activePlayer.ones.value || activePlayer.ones.isScratched ? genericNumsScore(dice, 1) : 0
      const twos = !activePlayer.twos.value || activePlayer.twos.isScratched ? genericNumsScore(dice, 2) : 0
      const threes = !activePlayer.threes.value || activePlayer.threes.isScratched ? genericNumsScore(dice, 3) : 0
      const fours = !activePlayer.fours.value || activePlayer.fours.isScratched ? genericNumsScore(dice, 4) : 0
      const fives = !activePlayer.fives.value || activePlayer.fives.isScratched ? genericNumsScore(dice, 5) : 0
      const sixes = !activePlayer.sixes.value || activePlayer.sixes.isScratched ? genericNumsScore(dice, 6) : 0
      const threeOfAKind = !activePlayer.threeOfAKind.value || activePlayer.threeOfAKind.isScratched ? threeOrFourOfAKindScore(dice, 3) : 0
      const fourOfAKind = !activePlayer.fourOfAKind.value || activePlayer.fourOfAKind.isScratched ? threeOrFourOfAKindScore(dice, 4) : 0
      const fullHouse = !activePlayer.fullHouse.value || activePlayer.fullHouse.isScratched ? fullHouseScore(dice) : 0
      const smallStraight = !activePlayer.smallStraight.value || activePlayer.smallStraight.isScratched ? hasStraightScore(dice, 4) : 0
      const largeStright = !activePlayer.largeStraight.value || activePlayer.largeStraight.isScratched ? hasStraightScore(dice, 5) : 0
      const yahtzoo = !activePlayer.yahtzoo.value || activePlayer.yahtzoo.isScratched ? yahtzooScore(dice) : 0
      const chance = !activePlayer.chance.value || activePlayer.chance.isScratched ? dice.reduce((curr, next) => curr + next.value, 0) : 0

      newState.gameBoard = {
        ones: {
          score: ones,
          isActive: ones ? true : false
        },
        twos: {
          score: twos,
          isActive: twos ? true : false
        },
        threes: {
          score: threes,
          isActive: threes ? true : false
        },
        fours: {
          score: fours,
          isActive: fours ? true : false
        },
        fives: {
          score: fives,
          isActive: fives ? true : false
        },
        sixes: {
          score: sixes,
          isActive: sixes ? true : false
        },
        threeOfAKind: {
          score: threeOfAKind,
          isActive: threeOfAKind ? true : false
        },
        fourOfAKind: {
          score: fourOfAKind,
          isActive: fourOfAKind ? true : false
        },
        fullHouse: {
          score: fullHouse,
          isActive: fullHouse ? true : false
        },
        smallStraight: {
          score: smallStraight,
          isActive: smallStraight ? true : false
        },
        largeStraight: {
          score: largeStright,
          isActive: largeStright ? true : false
        },
        yahtzoo: {
          score: yahtzoo,
          isActive: yahtzoo ? true : false
        },
        chance: {
          score: chance,
          isActive: chance ? true : false
        }
      }

      newState.diceBoard.rollsLeft--
        
      newState.diceBoard.dice = dice
      return newState
    
    case 'ADD_SCORE':
      console.log('adding score', action.payload.die)
      return state
    

    default:
      return state
  }
}

export default calculateScores


