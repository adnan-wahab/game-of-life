const Cell = ({ x, y, filled, speed, cell_size }) => {
  return (
    <div
      className={(filled ? "cell" : "empty") + " transition"}
      style={{
        left: `${cell_size * x + 1}px`,
        top: `${cell_size * y + 1}px`,
        width: `${cell_size - 1}px`,
        height: `${cell_size - 1}px`,
        transitionDuration: speed + "ms",
      }}
    />
  );
};

const Grid = ({
  handleClick,
  handleMouseMove,
  board,
  boardRef,
  cols,
  rows,
  speed,
  cells,
  cell_size,
}) => {
  return (
    <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
      <section className="min-w-0 flex-1 h-full flex flex-col lg:order-last">
        <div
          className="Board m-auto"
          style={{
            width: cols * cell_size,
            height: rows * cell_size,
          }}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          ref={boardRef}
        >
          {board.map((row, i) =>
            row.map((_, j) => {
              return (
                <Cell
                  cell_size={cell_size}
                  speed={speed * 3}
                  filled={cells[`${i},${j}`]}
                  x={i}
                  y={j}
                  key={`${i},${j}`}
                />
              );
            })
          )}
        </div>
      </section>
    </main>
  );
};
export default Grid;
