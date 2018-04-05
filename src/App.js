import { connect } from 'react-redux'
import React from 'react'
import styles from './css/styles'

// Need to disable scores that have been scratched but can still show value for now

const PlaySquare = ({
  name, 
  state: {
    score, 
    isActive 
  }, 
  rollsLeft, 
  addScore
}) => {
  return <div 
    style={isActive && rollsLeft < 3 ? styles.playSquare: styles.inactiveSquare} 
    onClick={rollsLeft >= 0 && isActive ? addScore : () => {}}
  >
    {isActive && score && score !== -1 ? `${name} (${score})` : name}
  </div>
}
  
const RollSquare = ({
  rollFunc, 
  rollsLeft
}) => {
  return <div 
    style={styles.playSquare} 
    onClick={rollsLeft > 0 ? rollFunc : null}>{rollsLeft > 0 ? `Roll(${rollsLeft})` : 'Scratch or Score'}
  </div>
}

const PlaySquareRow = ({children}) => (
  <div style={styles.playSquareRow}>{children}</div>
)

const App = ({
  dice, 
  gameBoard, 
  calculateScores, 
  rollsLeft, 
  addScore,
  scores,
  name1,
  name2,
  topCardScores,
  bottomCardScores,
  score1,
  score2
}) => {
  // Drop the decision on scratchable score into component level logic
  // by passing seperate functions depending on state (addScore)
  console.log(score1, 'total')
  return <div style={styles.body}>
    <div style={styles.playerScores}>
      <div >{name1 + ' ' + score1}</div>
      <div >{name2 + ' ' + score2}</div>
    </div>
    <div style={styles.wrapper}>
      <PlaySquareRow style={styles}>
      {/*  this needs to be a map */}
        <PlaySquare 
          name='Ones' 
          rollsLeft={rollsLeft}
          state={gameBoard.ones} 
          score={topCardScores.ones}
          addScore={() => addScore(gameBoard.ones.score, 'ones')}
        />
        <PlaySquare 
          name='Twos' 
          rollsLeft={rollsLeft}
          state={gameBoard.twos} 
          score={topCardScores.twos}
          addScore={() => addScore(gameBoard.twos.score, 'twos')}
        />
        <PlaySquare 
          name='Threes' 
          rollsLeft={rollsLeft}
          state={gameBoard.threes} 
          score={topCardScores.threes}
          addScore={() => addScore(gameBoard.threes.score, 'threes')}
        />
        <PlaySquare 
          name='Fours' 
          rollsLeft={rollsLeft}
          state={gameBoard.fours} 
          score={topCardScores.fours}
          addScore={() => addScore(gameBoard.fours.score, 'fours')}
        />
        <PlaySquare 
          name='Fives' 
          rollsLeft={rollsLeft}
          state={gameBoard.fives} 
          score={topCardScores.fives}
          addScore={() => addScore(gameBoard.fives.score, 'fives')}
        />
        <PlaySquare 
          name='Sixes' 
          rollsLeft={rollsLeft}
          state={gameBoard.sixes} 
          score={topCardScores.sixes}
          addScore={() => addScore(gameBoard.sixes.score, 'sixes')}
        />
      </PlaySquareRow>
      <PlaySquareRow style={styles}>
        <PlaySquare 
          name='3 of a Kind' 
          rollsLeft={rollsLeft}
          state={gameBoard.threeOfAKind} 
          score={bottomCardScores.threeOfAKind}
          addScore={() => addScore(gameBoard.threeOfAKind.score, 'threeOfAKind')}
        />
        <PlaySquare 
          name='4 of a Kind' 
          rollsLeft={rollsLeft}
          state={gameBoard.fourOfAKind} 
          score={bottomCardScores.fourOfAKind}
          addScore={() => addScore(gameBoard.fourOfAKind.score, 'fourOfAKind')}
        />
        <PlaySquare 
          name='Full House' 
          rollsLeft={rollsLeft}
          state={gameBoard.fullHouse} 
          score={bottomCardScores.fullHouse}
          addScore={() => addScore(gameBoard.fullHouse.score, 'fullHouse')}
        />
        <PlaySquare 
          name='Small Straight' 
          rollsLeft={rollsLeft}
          state={gameBoard.smallStraight} 
          score={bottomCardScores.smallStraight}
          addScore={() => addScore(gameBoard.smallStraight.score, 'smallStraight')}
        />
        <PlaySquare 
          name='Large Straight' 
          rollsLeft={rollsLeft}
          state={gameBoard.largeStraight} 
          score={bottomCardScores.largeStraight}
          addScore={() => addScore(gameBoard.largeStraight.score, 'largeStraight')}
        />
        <PlaySquare 
          name='Yahtzoo' 
          rollsLeft={rollsLeft}
          state={gameBoard.yahtzoo} 
          score={bottomCardScores.yahtzoo}
          addScore={() => addScore(gameBoard.yahtzoo.score, 'yahtzoo')}
        />
      </PlaySquareRow>
      <PlaySquareRow>
        <PlaySquare 
          name='Chance' 
          rollsLeft={rollsLeft}
          state={gameBoard.chance} 
          score={bottomCardScores.chance}
          addScore={() => addScore(gameBoard.chance.score, 'chance')}
        />
      </PlaySquareRow>
      <PlaySquareRow>
        <RollSquare 
        rollsLeft={rollsLeft}
        rollFunc={() => {
          console.log(dice, 'inside rollfunc')
          // console.log('oh shit waddup', state)
          calculateScores(dice)
          
          // calculateScores(state, {type: 'CALCULATE_SCORES'})
        }} name='Roll'/>
      </PlaySquareRow>
    </div>
  </div>
} 

const mapStateToProps = (state) => {
  console.log()
  return {
    dice: state.diceBoard.dice,
    rollsLeft: state.diceBoard.rollsLeft,
    gameBoard: state.gameBoard,
    topCardScores: state.players[state.activePlayer].scorecard.topCard,
    bottomCardScores: state.players[state.activePlayer].scorecard.bottomCard,
    name1: state.players[0].name,
    name2: state.players[1].name,
    score1: state.players[0].scorecard.total,
    score2: state.players[1].scorecard.total
  }
}

const mapDispatchToProps = dispatch => {
  return {
    calculateScores: (dice) => dispatch({type: 'CALCULATE_VALUES'}),
    addScore: (score, die) => dispatch({type: 'ADD_SCORE', payload: {score, die}})
  }
}


const Yahtzoo = connect(mapStateToProps, mapDispatchToProps)(App)

export default Yahtzoo