
import React, { useEffect, useState } from 'react';

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; size: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 30 + 10}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 5}s`
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] text-pink-200 opacity-60 animate-bounce"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animation: `float-up ${heart.duration} linear infinite`,
            animationDelay: heart.delay,
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeartBackground;
