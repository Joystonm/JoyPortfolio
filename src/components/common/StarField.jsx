import { useEffect, useState } from 'react';

const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < 200; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        animationDuration: Math.random() * 3 + 2,
      });
    }
    setStars(starArray);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-neon-cyan"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px #00FFFF`,
            animation: `twinkle ${star.animationDuration}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default StarField;
