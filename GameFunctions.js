export function isWinner(squares) {
    const winsLines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < winsLines.length; i++) {
        const [a, b, c] = winsLines[i];
        if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a];
    }
    return null;
}

export function isTie(squares) {
    for (let i = 0; i < squares.length; i++)
        if (squares[i] === null)
            return false;
    return true;
}