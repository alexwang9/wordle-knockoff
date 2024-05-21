import React from 'react';
import Letter from './Letter';

const getLetterStatus = (letter, index, targetWord) => {
    if (targetWord[index] === letter) {
        return 'correct';
    } else if (targetWord.includes(letter)) {
        return 'present';
    } else {
        return 'absent';
    }
};

const WordGrid = ({ guesses, targetWord }) => {
    return (
        <div className="word-grid">
            {guesses.map((guess, i) => (
                <div key={i} className="word-row">
                    {guess.split('').map((letter, j) => (
                        <Letter key={j} letter={letter} status={getLetterStatus(letter, j, targetWord)} />
                    ))}
                </div>
            ))}
            {[...Array(6 - guesses.length)].map((_, i) => (
                <div key={i} className="word-row">
                    {[...Array(5)].map((_, j) => (
                        <Letter key={j} letter="" status="empty" />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default WordGrid;