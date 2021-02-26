import React, { useState, useRef, useEffect } from "react";
import Controls from './Controls'
import Grid from './Grid'

import "./Game.css";

let BOARD;
let TIMEOUT;
const CELL_SIZE = 20;



const makeEmptyBoard = (cols, rows) => {
  let board = [];
  for (let y = 0; y < rows; y++) {
    board[y] = [];
    for (let x = 0; x < cols; x++) {
      board[y][x] = false;
    }
  }

  return board;
};

const calculateNeighbors = (board, x, y, rows, cols) => {
  let neighbors = 0;

  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    let y1 = y + dir[0];
    let x1 = x + dir[1];

    if (x1 < 0) x1 = cols - 1;
    if (y1 < 0) y1 = rows - 1;
    // if (x1 < 0) continue
    // if (y1 < 0) continue

    if (x1 < cols && y1 < rows && board[y1][x1]) {
      neighbors++;
    }
  }

  return neighbors;
};

const getElementOffset = (boardRef) => {
  const rect = boardRef.current.getBoundingClientRect();
  const doc = document.documentElement;

  return {
    x: rect.left + window.pageXOffset - doc.clientLeft,
    y: rect.top + window.pageYOffset - doc.clientTop,
  };
};



const Game = ({}) => {
  let boardRef = useRef(null);

  let [isRunning, setRunning] = useState(false),
    [speed, setSpeed] = useState(100),
    [rows, setRows] = useState(30),
    [cols, setColumns] = useState(30);

  BOARD = BOARD || makeEmptyBoard(rows, cols);
  window.board = BOARD
  useEffect(() => {
    BOARD = makeEmptyBoard(rows, cols);
  }, [cols, rows]);

  const makeCells = (rows, cols) => {
    let cells = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (BOARD[y][x]) {
          cells[`${x},${y}`] = true;
        }
      }
    }
    return cells;
  };
  let [cells, setCells] = useState([]);


  const toggleCells = (event) => {
    const elemOffset = getElementOffset(boardRef);
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;

    const x = Math.floor(offsetX / CELL_SIZE);
    const y = Math.floor(offsetY / CELL_SIZE);

    if (x >= 0 && x <= cols && y >= 0 && y <= rows) {
      BOARD[y][x] = !BOARD[y][x];
    }
    setCells(makeCells(rows, cols));

  }
  const handleMouseMove = (event) => {
    if (event.shiftKey) toggleCells(event)
  }


  const handleClick = (event) => {
    toggleCells(event)
  };

  const runGame = () => {
    setRunning(true);
    runIteration();
  };

  const stopGame = () => {
    setRunning(false);
    if (TIMEOUT) {
      window.clearTimeout(TIMEOUT);
      TIMEOUT = void 0;
    }
  };

  const runIteration = () => {
    let newBoard = makeEmptyBoard(rows, cols);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let neighbors = calculateNeighbors(BOARD, x, y, rows, cols);
        if (BOARD[y][x]) {
            newBoard[y][x] = neighbors === 2 || neighbors === 3
        } else {
            newBoard[y][x] = !BOARD[y][x] && neighbors === 3
        }
      }
    }

    BOARD = newBoard;
    setCells(makeCells(rows, cols));
    TIMEOUT = window.setTimeout(runIteration, speed);
  };

  const handleIntervalChange = (event) => {
    setSpeed(event.target.value);
  };

  const handleColumnChange = (event) => {
    setColumns(event.target.value);
  };
  const handleRowChange = (event) => {
    setRows(event.target.value);
  };


  const handleClear = () => {
    BOARD = makeEmptyBoard(rows, cols);
    setCells(makeCells(rows, cols));
  };

  const handleRandom = () => {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        BOARD[y][x] = Math.random() >= 0.4;
      }
    }
    setCells(makeCells(rows, cols));
  };

  const handleResize = () => {
    const height = window.innerHeight - 55; //TODO - calculate dynamically using offsetHeight
    setRows((height / CELL_SIZE) | 0);
    setColumns((window.innerWidth / CELL_SIZE) | 0);

  };

let controlProps = {
  speed,
  handleIntervalChange,
  rows,
  handleRowChange,
  cols,
  handleColumnChange,
  isRunning,
  stopGame,
  runGame,
  handleRandom,
  handleClear,
  handleResize,
}

const gridProps = {
  handleClick,
  handleMouseMove,
  board:BOARD,
  boardRef,
  cols,
  rows,
  speed,
  cells,
  cell_size: CELL_SIZE
}

  return (
    <div className="bg-gray-100 shadow h-full">
    <nav className="bg-gradient-to-r from-light-blue-800 to-cyan-600 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0 text-white">
              Conway's Game of Life
            </div>
            <Controls {...controlProps}></Controls>
          </div>
        </div>
      </div>
    </nav>
      <Grid {...gridProps}></Grid>
  </div>
  );
};


export default Game;
