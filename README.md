# game-of-life

Deployed Link [http://adnanwahab.com/game-of-life/build/]
Source Code [https://github.com/adnan-wahab/game-of-life]
 
- [x] A stylish header above the game board.
- [x] A "Play/Pause" button which starts and stops the simulation.
- [x] The ability to click on a cell to toggle its live/dead status.
- [x] A "Randomize" button which fills the board with random data with 40% of cells being alive.
- [x] A "Clear Board" button.
- [x] A way to change the game speed: minimum timestep 10ms, maximum 1000ms.
- [x] The ability to change the size of the game board between 10 and 150 rows/columns.
- [x] A button which auto-sizes the board to the window size.
- [x] The game board should "wrap" so the cell to the left of the first column is the rightmost cell in the same row. Same applies vertically, i.e. the game world is a torus. What goes out to the right comes in at the left, and vice versa. What goes out at the bottom comes in at the top, and vice versa.
- [x] Cells should animate transitions between live and dead. These animation speeds should be tied to the game speed, and disappear when the speed is too fast for them to be useful.


Grid.js implements the gameboard and controls
Controls and grid could be split up into two different components and use a context to share Board State 

to run project
```
yarn install
yarn start 
```