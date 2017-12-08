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

const PlaySquare = ({name}) => {
  return <div style={styles.playSquare}>{name}</div>
}
  
const RollSquare = ({rollFunc}) => (
  <div style={styles.playSquare} onClick={rollFunc}>Roll</div>
)

const PlaySquareRow = ({children}) => (
  <div style={styles.playSquareRow}>{children}</div>
)

const App = ({dice, calculateScores}) => {

  // console.log(state, 'App component')

  return <div style={styles.body}>
    <div style={styles.wrapper}>
      <PlaySquareRow style={styles}>
        <PlaySquare name='Ones'/>
        <PlaySquare name='Twos' />
        <PlaySquare name='Threes' />
        <PlaySquare name='Fours' />
        <PlaySquare name='Fives' />
        <PlaySquare name='Sixes' />
      </PlaySquareRow>
      <PlaySquareRow style={styles}>
        <PlaySquare name='3 of a Kind' />
        <PlaySquare name='4 of a Kind' />
        <PlaySquare name='Full House' />
        <PlaySquare name='Small Straight' />
        <PlaySquare name='Large Straight' />
        <PlaySquare name='Yahtzoo' />
      </PlaySquareRow>
      <PlaySquareRow>
        <PlaySquare name='Chance' />
      </PlaySquareRow>
      <PlaySquareRow>
        <RollSquare rollFunc={() => {
          // console.log('oh shit waddup', state)
          calculateScores(dice, calculateScores)
          
          // calculateScores(state, {type: 'CALCULATE_SCORES'})
        }} name='Roll'/>
      </PlaySquareRow>
    </div>
  </div>
} 

const mapStateToProps = (state) => {
  console.log(state, 'wtf yo')
  return {
    dice: state.diceBoard.dice
  }
}

const mapDispatchToProps = dispatch => {
  return {calculateScores: (dice) => dispatch({type: 'CALCULATE_VALUES', dice})}
}


const App1 = connect(mapStateToProps, mapDispatchToProps)(App)

export default App1