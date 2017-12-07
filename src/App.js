import React from 'react'
import { render } from 'react-dom'
import initialState from './initial-state'
import { createStore } from 'redux'

const calculateScores = (state = initialState, action) => {
  console.log('clicked the button')
  switch(action.type){
    case 'CALCULATE_SCORES':

      console.log('hola')
      console.log(state)
      const dice = state.diceBoard.dice.map(die => {
        console.log(die)
        return die.isActive ? 
          {value: Math.floor(Math.random() * 6), ...die} :
          die
      })
  }
}

const store = createStore(calculateScores)

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

const PlaySquare = ({name}) => (
  <div style={styles.playSquare}>{name}</div>
)

const PlaySquareRow = ({children}) => (
  <div style={styles.playSquareRow}>{children}</div>
)

const App = ({state}) => {
  console.log(state, 'this is state')
  
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
        <PlaySquare onClick={() => {
          console.log('oh shit waddup')
          calculateScores(state, {type: 'CALCULATE_SCORES'})
        }} name='Roll'/>
      </PlaySquareRow>
    </div>
  </div>
}

const renderApp = () => {
  // console.log(initialState, 'initial')
  render(
    <App 
    styles={styles} 
    state={store.getState() ? store.getState() : initialState}
    // calculateScores={(state)=> store.dispatch(state, {type: 'CALCULATE_SCORES'})}
    />, document.getElementById('root')
  )
}

store.subscribe(renderApp)
renderApp()


export default App;
