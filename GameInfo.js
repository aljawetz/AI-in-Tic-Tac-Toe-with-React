import React from 'react';
import { isWinner, isTie } from './GameFunctions';

function GameInfo({ squares, isXNext }) {

    function getGameStatus() {

        let isWinnerX = isWinner(squares);
        if (isWinnerX != null)
            return (isWinnerX ? "X" : "O") + " wins"

        if (isTie(squares)) return "Tie"
        return ("Next player: " + (isXNext ? "X" : "O"))
    }

    return (
        <div className="game-info">{getGameStatus()}</div>
    );
}

export default GameInfo;