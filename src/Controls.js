const buttonClass =
  `mx-1 relative inline-flex items-center 
  px-2 py-1 border border-gray-300 text-sm font-medium 
  rounded text-gray-700 bg-gray-50 hover:bg-gray-100 
  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`;

const Controls = ({
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
}) => {
  return (
    <div className="flex mt-0 ml-20 text-white">
      {isRunning ? (
        <button className={buttonClass} onClick={stopGame}>
          Pause ⏸︎
        </button>
      ) : (
        <button className={buttonClass} onClick={runGame}>
          Play &#9658;
        </button>
      )}
      <button className={buttonClass} onClick={handleRandom}>
        Randomise
      </button>
      <button className={buttonClass} onClick={handleClear}>
        Clear
      </button>
      <button className={buttonClass} onClick={handleResize}>
        Resize
      </button>

      <div className="px-5">
        <label className="block text-sm font-medium">Rows</label>
        <div className="mt-1">
          <input
            className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300"
            min="10"
            max="150"
            type="number"
            value={rows}
            onChange={handleRowChange}
          />
        </div>
      </div>

      <div className="px-5">
        <label className="block text-sm font-medium">Cols</label>
        <div className="mt-1">
          <input
            className=" text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border-gray-300"
            min="10"
            max="150"
            type="number"
            value={cols}
            onChange={handleColumnChange}
          />
        </div>
      </div>

      <div className="px-5">
        <label className="block text-sm font-medium">Speed</label>

        <div className="mt-1">
          <input
            className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
            min="10"
            max="1000"
            type="range"
            value={speed}
            onChange={handleIntervalChange}
          />
          {" " + speed}ms
        </div>
      </div>
    </div>
  );
};

export default Controls;
