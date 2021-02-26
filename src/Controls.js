const buttonClass =
"m-1 text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500\
            items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white\
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\
            ";

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
    return (<div className="mt-4 flex md:mt-0 md:ml-4 text-white">
    
  
  
      {isRunning ? (
        <button className={buttonClass} onClick={stopGame}>
          Pause
        </button>
      ) : (
        <button className={buttonClass} onClick={runGame}>
          Play
        </button>
      )}
      <button className={buttonClass} onClick={handleRandom}>
        Randomise
      </button>
      <button className={buttonClass} onClick={handleClear}>
        Clear Board
      </button>
      <button className={buttonClass} onClick={handleResize}>
        Resize to Fit
      </button>

     
  
        <div className="px-5">
  
      <label className="block text-sm font-medium">
        rows
        </label>
        <div className="mt-1">
        <input
          className="text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md" 
          min="10"
          max="150"
          type="number"
          value={rows}
          onChange={handleRowChange}
        />
        </div>
        </div>
  
        <div className="px-5">
  
      <label className="block text-sm font-medium">
        Cols
        </label>
        <div className="mt-1">
        <input
          className=" text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border-gray-300 rounded-md" 
          min="10"
          max="150"
          type="number"
          value={cols}
          onChange={handleColumnChange}
        />
        </div>
        </div>

        <div className="px-5">

      <label className="block text-sm font-medium">
        Speed
        </label>

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
    </div>)
}

export default Controls;