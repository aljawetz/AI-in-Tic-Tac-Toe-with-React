import React from 'react';
import Square from './Square.js';
import './JogoDaVelha.css';

function Board({ squares, onClick }) {

    function renderSquare(i) {
        return (
            <Square
                isXNext={squares[i]}
                onClick={() => onClick(i)}
            />
        );
    }

    return (
        <div className="game-board">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}

            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}

            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    );
}
export default Board;