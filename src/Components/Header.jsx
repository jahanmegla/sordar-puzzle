import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative overflow-hidden py-10 md:py-14 bg-gradient-to-r from-white via-amber-50 to-yellow-100 border-b border-yellow-200">
      {/* Elegant Motion Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-6 text-center bg-white/60 backdrop-blur-sm border border-yellow-100 rounded-2xl shadow-md p-8 md:p-12"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-yellow-800 tracking-wide">
         Sordar <span className="text-yellow-600"> Puzzle Game</span>
        </h1>

        <p className="mt-3 text-yellow-800/90 text-base md:text-lg italic">
          “Unlock every piece — reveal the art within.”
        </p>

        <div className="mt-6 flex justify-center gap-3">
        
        </div>
      </motion.div>
    </header>
  );
}
