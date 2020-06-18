import React, { useState } from 'react';

import Board from './Board.js';
import { isWinner, isTie } from './GameFunctions';
import GameInfo from './GameInfo';
import AI from './AI';
import AISelector from './AISelector';
import './JogoDaVelha.css';

function JogoDaVelha() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [aiPlayers, setAiPlayers] = useState([false, false]);

    const isEmpty = i => (squares[i] === null);
    const isAiTurn = () => {
        if (aiPlayers[0] && isXNext) return true;
        if (aiPlayers[1] && !isXNext) return true;
        else return false;
    }

    function handleClick(i) {
        if (isWinner(squares) != null) return;

        if (!isAiTurn()) {
            if (isEmpty(i)) {
                squares[i] = isXNext;
                setSquares(squares);
                setIsXNext(!isXNext);
            }
        }
    }

    function aiPlay() {
        if (isWinner(squares) != null || isTie(squares)) return;
        squares[AI(squares, isXNext)] = isXNext;
        setSquares(squares);
        setIsXNext(!isXNext);
    }

    function startOver() {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    }

    function handleChange(i) {
        aiPlayers[i] = !aiPlayers[i];
        setAiPlayers(aiPlayers);
    }

    return (
        <div className="game">
            <GameInfo squares={squares} isXNext={isXNext} />
            <Board
                squares={squares}
                onClick={i => handleClick(i)}
            />
            {isAiTurn() && aiPlay()}

            <div className="game-options">
                <AISelector onChange={i => handleChange(i)} />
                <button className="start-over-button" onClick={startOver}>Start over</button>
            </div>
        </div>
    );
}

export default JogoDaVelha;