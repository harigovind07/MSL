import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <motion.h1 
        className="text-4xl font-bold text-primary mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Malayalam Sign Language Translator
      </motion.h1>
      
      <motion.p 
        className="text-xl text-gray-700 mb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bridging communication gaps with AI-powered translation between text and Malayalam Sign Language gestures.
      </motion.p>
      
      <motion.div 
        className="flex justify-center space-x-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link to="/text-to-video" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">Text to Video</Link>
        <Link to="/upload-to-text" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">Upload to Text</Link>
      </motion.div>
    </div>
  );
}

export default Home;
