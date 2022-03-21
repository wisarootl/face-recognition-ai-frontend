import React from 'react'
import Particles2 from 'react-tsparticles'
// Particles reference: https://www.npmjs.com/package/react-tsparticles

const particlesInit = (main) => {
  console.log(main)
}

const particlesLoaded = (container) => {
  console.log(container)
}

const particlesOptions = {
  background: {
    color: {
      // value: '#0d47a1'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        // mode: 'repulse'
        mode: 'bubble'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 10,
        opacity: 0.1,
        size: 15
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1
    },
    collisions: {
      enable: false
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 0.4,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 120
    },
    opacity: {
      value: 0.1
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
}

const Particles = () => {
  return (
    <Particles2
      className="particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  )
}

export default Particles

// export { particlesInit, particlesLoaded, particlesOptions }
