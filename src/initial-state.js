const initialState = {
	activePlayer: 0,
	players:[{
		isActive: true,
		name: '',
		scorecard: {
			ones: 0,
			twos: 0,
			threes: 0,
			fours: 0,
			fives: 0,
			sixes: 0,
			threeOfAKind: 0,
			fourOfAKind: 0,
			fullHouse: 0,
			smallStraight: 0,
			largeStraight: 0,
			yahtzee: 0,
			chance: 0,
			bonus: false,
			total: 0
			},
		},{
		isActive: false,
		name: '',
		scorecard: {
			ones: 0,
			twos: 0,
			threes: 0,
			fours: 0,
			fives: 0,
			sixes: 0,
			threeOfAKind: 0,
			fourOfAKind: 0,
			fullHouse: 0,
			smallStraight: 0,
			largeStraight: 0,
			yahtzee: 0,
			chance: 0,
			bonus: false,
			total: 0
		}
	}],
	gameBoard: {
		ones: {
			score: 0,
			isActive: true
		},
		twos: {
			score: 0,
			isActive: true
		},
		threes: {
			score: 0,
			isActive: true
		},
		fours: {
			score: 0,
			isActive: true
		},
		fives: {
			score: 0,
			isActive: true
		},
		sixes: {
			score: 0,
			isActive: true
		},
		threeOfAKind: {
			score: 0,
			isActive: true
		},
		fourOfAKind: {
			score: 0,
			isActive: true
		},
		fullHouse: {
			score: 0,
			isActive: true
		},
		smallStraight: {
			score: 0,
			isActive: true
		},
		largeStraight: {
			score: 0,
			isActive: true
		},
		yahtzoo: {
			score: 0,
			isActive: true
		},
		chance: {
			score: 0,
			isActive: true
		}

	},
	diceBoard: {
		dice:[{
			isReadyToRoll: true,
			value: 0
		},{
			isReadyToRoll: true,
			value: 0
		},{
			isReadyToRoll: true,
			value: 0
		},{
			isReadyToRoll: true,
			value: 0
		},{
			isReadyToRoll: true,
			value: 0
		}],
		rollsLeft: 3
	}
}

export default initialState