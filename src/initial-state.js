const initialState = {
	players:[{
		name: '',
		scorecard: {
			upperSection: {
				ones: 0,
				twos: 0,
				threes: 0,
				fours: 0,
				fives: 0,
				sixes: 0,
			},
			lowerSection: {
				threeOfAKind: 0,
				fourOfAKind: 0,
				fullHouse: 0,
				smallStraight: 0,
				largeStraight: 0,
				yahtzee: 0,
				chance: 0,
			},
			bonus: false,
			total: 0
		}
	},{
		name: '',
		scorecard: {
			upperSection: {
				ones: 0,
				twos: 0,
				threes: 0,
				fours: 0,
				fives: 0,
				sixes: 0,
			},
			lowerSection: {
				threeOfAKind: 0,
				fourOfAKind: 0,
				fullHouse: 0,
				smallStraight: 0,
				largeStraight: 0,
				yahtzee: 0,
				chance: 0,
			},
			bonus: false,
			total: 0
		}
	}],
	gameBoard: {
		ones: {
			score: 1,
			isActive: true
		},
		twos: {
			score: 1,
			isActive: true
		},
		threes: {
			score: 1,
			isActive: true
		},
		fours: {
			score: 1,
			isActive: true
		},
		fives: {
			score: 1,
			isActive: true
		},
		sixes: {
			score: 1,
			isActive: true
		},
		threeOfAKind: {
			score: 1,
			isActive: true
		},
		fourOfAKind: {
			score: 1,
			isActive: true
		},
		fullHouse: {
			score: 1,
			isActive: true
		},
		smallStraight: {
			score: 1,
			isActive: true
		},
		largeStraight: {
			score: 1,
			isActive: true
		},
		yahtzee: {
			score: 1,
			isActive: true
		},
		chance: {
			score: 1,
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