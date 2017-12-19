import {
  genericNumsScore,
  threeOrFourOfAKindScore,
  fullHouseScore,
  hasStraightScore,
  yahtzooScore
} from './score-evaluators/score-evaluators'

import initialState from './initial-state'


const calculateScores = (state, action) => {

  const newState = {...state}
  const diceArray = newState.diceBoard.dice

  const activeScorecard = newState.players[newState.activePlayer].scorecard
  console.log(activeScorecard, 'active scorebard')
  

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


      // This chunk gives a score if there is an available score based the active 
      // players scorecard and if the tile hasnt been scratched by the active player. 
      // Otherwise it returns 0 which deactivates the tile

      // If they arent scratched but have a score they are active
      // If they have no score && are not scratched they are active
      // if they have no score or have already been scored they are inactive

      // Might want to flip isScratched. Kind of confusing.


      // The problem with this system is it cant deal with a sqaure where you 
      // would want to scratch something that doesnt yet have a score

      // If I want to use a function like this I need to pass in the dice to 
      // generate a score

      // Pass an object down
      const buildScore = (dice, potentialVar, isScratched, currentScore, scoreCardScore, func,) => {
        if (isScratched || scoreCardScore){
          return 0
        } else if (!isScratched && currentScore) {
          // This wont work need curent score to pass in to function
          return func(dice, potentialVar)
        } else {
          return -1
        }
      }

      // I guess this means I need a quadranary in the view template to handle
      // all three possibilities

      const ones = !activeScorecard.ones.isScratched ? genericNumsScore(dice, 1) : 0
      const twos = !activeScorecard.twos.isScratched ? genericNumsScore(dice, 2) : 0
      const threes = !activeScorecard.threes.isScratched ? genericNumsScore(dice, 3) : 0
      const fours = !activeScorecard.fours.isScratched ? genericNumsScore(dice, 4) : 0
      const fives = !activeScorecard.fives.isScratched ? genericNumsScore(dice, 5) : 0
      const sixes = !activeScorecard.sixes.isScratched ? genericNumsScore(dice, 6) : 0
      const threeOfAKind = !activeScorecard.threeOfAKind.isScratched ? threeOrFourOfAKindScore(dice, 3) : 0
      const fourOfAKind = !activeScorecard.fourOfAKind.isScratched ? threeOrFourOfAKindScore(dice, 4) : 0
      const fullHouse = !activeScorecard.fullHouse.isScratched ? fullHouseScore(dice) : 0
      const smallStraight = !activeScorecard.smallStraight.isScratched ? hasStraightScore(dice, 4) : 0
      const largeStright = !activeScorecard.largeStraight.isScratched ? hasStraightScore(dice, 5) : 0
      const yahtzoo = !activeScorecard.yahtzoo.isScratched ? yahtzooScore(dice) : 0
      const chance = !activeScorecard.chance.isScratched ? dice.reduce((curr, next) => curr + next.value, 0) : 0

      // The isActive property is only true if the die has a potential
      // score, hasn't been scratched yet, and hasnt been added to the
      // players score yet

      // Need another property to show that it has no score but is scratchable???

      newState.gameBoard = {
        ones: {
          score: ones,
          isActive: !!ones
        },
        twos: {
          score: twos,
          isActive: !!twos
        },
        threes: {
          score: threes,
          isActive: !!threes
        },
        fours: {
          score: fours,
          isActive: !!fours
        },
        fives: {
          score: fives,
          isActive: !!fives
        },
        sixes: {
          score: sixes,
          isActive: !!sixes
        },
        threeOfAKind: {
          score: threeOfAKind,
          isActive: !!threeOfAKind
        },
        fourOfAKind: {
          score: fourOfAKind,
          isActive: !!fourOfAKind
        },
        fullHouse: {
          score: fullHouse,
          isActive: !!fullHouse
        },
        smallStraight: {
          score: smallStraight,
          isActive: !!smallStraight
        },
        largeStraight: {
          score: largeStright,
          isActive: !!largeStright
        },
        yahtzoo: {
          score: yahtzoo,
          isActive: !!yahtzoo
        },
        chance: {
          score: chance,
          isActive: !!chance
        }
      }

      newState.diceBoard.rollsLeft--
      newState.diceBoard.dice = dice
      
      return newState
    
    case 'ADD_SCORE':

      // This only allows for 2 players. Easy to extend this to more in the future
      newState.players[newState.activePlayer]
        .scorecard[action.payload.die] = {
          value: action.payload.score,
          isScratched: false
        }

      newState.activePlayer = newState.activePlayer === 0 ? 1 : 0
      
      // These reset the game pieces to default state
      newState.gameBoard = initialState.gameBoard
      newState.diceBoard = initialState.diceBoard
      // Where is this getting modified requiring an explicit declaration?
      newState.diceBoard.rollsLeft = 3

      return newState
    
    default:
      return state
  }
}

export default calculateScores


