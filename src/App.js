import React, { useState, useEffect } from 'react';
import WordGrid from './WordGrid';
import Keyboard from './Keyboard';
import './App.css';

const words = ["apple", "berry", "charm", "delta", "eagle"]; // Add more words

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const [targetWord, setTargetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');

  useEffect(() => {
    console.log(targetWord); // For testing purposes
  }, [targetWord]);

  const handleKeyPress = (letter) => {
    if (letter === 'ENTER') {
      if (currentGuess.length === 5) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess('');
      }
    } else if (letter === 'BACKSPACE') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  return (
    <div className="App">
      <h1>LetterQuest</h1>
      <WordGrid guesses={guesses} targetWord={targetWord} />
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default App;