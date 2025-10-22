import Puzzle from "./Components/Puzzle";

import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main section */}
      <main className="flex-grow text-center">
        <h1 className="text-3xl font-bold mt-5 text-blue-600">
          🧠 Sordar Puzzle Game
        </h1>
        <Puzzle />
      </main>
     <Footer/>
 
    </div>
  );
}

export default App;
