import { useState } from "react";

import N from "./nodes";

function calculateWinner(squares: any[]) {
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

let getLocation = (step: number) => {
  if (step === 0) {
    return { col: -1, row: -1 };
  }
  let col = (step % 3) + 1;
  let row = (step - (step % 3)) / 3 + 1;
  return { col, row };
};

const Square = (props: any) => {
  const { index } = props;

  return (
    <button className="square" onClick={() => props.onClick(index)}>
      {props.squares[index]}
    </button>
  );
};

const Board = (props: any) => {
  return (
    <div>
      <div className="board-row">
        <Square {...props} index={0} />
        <Square {...props} index={1} />
        <Square {...props} index={2} />
      </div>
      <div className="board-row">
        <Square {...props} index={3} />
        <Square {...props} index={4} />
        <Square {...props} index={5} />
      </div>
      <div className="board-row">
        <Square {...props} index={6} />
        <Square {...props} index={7} />
        <Square {...props} index={8} />
      </div>
    </div>
  );
};

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      location: 0,
    },
  ]);

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const _history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(
      _history.concat([
        {
          squares: squares,
          location: i,
        },
      ])
    );
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    const { col, row } = getLocation(step.location);
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
        <span>
          ({col},{row})
        </span>
      </li>
    );
  });

  return (
    <N.Page>
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i: number) => handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </N.Page>
  );
};

export default Game;
