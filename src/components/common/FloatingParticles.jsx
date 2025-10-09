import { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#00FFFF' : '#FF00FF',
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            animation: `float ${15 + Math.random() * 10}s infinite linear`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
