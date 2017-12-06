import React from 'react'
import { render } from 'react-dom'
import initialState from './initial-state'
import { createStore } from 'redux'

const scoreCalculator = (state, action) => {
  switch(action.type){
    case 'CALCULATE_VALUES':

  }
}


// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };

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
    margin: '0 5px 5px 5px',
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


const PlaySquare = ({name}) => (
  <div style={styles.playSquare}>{name}</div>
)

const PlaySquareRow = ({children}) => (
  <div style={styles.playSquareRow}>{children}</div>
)

const DiceRoller = ({props}) => (
  <div></div>
)



const rollDice = () => {

}
const RollDiceReduceer = (state, action) => {
  return state
}

const App => (
  <div style={styles.body}>
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
        <PlaySquare onClick={rollDice} name='Roll'/>
      </PlaySquareRow>
    </div>
  </div>
)


  

  // <div style={styles}>
  //   <Hello name="CodeSandbox" />
  //   <h2>Start editing to see some magic happen {'\u2728'}</h2>
  // </div>
}

render(<App 
  styles={styles} 
  value={store.getState()
  rollDice={()=> store.dispatch({type: 'CALCULATE_VALUES'})}
  }/>, document.getElementById('root'))



export default App;
