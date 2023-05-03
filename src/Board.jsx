import React from 'react';
import { useState } from 'react';
import Square from './Square';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board({ xIsNext, squares, onPlay, onReset }) {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'x';
    } else {
      nextSquares[i] = 'o';
    }

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `赢家是： ${winner}`;
  } else if (!winner && squares.every((e) => e)) {
    status = '和棋';
  } else {
    status = `${xIsNext ? 'x' : 'o'}` + ' 玩家请下棋';
  }
  return (
    <>
      <div className="board">
        <div className="board-container">
          <div className="square-container">
            {squares.map((i, index) => {
              return (
                <Square
                  key={index}
                  value={i}
                  onSquareClick={() => handleClick(index)}
                ></Square>
              );
            })}
          </div>
        </div>
        <div className="winner">{status}</div>
        <button className="restart" onClick={onReset}>
          重新开始游戏
        </button>
      </div>
    </>
  );
}
