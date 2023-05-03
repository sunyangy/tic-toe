import React from 'react';
import { useState } from 'react';
import Board from './Board';
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentsquares = history[currentMove];

  const handleReset = () => {
    console.log('reset');
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  };
  const moves = history.map((square, move) => {
    let desc;
    if (move > 0) {
      desc = `回到游戏第 ${move} 步`;
    } else {
      desc = `回到游戏开始`;
    }
    return (
      <li key={move}>
        <button className="desc" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });
  return (
    <>
      <div className="game">
        <Board
          xIsNext={xIsNext}
          squares={currentsquares}
          onPlay={handlePlay}
          onReset={handleReset}
        />
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
