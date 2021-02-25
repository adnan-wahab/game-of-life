import React, {useState, useRef, useEffect} from 'react';
import './Game.css';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

const CELL_SIZE = 20;

const Cell = ({ x, y, filled, speed}) => {
    return (
        <div className={(filled ? 'cell' : 'empty') + ' transition'} style={{
            left: `${CELL_SIZE * x + 1}px`,
            top: `${CELL_SIZE * y + 1}px`,
            width: `${CELL_SIZE - 1}px`,
            height: `${CELL_SIZE - 1}px`,
            transitionDuration: speed + 'ms'
        }} />
    );
}

const makeEmptyBoard = (rows, cols) => {
    let board = [];
    for (let y = 0; y < rows; y++) {
        board[y] = [];
        for (let x = 0; x < cols; x++) {
            board[y][x] = false;
        }
    }

    return board;
}

let BOARD
let TIMEOUT

const calculateNeighbors = (board, x, y, rows, cols) => {
    let neighbors = 0;

    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let y1 = y + dir[0];
        let x1 = x + dir[1];

        if (x1 < 0) x1 = cols - 1
        if (y1 < 0) y1 = rows - 1
        // if (x1 < 0) continue
        // if (y1 < 0) continue

        if (x1 < cols && y1 < rows && board[y1][x1]) {
            neighbors++;
        }
    }

    return neighbors;
}

const getElementOffset = (boardRef) => {
    const rect = boardRef.current.getBoundingClientRect();
    const doc = document.documentElement;

    return {
        x: (rect.left + window.pageXOffset) - doc.clientLeft,
        y: (rect.top + window.pageYOffset) - doc.clientTop,
    };
}

const Grid = ({}) => {
    let boardRef = useRef(null)

    let [isRunning, setRunning] = useState(false),
        [speed, setSpeed] = useState(100),
        [size, setSize]  = useState(30)

    const rows = size,cols = size;
    BOARD = BOARD || makeEmptyBoard(rows, cols);

    useEffect(() => {
        BOARD = makeEmptyBoard(rows, cols);
        console.log('RESIZING', BOARD.length)
    }, [size])

    const makeCells= (rows, cols) => {
        let cells = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                if (BOARD[y][x]) {
                    cells[`${x}${y}`] = true
                }
            }
        }
        return cells;
    }
    let [cells, setCells] = useState([])

    const handleClick = (event) => {
        const elemOffset = getElementOffset(boardRef);
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);

        if (x >= 0 && x <= cols && y >= 0 && y <= rows) {
            BOARD[y][x] = !BOARD[y][x];
        }
        setCells(makeCells(rows, cols))
    }
    
    const runGame = () => {
        setRunning(true)
        runIteration();
    }
    
    const stopGame = () => {
        setRunning(false)
        console.log(TIMEOUT)
            if (TIMEOUT) {
                window.clearTimeout(TIMEOUT);
                TIMEOUT = null;
            }
    }
    
    const runIteration = () => {
        let newBoard = makeEmptyBoard(rows, cols);

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                let neighbors = calculateNeighbors(BOARD, x, y, rows, cols);
                if (BOARD[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!BOARD[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }

        BOARD = newBoard;
        setCells(makeCells(rows, cols))    
        TIMEOUT = window.setTimeout(runIteration, speed);
    }
    
    const handleIntervalChange = (event) => {
        setSpeed(event.target.value)
    }

    const handleSizeChange = (event) => {
        setSize(event.target.value)
    }
    
    const handleClear = () => {
        BOARD = makeEmptyBoard(rows, cols);
        setCells(makeCells(rows, cols))
    }
    
    const handleRandom = () => {
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                BOARD[y][x] = (Math.random() >= 0.5);
            }
        }
        setCells(makeCells(rows, cols))
    }
    const handleResize = () => {
        const height = (window.innerHeight - 70) //APPBAR HEIGHT - caluclate dynamically using offsetHeight
        setSize(height / CELL_SIZE | 0)
    }

        const buttonClass = "m-1 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500\
                items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white\
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\
                "
window.board = BOARD
        return (
            <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
            <section className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
          <div className="Board"
                    style={{ width: size * CELL_SIZE, height: size * CELL_SIZE, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                    onClick={handleClick}
                    ref={boardRef}>
                        {BOARD.map((row, i) => (
                            row.map((col, j) => {
                                return <Cell speed={speed * 3} filled={cells[`${i}${j}`]} x={i} y={j} key={`${i},${j}`}/>
                            })
                        ))}
                    </div>
        </section>
             
        <aside className="lg:block lg:flex-shrink-0 lg:order-first">
          <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 p-4">
                    <label> Speed<input type="range" min="10" max="1000" value={speed} onChange={handleIntervalChange} />
                    {speed}ms
                    </label>
                    <label> Size<input min="10" max="150" type="range" value={size} onChange={handleSizeChange} />
                    {size}
                    </label>

                    {isRunning ?
                        <button className={buttonClass} onClick={stopGame}>Pause</button> :
                        <button className={buttonClass} onClick={runGame}>Play</button>
                    }
                    <button className={buttonClass} onClick={handleRandom}>Randomise</button>
                    <button className={buttonClass} onClick={handleClear}>Clear Board</button>
                    <button className={buttonClass} onClick={handleResize}>Resize to Fit</button>
                </div>
        </aside>
        </main>
        )
}

export default Grid;