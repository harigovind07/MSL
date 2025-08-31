import React, { useState } from "react";
import { motion } from "framer-motion";

function TextToVideo() {
  const [text, setText] = useState("");
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated API call
    setTimeout(() => {
      setVideoUrl("https://www.w3schools.com/html/mov_bbb.mp4");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h2 
        className="text-3xl font-bold text-primary mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Text to Malayalam Sign Language Video
      </motion.h2>

      <div className="mb-8">
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate to MSL video..."
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          rows="4"
        />
        <button 
          onClick={handleSubmit}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Video"}
        </button>
      </div>

      {videoUrl && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <video src={videoUrl} controls className="w-full rounded-lg shadow-lg" />
        </motion.div>
      )}
    </div>
  );
}

export default TextToVideo;
