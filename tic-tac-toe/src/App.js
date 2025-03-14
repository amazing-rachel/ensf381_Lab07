import logo from './logo.svg';
import './App.css';
import { useState } from "react";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

/*
function Square() {
  return (
  <>
  <div className="board-row">
  <button className="square">1</button>
  <button className="square">2</button>
  <button className="square">3</button>
  </div>
  <div className="board-row">
  <button className="square">4</button>
  <button className="square">5</button>
  <button className="square">6</button>
  </div>
  <div className="board-row">
  <button className="square">7</button>
  <button className="square">8</button>
  <button className="square">9</button>
  </div>
  </>
  );
  }*/

  /*
function Square({ value }) {
  return <button className="square">{value}</button>;
}*/

/*
function Square({ value }) {
function handleClick() {
console.log('clicked!');
}
return (
<button
className="square"
onClick={handleClick}
>
{value}
</button>
);
}*/


/*
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
  setValue('X');
  }
  return (
  <button
  className="square"
  onClick={handleClick}
  >
  {value}
  </button>
  );
  }*/

  /*
  function Square({ value }) {   
    return <button className="square">{value}</button>;
    }*/
   
function Square({ value, onSquareClick }) {
  return (
  <button className="square" onClick={onSquareClick}>
  {value}
  </button>);
  }
  

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {  
      return;      
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    }
      
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
    status = 'Winner: ' + winner;
    } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    
  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </>
  );
  }


function calculateWinner(squares) {
  const lines = [
  [0, 1, 2], // Horizontal rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal lines
  [2, 4, 6],
  ];
  // Check each line for a winner
  for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  return squares[a]; // Return the winning symbol ('X' or 'O')
  }
  }
  return null; // No winner
  }
  


/*
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
  <>
  <div className="board-row">
  <Square />
  <Square />
  <Square />
  </div>
  <div className="board-row">
  <Square />
  <Square />
  <Square />
  </div>
  <div className="board-row">
  <Square />
  <Square />
  <Square />
  </div>
  </>
  );
  }*/
  
