import React, { useEffect } from 'react';

const ParticleComponent = () => {
  useEffect(() => {
    // Initialize Particles.js
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
        },
        move: {
          speed: 3
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    });
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '97%' }} />;
};

export default ParticleComponent;

