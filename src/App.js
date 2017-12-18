import { connect } from 'react-redux'
import React from 'react'

const styles = {
  body: {
    height: '100vh',
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    backgroundColor: '#d03c28'
  },
  playSquareRow: {
    display: 'flex',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '10px 0',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',

  },
  playSquare: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '50px',
    minWidth: '50px',
    height: '50px',
    margin: '0 5px 0 5px',
    border: '3px #fff solid',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '3px'
  },

  chance: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
  // fontFamily: 'sans-serif',
  // textAlign: 'center',
  // display: 'flex'
}

// When you click addScore it should switch add score to current players 
// scoreboard and switch to next player

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
    style={styles.playSquare} 
    onClick={rollsLeft > 0 ? addScore : () => {}}>{isActive && score ? `${name} (${score})` : name}
  </div>
}
  
const RollSquare = ({
  rollFunc, 
  rollsLeft
}) => {
  return <div 
    style={styles.playSquare} 
    onClick={rollsLeft > 0 ? rollFunc : () => {}}>{`Roll(${rollsLeft})`}
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
  scores
}) => {

  return <div style={styles.body}>
    <div style={styles.wrapper}>
      <PlaySquareRow style={styles}>
      {/*  this needs to be a map */}
        <PlaySquare 
          name='Ones' 
          rollsLeft={rollsLeft}
          state={gameBoard.ones} 
          score={scores.ones}
          addScore={() => addScore(gameBoard.ones.score, 'ones')}
        />
        <PlaySquare 
          name='Twos' 
          rollsLeft={rollsLeft}
          state={gameBoard.twos} 
          score={scores.twos}
          addScore={() => addScore(gameBoard.twos.score, 'twos')}
        />
        <PlaySquare 
          name='Threes' 
          rollsLeft={rollsLeft}
          state={gameBoard.threes} 
          score={scores.threes}
          addScore={() => addScore(gameBoard.threes.score, 'threes')}
        />
        <PlaySquare 
          name='Fours' 
          rollsLeft={rollsLeft}
          state={gameBoard.fours} 
          score={scores.fours}
          addScore={() => addScore(gameBoard.fours.score, 'fours')}
        />
        <PlaySquare 
          name='Fives' 
          rollsLeft={rollsLeft}
          state={gameBoard.fives} 
          score={scores.fives}
          addScore={() => addScore(gameBoard.fives.score, 'fives')}
        />
        <PlaySquare 
          name='Sixes' 
          rollsLeft={rollsLeft}
          state={gameBoard.sixes} 
          score={scores.sixes}
          addScore={() => addScore(gameBoard.sixes.score, 'sixes')}
        />
      </PlaySquareRow>
      <PlaySquareRow style={styles}>
        <PlaySquare 
          name='3 of a Kind' 
          rollsLeft={rollsLeft}
          state={gameBoard.threeOfAKind} 
          score={scores.threeOfAKind}
          addScore={() => addScore(gameBoard.threeOfAKind.score, 'threeOfAKind')}
        />
        <PlaySquare 
          name='4 of a Kind' 
          rollsLeft={rollsLeft}
          state={gameBoard.fourOfAKind} 
          score={scores.fourOfAKind}
          addScore={() => addScore(gameBoard.fourOfAKind.score, 'fourOfAKind')}
        />
        <PlaySquare 
          name='Full House' 
          rollsLeft={rollsLeft}
          state={gameBoard.fullHouse} 
          score={scores.fullHouse}
          addScore={() => addScore(gameBoard.fullHouse.score, 'fullHouse')}
        />
        <PlaySquare 
          name='Small Straight' 
          rollsLeft={rollsLeft}
          state={gameBoard.smallStraight} 
          score={scores.smallStraight}
          addScore={() => addScore(gameBoard.smallStraight.score, 'smallStraight')}
        />
        <PlaySquare 
          name='Large Straight' 
          rollsLeft={rollsLeft}
          state={gameBoard.largeStraight} 
          score={scores.largeStraight}
          addScore={() => addScore(gameBoard.largeStraight.score, 'largeStraight')}
        />
        <PlaySquare 
          name='Yahtzoo' 
          rollsLeft={rollsLeft}
          state={gameBoard.yahtzoo} 
          score={scores.yahtzoo}
          addScore={() => addScore(gameBoard.yahtzoo.score, 'yahtzoo')}
        />
      </PlaySquareRow>
      <PlaySquareRow>
        <PlaySquare 
          name='Chance' 
          rollsLeft={rollsLeft}
          state={gameBoard.chance} 
          score={scores.chance}
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
  return {
    dice: state.diceBoard.dice,
    rollsLeft: state.diceBoard.rollsLeft,
    gameBoard: state.gameBoard,
    scores: state.players[state.activePlayer]
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