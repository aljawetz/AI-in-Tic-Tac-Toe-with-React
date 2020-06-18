import { isTie, isWinner } from './GameFunctions';

function minimax(squares, isX, isMaximazer = false) {

    let ai = isMaximazer ? isX : !isX;

    let winner = isWinner(squares);
    if (winner != null)
        if (ai === winner) return 1;
        else return -1;

    if (isTie(squares)) return 0;


    let bestScore = isMaximazer ? -Infinity : Infinity;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {

            squares[i] = isX;
            let thisScore = minimax(squares, !isX, !isMaximazer);
            squares[i] = null;

            bestScore = isMaximazer ? Math.max(thisScore, bestScore) : Math.min(thisScore, bestScore);
        }
    }
    return bestScore;
}

function AI(squares, ai) {
    let bestMove;
    let bestScore = -Infinity;

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {

            squares[i] = ai;
            let thisScore = minimax(squares, !ai);
            squares[i] = null;

            if (thisScore === 1) return i;

            if (thisScore > bestScore) {
                bestScore = thisScore;
                bestMove = i;
            }
        }
    }
    return bestMove;
}
export default AI;