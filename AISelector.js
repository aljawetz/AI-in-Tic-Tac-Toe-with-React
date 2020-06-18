import React from 'react';
import './JogoDaVelha.css';

function AISelector({ onChange }) {

    return (
        <div className="ai-selector">
            <span>AI Selector:</span>
            <label className="ai-checkbox">X
                    <input type="checkbox" onChange={() => onChange(0)} />
            </label>
            <label className="ai-checkbox">O
                    <input type="checkbox" onChange={() => onChange(1)} />
            </label>
        </div>
    );
}
export default AISelector;