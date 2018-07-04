import React from 'react'
import { connect } from 'react-redux'

import './css/index.css'

import { 
  PlaySquare, 
  FullWidthPlaySquare
} from './components/game-pieces/play-squares/play-squares.jsx'

import DiceRow from './components/lists/dice-row/dice-row.jsx'
import PlaySquareRow from './components/lists/play-square-row/play-square-row.jsx'
import RollSquare from './components/game-pieces/roll-square/roll-square.jsx'
import PlayerNameModal from './components/modals/playerNameModal'
import GameOverModal from './components/modals/gameOverModal'

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
  players,
  updateName,
  initialModal,
  startGame,
  gameOverModal,
  gameOver
}) => {

  // Drop the decision on scratchable score into component level logic
  // by passing seperate functions depending on state (addScore)

  // This will have to be refactored if we allow for more than 2 players
  const scorecard1 = players[0].scorecard
  const scorecard2 = players[1].scorecard

  // if (gameOver) gameOverModal()

  return <div className='container'>
    {initialModal ? <PlayerNameModal
      name1={name1}
      name2={name2}
      updateName = {updateName}
      startGame = {startGame}
    /> : ''}
    {gameOver ? <GameOverModal
      name1={name1}
      name2={name2}
      score1={score1}
      score2={score2}
    />: ''}
    <h1 className='title'>Yahtzoo</h1>
    <div className='boardWrapper'>
      <div className='playSquaresWrapper'>
        <div>
          <PlaySquareRow>
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
          <PlaySquareRow>
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
      <div className='playerScores'>
        <div className='scoreColumn'>
          <span>Hands</span>
          <span>Ones</span>
          <span>Twos</span>
          <span>Threes</span>
          <span>Fours</span>
          <span>Fives</span>
          <span>Sixes</span>
          <span>Bonus</span>
          <span>3 of a Kind</span>
          <span>4 of a Kind</span>
          <span>Full House</span>
          <span>Sm. Straight</span>
          <span>Lg. Straight</span>
          <span>Chance</span>
          <span>Yahtzoo</span>
          <span>Total</span>
        </div>
        <div className='scoreColumn'>
          <span>{name1}</span>
          <span>{scorecard1.topCard.ones.value ? scorecard1.topCard.ones.value : '-'}</span>
          <span>{scorecard1.topCard.twos.value ? scorecard1.topCard.twos.value : '-'}</span>
          <span>{scorecard1.topCard.threes.value ? scorecard1.topCard.threes.value : '-'}</span>
          <span>{scorecard1.topCard.fours.value ? scorecard1.topCard.fours.value : '-'}</span>
          <span>{scorecard1.topCard.fives.value ? scorecard1.topCard.fives.value : '-'}</span>
          <span>{scorecard1.topCard.sixes.value ? scorecard1.topCard.sixes.value : '-'}</span>
          <span>{scorecard1.bonus ? scorecard1.bonus : '-'}</span>
          <span>{scorecard1.bottomCard.threeOfAKind.value ? scorecard1.bottomCard.threeOfAKind.value : '-'}</span>
          <span>{scorecard1.bottomCard.fourOfAKind.value ? scorecard1.bottomCard.fourOfAKind.value : '-'}</span>
          <span>{scorecard1.bottomCard.fullHouse.value ? scorecard1.bottomCard.fullHouse.value : '-'}</span>
          <span>{scorecard1.bottomCard.smallStraight.value ? scorecard1.bottomCard.smallStraight.value : '-'}</span>
          <span>{scorecard1.bottomCard.largeStraight.value ? scorecard1.bottomCard.largeStraight.value : '-'}</span>
          <span>{scorecard1.bottomCard.chance.value ? scorecard1.bottomCard.chance.value : '-'}</span>
          <span>{scorecard1.bottomCard.yahtzoo.value ? scorecard1.bottomCard.yahtzoo.value : '-'}</span>
          <span>{score1}</span>
        </div>
        <div className='scoreColumn'>
          <span>{name2}</span>
          <span>{scorecard2.topCard.ones.value ? scorecard2.topCard.ones.value : '-'}</span>
          <span>{scorecard2.topCard.twos.value ? scorecard2.topCard.twos.value : '-'}</span>
          <span>{scorecard2.topCard.threes.value ? scorecard2.topCard.threes.value : '-'}</span>
          <span>{scorecard2.topCard.fours.value ? scorecard2.topCard.fours.value : '-'}</span>
          <span>{scorecard2.topCard.fives.value ? scorecard2.topCard.fives.value : '-'}</span>
          <span>{scorecard2.topCard.sixes.value ? scorecard2.topCard.sixes.value : '-'}</span>
          <span>{scorecard2.bonus ? scorecard2.bonus : '-'}</span>
          <span>{scorecard2.bottomCard.threeOfAKind.value ? scorecard2.bottomCard.threeOfAKind.value : '-'}</span>
          <span>{scorecard2.bottomCard.fourOfAKind.value ? scorecard2.bottomCard.fourOfAKind.value: '-'}</span>
          <span>{scorecard2.bottomCard.fullHouse.value ? scorecard2.bottomCard.fullHouse.value : '-'}</span>
          <span>{scorecard2.bottomCard.smallStraight.value ? scorecard2.bottomCard.smallStraight.value : '-'}</span>
          <span>{scorecard2.bottomCard.largeStraight.value ? scorecard2.bottomCard.largeStraight.value : '-'}</span>
          <span>{scorecard2.bottomCard.chance.value ? scorecard2.bottomCard.chance.value : '-'}</span>
          <span>{scorecard2.bottomCard.yahtzoo.value ? scorecard2.bottomCard.yahtzoo.value: '-'}</span>
          <span>{score2}</span>
        </div>
      </div>
    </div>
  </div>
} 

const mapStateToProps = state => {
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
    players: state.players,
    initialModal: state.initialModal,
    gameOver: state.gameOver
  }
}

const mapDispatchToProps = dispatch => {
  return {
    calculateScores: dice => dispatch({type: 'CALCULATE_VALUES'}),
    addScore: (score, die) => dispatch({type: 'ADD_SCORE', payload: {score, die}}),
    toggleDie: dieIndex => dispatch({type: 'TOGGLE_DIE', payload: {dieIndex}}),
    updateName: (name, index) => dispatch({type: 'UPDATE_NAME', payload: {name, index}}),
    startGame: () => dispatch({type: 'START_GAME'}),
    gameOverModal: () => dispatch({type: 'GAME_OVER'})
  }
}


const Yahtzoo = connect(mapStateToProps, mapDispatchToProps)(App)

export default Yahtzoo