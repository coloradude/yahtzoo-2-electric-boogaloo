import React from 'react'
import { render } from 'react-dom'
import initialState from './initial-state'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


const calculateScores = (state, action) => {
  console.log('clicked the button')
  // console.log(state)
  switch(action.type){
    case '': 
      return state

  //   case 'CALCULATE_SCORES':
  //   console.log(state)
  //     console.log('hola')
  //     console.log(state)
  //     const dice = state.diceBoard.dice.map(die => {
  //       console.log(die)
  //       return die.isActive ? 
  //         {value: Math.floor(Math.random() * 6), ...die} :
  //         die
  //     })
    
  default: return state
}
  
}

const store = createStore(calculateScores, initialState)


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
  name
  return <div style={styles.playSquare}>{name}</div>
}
  


const RollSquare = ({rollFunc}) => (
  <div style={styles.playSquare} onClick={rollFunc}>Roll</div>
)

const PlaySquareRow = ({children}) => (
  <div style={styles.playSquareRow}>{children}</div>
)

console.log(store.getState(), 'getState')

const App = (state) => {

  console.log(state, 'kill me now')
  
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
          calculateScores()
          
          // calculateScores(state, {type: 'CALCULATE_SCORES'})
        }} name='Roll'/>
      </PlaySquareRow>
    </div>
  </div>
}



const renderApp = () => {
  // console.log(initialState, 'initial')
  render( 
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'))
}

const mapStateToProps = ({players, gameboard, diceBoard}) => ({
  players,
  gameboard,
  diceBoard
})

const mapDispatchToProps = dispatch => ({
  calculateScores: dice => dispatch(calculateScores({type: 'CALCULATE_VALUES', dice}))
})

connect(mapStateToProps, mapDispatchToProps)(App)


store.subscribe(renderApp)
renderApp()

export default App
