import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const Gallery: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const totalPhotos = 15; 
  const captions = [
    "You make me happy! ❤️", "My favorite person ✨", "That beautiful smile...",
    "Forever to go! ♾️", "Lucky to have you 🍀", "Always in my heart",
    "Best memories! 📸", "Meri Jaan ❤️", "Love of my life", "Beautiful moments"
  ];

  const photos = Array.from({ length: totalPhotos }).map((_, i) => ({
    id: i,
    url: `/photos/${i + 1}.jpg`, 
    caption: captions[i % captions.length],
    rotation: Math.random() * 8 - 4 
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#ff0000', '#ff69b4', '#ffffff'] });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#ff0000', '#ff69b4', '#ffffff'] });
      }, 250);

      setShowConfetti(true);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-16 animate-in fade-in duration-1000 pb-40 w-full overflow-visible bg-pink-50/20 min-h-screen">
      
      {/* Header */}
      <div className="text-center space-y-6 px-4 pt-16">
        <h2 className="text-5xl md:text-7xl font-romantic text-pink-600 font-bold drop-shadow-md">
          Our Beautiful Memories
        </h2>
        <p className="text-pink-400 italic text-2xl font-romantic">"Har lamha tumhare saath ek taufa hai..."</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-8 max-w-6xl">
        {photos.map((photo, index) => (
          <div 
            key={photo.id}
            className="group relative bg-white p-4 pb-20 shadow-[0_15px_35px_rgba(0,0,0,0.1)] transform transition-all hover:scale-110 hover:rotate-0 hover:z-50 duration-300 border border-gray-100"
            style={{ 
              animationDelay: `${index * 0.15}s`,
              animation: 'slide-up 0.8s ease-out forwards',
              transform: `rotate(${photo.rotation}deg)`
            }}
          >
            {/* aspect-[4/5] se height badh gayi aur object-top se face safe rahega */}
            <div className="overflow-hidden bg-gray-50 aspect-[3/5] border border-gray-100 shadow-inner mb-6">
              <img 
                src={photo.url} 
                alt="Memory" 
                // object-top sabse zaroori hai face bachane ke liye
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Check+Photo+Name'; }}
              />
            </div>
            
            {/* Caption Section */}
            <div className="absolute bottom-5 left-0 right-0 text-center px-4">
              <p className="text-pink-600 font-romantic text-2xl font-bold truncate">
                {photo.caption}
              </p>
            </div>
            
            {/* Tape Decoration */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-10 bg-pink-100/40 backdrop-blur-[2px] rotate-1 opacity-70 border border-white/50 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Love Note */}
      <div className={`text-center mt-32 px-4 transition-all duration-1000 ${showConfetti ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
        <div className="bg-white/90 backdrop-blur-xl p-10 md:p-20 rounded-[4rem] border-[10px] border-pink-100 shadow-[0_0_80px_rgba(255,105,180,0.3)] relative overflow-hidden max-w-4xl mx-auto">
          <h3 className="text-5xl md:text-8xl font-romantic text-pink-600 font-bold mb-8 relative z-10 leading-tight">
            Happy Valentine's Day!
          </h3>
          <p className="text-2xl md:text-4xl text-pink-500 font-medium mb-12 relative z-10 font-romantic">
            Tu meri duniya hai meri sabse pyaari jaan ❤️
          </p>
          <div className="flex justify-center gap-12 relative z-10">
            <img src="https://media.tenor.com/LpDmC0o778F3xGfXvI/bubu-dudu-kiss.gif" alt="kiss" className="w-24 h-24 md:w-32 md:h-32" />
            <img src="https://media.tenor.com/j8S6l-Tj6O4AAAAC/bubu-dudu-love.gif" alt="love" className="w-24 h-24 md:w-32 md:h-32" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(60px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .font-romantic { font-family: 'Dancing Script', cursive, serif; }
      `}</style>
    </div>
  );
};

export default Gallery;