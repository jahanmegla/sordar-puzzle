import './App.css'

import Header from './Components/Header'
import Puzzle from './Components/Puzzle'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div  className="relative overflow-hidden py-10 md:py-14 bg-gradient-to-r from-white via-amber-50 to-yellow-100 border-b border-yellow-200">
   

     
      {/* Header */}
      <Header />

      {/* Puzzle section */}
      <main className="max-w-4xl mx-auto p-6">
        <Puzzle />
      </main>

      {/* Footer / additional content */}
    
<footer className="text-center py-8 border-t border-yellow-200 bg-gradient-to-b from-white via-amber-50 to-yellow-100 backdrop-blur-sm">
  <p className="text-xs md:text-sm text-yellow-800 font-serif">
    © {new Date().getFullYear()}{" "}
    <span className="font-semibold text-yellow-700">
      Sordar Puzzle Game
    </span>{" "}
    • Built with 💛 by{" "}
    <a
      href="https://github.com/jahanmegla"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-800 hover:text-yellow-600 underline transition-colors"
    >
      Nusrat Jahan
    </a>
  </p>
</footer>

 </div>
    </div>
  )
}

export default App