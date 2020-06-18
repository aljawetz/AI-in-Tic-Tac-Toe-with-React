import React from 'react';
import './JogoDaVelha.css';

function Square({ isXNext, onClick }) {

    let mark = '';
    if (isXNext != null)
        mark = isXNext ? "X" : "O";

    return (
        <div className="square" onClick={onClick}>{mark}</div>
    );
}

export default Square;
