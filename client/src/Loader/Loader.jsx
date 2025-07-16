// src/Components/Loader.jsx
import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="hex-ring">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hex pink pos-${i}`} />
        ))}
        <div className="hex white moving-white" />
      </div>
    </div>
  );
}

export default Loader;
