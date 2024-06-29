import React, { useEffect, useState } from 'react';
import './GlowingCursor.css';

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="glowing-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default GlowingCursor;
