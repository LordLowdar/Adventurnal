import zIndex from '@mui/material/styles/zIndex';
import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
const Particle = (props) => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '000000',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 90,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#880000', 'ffbd60'],
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'top-left',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: false,
            speed: 2,
            straight: false,
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ['square', 'circle'],
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 0.5,
              sync: false,
            },
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -2,
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
