import React, { useEffect } from 'react';
import gsap from 'gsap';

const MyComponent = () => {
  useEffect(() => {
    const balls = gsap.utils.toArray('.ball');

    const onMouseMove = (event) => {
      gsap.to(balls, {
        duration: 0.5,
        x: event.clientX,
        y: event.clientY,
        ease: 'power1.out',
        overwrite: 'auto',
        stagger: 0.02,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
      <h2 className="text-center text-4xl font-bold text-blue-900">Mouse Hover Effect</h2>
    </div>
  );
};

export default MyComponent;