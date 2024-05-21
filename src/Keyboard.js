import React from 'react';

const keys= [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER', 'BACKSPACE'
]

const Keyboard = ({ onKeyPress }) => {
    return (
        <div className="keyboard">
            {keys.map((key) => (
                <button key={key} onClick={() => onKeyPress(key)}>{key}</button>
            ))}
        </div>
    );
};

export default Keyboard;