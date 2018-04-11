const styles = {
    body: {
        height: '100vh',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        backgroundColor: '#d03c28'
    },

    boardWrapper: {
        display: 'flex'
    },

    playSquaresWrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%'
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

    inactiveSquare: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '50px',
        minWidth: '50px',
        height: '50px',
        margin: '0 5px 0 5px',
        border: '3px #fff solid',
        cursor: 'not-allowed',
        padding: '10px',
        borderRadius: '3px',
        opacity: .65
    },

    chance: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    scoreTableHeader: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    playerScores: {
        display: 'flex',
        width: '50%'
    },

    scoreTable: {
        display: 'flex'
    },

    scoreItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        fontFamily: 'sans-serif',
        color: '#fff',
        padding: '3px 0'
    },

    scoreColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '33.333%'
    },

    fullWidthPlaySquare: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '50px',
        height: '50px',
        margin: '0 5px 0 5px',
        border: '3px #fff solid',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '3px',
        width: '100%'
    },

    fullWidthInactiveSquare: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '50px',
        height: '50px',
        margin: '0 5px 0 5px',
        border: '3px #fff solid',
        cursor: 'not-allowed',
        padding: '10px',
        borderRadius: '3px',
        opacity: .65,
        width: '100%'
    }
}

export default styles