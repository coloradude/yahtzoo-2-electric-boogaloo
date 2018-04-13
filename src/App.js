import React from 'react'
import { connect } from 'react-redux'

import { PlaySquare, 
  FullWidthPlaySquare, 
  PlaySquareRow 
} from './components/playSquares.jsx' 

import {
  RollSquare
} from './components/gameBoard.jsx'

import die1 from './images/die-1.svg'
import die2 from './images/die-2.svg'
import die3 from './images/die-3.svg'
import die4 from './images/die-4.svg'
import die5 from './images/die-5.svg'
import die6 from './images/die-6.svg'

import styles from './css/styles'



const DiceRow = (({dice, toggleDie}) => {
  return dice.map((die, dieIndex) => {
    console.log(die, dieIndex, 'AAAAA')
    return <DiePiece 
      die={die}
      toggleDie={toggleDie}
      dieIndex={dieIndex}
    />
  })
})

const DiePiece = ({die, toggleDie, dieIndex}) => {

  // console.log(die, 'DIEEEEE')

  let dieImage

  switch(die.value) {
    case 1: dieImage = die1 
    break
    case 2: dieImage = die2
    break
    case 3: dieImage = die3
    break
    case 4: dieImage = die4
    break
    case 5: dieImage = die5
    break
    case 6: dieImage = die6
    break
  }

  // Dispatch switch on particular index

  return <img 
    src={dieImage}
    style={die.isReadyToRoll ? styles.isReadyToRoll : styles.disabledDie} 
    onClick={() => toggleDie(dieIndex)}

  />

}

