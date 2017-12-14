import { connect } from 'react-redux'
import React from 'react'
import calculateScores from './reducers'

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

const PlaySquare = ({name, state: {score, isActive}}) => {

  return <div style={styles.playSquare}>{isActive && score ? `${name} (${score})` : name}</div>
}
  
const RollSquare = ({rollFunc, rollsLeft}) => (
  <div style={styles.playSquare} onClick={rollFunc}>{`Roll(${rollsLeft})`}</div>
)

const PlaySquareRow = ({children}) => (
  <div style={styles.playSquareRow}>{children}</div>
)

const App = ({dice, gameBoard, calculateScores, rollsLeft}) => {

  console.log(gameBoard)

  return <div style={styles.body}>
    <div style={styles.wrapper}>
      <PlaySquareRow style={styles}>
        <PlaySquare name='Ones' state={gameBoard.ones}/>
        <PlaySquare name='Twos' state={gameBoard.twos}/>
        <PlaySquare name='Threes' state={gameBoard.threes}/>
        <PlaySquare name='Fours' state={gameBoard.fours}/>
        <PlaySquare name='Fives' state={gameBoard.fives}/>
        <PlaySquare name='Sixes' state={gameBoard.sixes}/>
      </PlaySquareRow>
      <PlaySquareRow style={styles}>
        <PlaySquare name='3 of a Kind' state={gameBoard.threeOfAKind}/>
        <PlaySquare name='4 of a Kind' state={gameBoard.fourOfAKind}/>
        <PlaySquare name='Full House' state={gameBoard.fullHouse}/>
        <PlaySquare name='Small Straight' state={gameBoard.smallStraight}/>
        <PlaySquare name='Large Straight' state={gameBoard.largeStraight}/>
        <PlaySquare name='Yahtzoo' state={gameBoard.yahtzoo}/>
      </PlaySquareRow>
      <PlaySquareRow>
        <PlaySquare name='Chance' state={gameBoard.chance}/>
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
  console.log(state.diceBoard.rollsLeft, 'rolls left')
  return {
    dice: state.diceBoard.dice,
    rollsLeft: state.diceBoard.rollsLeft,
    gameBoard: state.gameBoard
  }
}

const mapDispatchToProps = dispatch => {
  return {calculateScores: (dice) => dispatch({type: 'CALCULATE_VALUES', dice})}
}


const App1 = connect(mapStateToProps, mapDispatchToProps)(App)

export default App1