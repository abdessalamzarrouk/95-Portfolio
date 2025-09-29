import React, { useState, useEffect } from 'react';
import starimage from './assets/stars.png';

function FallingStars({ enabled }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let createInterval;
    if (enabled) {
      createInterval = setInterval(() => {
        const newStar = {
          id: Date.now() + Math.random(), // unique id
          left: Math.random() * window.innerWidth,
          size: Math.random() * 3 + 5,
          speed: Math.random() * 3 + 1,
        };
        setStars(prev => [...prev, newStar]);
      }, 200);
    }

    if (!enabled) {
      setStars([]); // clear all stars immediately
    }

    return () => clearInterval(createInterval);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const moveInterval = setInterval(() => {
      setStars(prev =>
        prev
          .map(star => ({ ...star, top: (star.top || 0) + star.speed }))
          .filter(star => (star.top || 0) < window.innerHeight)
      );
    }, 50);

    return () => clearInterval(moveInterval);
  }, [enabled]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    >
      {stars.map(star => (
        <img
          src={starimage}
          key={star.id}
          style={{
            position: 'absolute',
            top: star.top || 0,
            left: star.left,
            width: star.size,
            height: star.size,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}

export default FallingStars;
