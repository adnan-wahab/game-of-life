import "./App.css";
import Grid from "./grid";

function App() {
  return (
    <div className="bg-gray-100 shadow">
      <nav className="bg-gradient-to-r from-light-blue-800 to-cyan-600 px-2 sm:px-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <div className="flex-shrink-0 text-white">
                Conway's Game of Life
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Grid />
    </div>
  );
}

export default App;
