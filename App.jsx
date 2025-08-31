import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import TextToVideo from "./TextToVideo";
import UploadToText from "./UploadToText";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-emerald-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">MSL Translator</Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary transition">Home</Link>
            <Link to="/text-to-video" className="text-gray-700 hover:text-primary transition">Text to Video</Link>
            <Link to="/upload-to-text" className="text-gray-700 hover:text-primary transition">Upload to Text</Link>
          </div>
        </div>
      </nav>

      {/* Page transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/text-to-video" element={<TextToVideo />} />
          <Route path="/upload-to-text" element={<UploadToText />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
