import React, { useState } from "react";
import { motion } from "framer-motion";

function UploadToText() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);

    setTimeout(() => {
      setText("Recognized text from Malayalam Sign Language: Hello World");
      setLoading(false);
      setFile(null); // reset file input
    }, 2000);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-primary mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Upload Video to Text (MSL Recognition)
      </motion.h2>

      <div className="mb-8">
        <input 
          type="file" 
          onChange={handleFileChange}
          accept="video/*"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />
        <button 
          onClick={handleSubmit}
          disabled={loading || !file}
          aria-busy={loading}
          className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : "Upload and Recognize"}
        </button>
      </div>

      {text && (
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-800">{text}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default UploadToText;