const App = ({
  dice, 
  gameBoard,
  toggleDie, 
  calculateScores, 
  rollsLeft, 
  addScore,
  scores,
  name1,
  name2,
  topCardScores,
  bottomCardScores,
  score1,
  score2,
  players
}) => {

  console.log(dice, 'dice')
  // Drop the decision on scratchable score into component level logic
  // by passing seperate functions depending on state (addScore)


  // This will have to be refactored if we allow for more than 2 players
  const scorecard1 = players[0].scorecard
  const scorecard2 = players[1].scorecard

  return <div style={styles.body}>
    <div style={styles.boardWrapper}>
      <div style={styles.playSquaresWrapper}>
        <div>
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
              name='Chance' 
              rollsLeft={rollsLeft}
              state={gameBoard.chance} 
              score={bottomCardScores.chance}
              addScore={() => addScore(gameBoard.chance.score, 'chance')}
            />
          </PlaySquareRow>
          <PlaySquareRow>
          <FullWidthPlaySquare 
              name='Yahtzoo' 
              rollsLeft={rollsLeft}
              state={gameBoard.yahtzoo} 
              score={bottomCardScores.yahtzoo}
              addScore={() => addScore(gameBoard.yahtzoo.score, 'yahtzoo')}
            />
          </PlaySquareRow>


          <DiceRow 
            dice={dice}
            toggleDie={toggleDie}
          />


          <PlaySquareRow>
            <RollSquare 
            rollsLeft={rollsLeft}
            rollFunc={() => {
              calculateScores(dice)
            }} 
            name='Roll'/>
          </PlaySquareRow>
        </div>
      </div>
      <div style={styles.playerScores}>
        <div style={styles.scoreColumn}>
          <span style={styles.scoreItem}>Hands</span>
          <span style={styles.scoreItem}>Ones</span>
          <span style={styles.scoreItem}>Twos</span>
          <span style={styles.scoreItem}>Threes</span>
          <span style={styles.scoreItem}>Fours</span>
          <span style={styles.scoreItem}>Fives</span>
          <span style={styles.scoreItem}>Sixes</span>
          <span style={styles.scoreItem}>Bonus</span>
          <span style={styles.scoreItem}>3 of a Kind</span>
          <span style={styles.scoreItem}>4 of a Kind</span>
          <span style={styles.scoreItem}>Full House</span>
          <span style={styles.scoreItem}>Sm. Straight</span>
          <span style={styles.scoreItem}>Lg. Straight</span>
          <span style={styles.scoreItem}>Chance</span>
          <span style={styles.scoreItem}>Yahtzoo</span>
          <span style={styles.scoreItem}>Total</span>
        </div>
        <div style={styles.scoreColumn}>
          <span style={styles.scoreItem}>{name1}</span>
          <span style={styles.scoreItem}>{scorecard1.topCard.ones.value ? scorecard1.topCard.ones.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.topCard.twos.value ? scorecard1.topCard.twos.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.topCard.threes.value ? scorecard1.topCard.threes.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.topCard.fours.value ? scorecard1.topCard.fours.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.topCard.fives.value ? scorecard1.topCard.fives.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.topCard.sixes.value ? scorecard1.topCard.sixes.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.bonus ? scorecard1.bonus : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.bottomCard.threeOfAKind.value ? scorecard1.bottomCard.threeOfAKind.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.bottomCard.fourOfAKind.value ? scorecard1.bottomCard.fourOfAKind.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.bottomCard.fullHouse.value ? scorecard1.bottomCard.fullHouse.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.bottomCard.smallStraight.value ? scorecard1.bottomCard.smallStraight.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.bottomCard.largeStraight.value ? scorecard1.bottomCard.largeStraight.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.bottomCard.chance.value ? scorecard1.bottomCard.chance.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard1.bottomCard.yahtzoo.value ? scorecard1.bottomCard.yahtzoo.value : '-'}</span>
          <span style={styles.scoreItem}>{score1}</span>
        </div>
        <div style={styles.scoreColumn}>
          <span style={styles.scoreItem}>{name2}</span>
          <span style={styles.scoreItem}>{scorecard2.topCard.ones.value ? scorecard2.topCard.ones.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.topCard.twos.value ? scorecard2.topCard.twos.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.topCard.threes.value ? scorecard2.topCard.threes.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.topCard.fours.value ? scorecard2.topCard.fours.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.topCard.fives.value ? scorecard2.topCard.fives.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.topCard.sixes.value ? scorecard2.topCard.sixes.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.bonus ? scorecard2.bonus : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.bottomCard.threeOfAKind.value ? scorecard2.bottomCard.threeOfAKind.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.bottomCard.fourOfAKind.value ? scorecard2.bottomCard.fourOfAKind.value: '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.bottomCard.fullHouse.value ? scorecard2.bottomCard.fullHouse.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.bottomCard.smallStraight.value ? scorecard2.bottomCard.smallStraight.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.bottomCard.largeStraight.value ? scorecard2.bottomCard.largeStraight.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.bottomCard.chance.value ? scorecard2.bottomCard.chance.value : '-'}</span>
          <span style={styles.scoreItem}>{scorecard2.bottomCard.yahtzoo.value ? scorecard2.bottomCard.yahtzoo.value: '-'}</span>
          <span style={styles.scoreItem}>{score2}</span>
        </div>
      </div>
    </div>
  </div>
} 

const mapStateToProps = (state) => {
  return {
    dice: state.diceBoard.dice,
    rollsLeft: state.diceBoard.rollsLeft,
    gameBoard: state.gameBoard,
    topCardScores: state.players[state.activePlayer].scorecard.topCard,
    bottomCardScores: state.players[state.activePlayer].scorecard.bottomCard,
    name1: state.players[0].name,
    name2: state.players[1].name,
    score1: state.players[0].scorecard.total,
    score2: state.players[1].scorecard.total,
    players: state.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    calculateScores: (dice) => dispatch({type: 'CALCULATE_VALUES'}),
    addScore: (score, die) => dispatch({type: 'ADD_SCORE', payload: {score, die}}),
    toggleDie: (dieIndex) => dispatch({type: 'TOGGLE_DIE', payload: {dieIndex}})
  }
}


const Yahtzoo = connect(mapStateToProps, mapDispatchToProps)(App)

export default Yahtzoo