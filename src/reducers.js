import {
  genericNumsScore,
  threeOrFourOfAKindScore,
  fullHouseScore,
  hasStraightScore,
  yahtzooScore
} from './score-evaluators/score-evaluators'

const calculateScores = (state, action) => {

  const newState = {...state}
  const diceArray = newState.diceBoard.dice
  const activeScorecard = newState.players.filter(player => player.isActive)[0].scorecard

  switch(action.type){
    case 'CALCULATE_VALUES': 

      const dice = diceArray.map( die => {
        return die.isReadyToRoll ? {
            value: (Math.ceil(Math.random() * 6)),
            isReadyToRoll: true
          }
          : die
        
      })

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

      const ones = !activeScorecard.ones.value || activeScorecard.ones.isScratched ? genericNumsScore(dice, 1) : 0
      const twos = !activeScorecard.twos.value || activeScorecard.twos.isScratched ? genericNumsScore(dice, 2) : 0
      const threes = !activeScorecard.threes.value || activeScorecard.threes.isScratched ? genericNumsScore(dice, 3) : 0
      const fours = !activeScorecard.fours.value || activeScorecard.fours.isScratched ? genericNumsScore(dice, 4) : 0
      const fives = !activeScorecard.fives.value || activeScorecard.fives.isScratched ? genericNumsScore(dice, 5) : 0
      const sixes = !activeScorecard.sixes.value || activeScorecard.sixes.isScratched ? genericNumsScore(dice, 6) : 0
      const threeOfAKind = !activeScorecard.threeOfAKind.value || activeScorecard.threeOfAKind.isScratched ? threeOrFourOfAKindScore(dice, 3) : 0
      const fourOfAKind = !activeScorecard.fourOfAKind.value || activeScorecard.fourOfAKind.isScratched ? threeOrFourOfAKindScore(dice, 4) : 0
      const fullHouse = !activeScorecard.fullHouse.value || activeScorecard.fullHouse.isScratched ? fullHouseScore(dice) : 0
      const smallStraight = !activeScorecard.smallStraight.value || activeScorecard.smallStraight.isScratched ? hasStraightScore(dice, 4) : 0
      const largeStright = !activeScorecard.largeStraight.value || activeScorecard.largeStraight.isScratched ? hasStraightScore(dice, 5) : 0
      const yahtzoo = !activeScorecard.yahtzoo.value || activeScorecard.yahtzoo.isScratched ? yahtzooScore(dice) : 0
      const chance = !activeScorecard.chance.value || activeScorecard.chance.isScratched ? dice.reduce((curr, next) => curr + next.value, 0) : 0

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
      newState.players[newState.activePlayer]
        .scorecard[action.payload.die] = action.payload.score
      // Need to switch to next active player and update scoreboard for current one.
      // Probably want to limit players to 2 for now
      // Maybe need to set scratchable to false, we will see
      // Reset dice and scoreboard

      return newState
    
    default:
      return state
  }
}

export default calculateScores


