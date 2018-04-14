const initialState = {
    activePlayer: 0,
    players:[{
        isActive: true,
        name: 'One',
        scorecard: {
            topCard: {
                ones: {
                    value: 0,
                    isScratched: false
                },
                twos: {
                    value: 0,
                    isScratched: false
                },
                threes: {
                    value: 0,
                    isScratched: false
                },
                fours: {
                    value: 0,
                    isScratched: false
                },
                fives: {
                    value: 0,
                    isScratched: false
                },
                sixes: {
                    value: 0,
                    isScratched: false
                }
            },

            bottomCard: {

                threeOfAKind: {
                    value: 0,
                    isScratched: false
                },
                fourOfAKind: {
                    value: 0,
                    isScratched: false
                },
                fullHouse: {
                    value: 0,
                    isScratched: false
                },
                smallStraight: {
                    value: 0,
                    isScratched: false
                },
                largeStraight: {
                    value: 0,
                    isScratched: false
                },
                chance: {
                    value: 0,
                    isScratched: false
                },
                yahtzoo: {
                    value: 0,
                    isScratched: false
                }
            },
            
                bonus: false,
                total: 0
            }
        },{
        isActive: false,
        name: 'Two',
        scorecard: {
            topCard: {
                ones: {
                    value: 0,
                    isScratched: false
                },
                twos: {
                    value: 0,
                    isScratched: false
                },
                threes: {
                    value: 0,
                    isScratched: false
                },
                fours: {
                    value: 0,
                    isScratched: false
                },
                fives: {
                    value: 0,
                    isScratched: false
                },
                sixes: {
                    value: 0,
                    isScratched: false
                }
            },

            bottomCard: {

                threeOfAKind: {
                    value: 0,
                    isScratched: false
                },
                fourOfAKind: {
                    value: 0,
                    isScratched: false
                },
                fullHouse: {
                    value: 0,
                    isScratched: false
                },
                smallStraight: {
                    value: 0,
                    isScratched: false
                },
                largeStraight: {
                    value: 0,
                    isScratched: false
                },
                chance: {
                    value: 0,
                    isScratched: false
                },
                yahtzoo: {
                    value: 0,
                    isScratched: false
                }
            },

            bonus: false,
            total: 0
        

        }
        
    }],
    gameBoard: {
        ones: {
            score: 0,
            isActive: false
        },
        twos: {
            score: 0,
            isActive: false
        },
        threes: {
            score: 0,
            isActive: false
        },
        fours: {
            score: 0,
            isActive: false
        },
        fives: {
            score: 0,
            isActive: false
        },
        sixes: {
            score: 0,
            isActive: false
        },
        threeOfAKind: {
            score: 0,
            isActive: false
        },
        fourOfAKind: {
            score: 0,
            isActive: false
        },
        fullHouse: {
            score: 0,
            isActive: false
        },
        smallStraight: {
            score: 0,
            isActive: false
        },
        largeStraight: {
            score: 0,
            isActive: false
        },
        yahtzoo: {
            score: 0,
            isActive: false
        },
        chance: {
            score: 0,
            isActive: false
        }

    },
    diceBoard: {
        dice:[{
            isReadyToRoll: true,
            value: 1
        },{
            isReadyToRoll: true,
            value: 1
        },{
            isReadyToRoll: true,
            value: 1
        },{
            isReadyToRoll: true,
            value: 1
        },{
            isReadyToRoll: true,
            value: 1
        }],
        rollsLeft: 3
    }
}

export default initialState