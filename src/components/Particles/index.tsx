import ReactParticles from 'react-tsparticles';

export const Particles: React.FC = () => {
  return (
    <ReactParticles
      id="tsparticles"
      width="100%"
      height="100%"
      style={{
        position: 'absolute',
        top: 0,
        zIndex: -1,
      }}
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
          },
          modes: {},
        },
        particles: {
          color: {
            random: true,
            value: '#4e88cd',
          },
          links: {
            color: '#4e88cd',
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 0.8,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 25,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 4,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
