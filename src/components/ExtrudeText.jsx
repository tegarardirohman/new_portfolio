import React from 'react';

const TextStrokeFill = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="relative text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
        <span className="absolute inset-0 stroke-current text-black opacity-50 transition duration-300 transform hover:scale-110">
          Efek Teks dengan Stroke dan Fill
        </span>
        Efek Teks dengan Stroke dan Fill
      </h1>
    </div>
  );
};

export default TextStrokeFill;
