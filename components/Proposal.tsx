
  import React, { useState, useCallback, useMemo, useEffect } from 'react';

  interface ProposalProps {
    onAccept: () => void;
  }

  const Proposal: React.FC<ProposalProps> = ({ onAccept }) => {
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [hasMoved, setHasMoved] = useState(false);
    const [noCount, setNoCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Optimized teleportation logic
    const moveButton = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      const padding = 60;
      const buttonWidth = 120;
      const buttonHeight = 50;
      
      // Ensure the button stays within visible screen bounds
      const safeWidth = Math.max(window.innerWidth - buttonWidth - padding, padding);
      const safeHeight = Math.max(window.innerHeight - buttonHeight - padding, padding);
      
      const newX = Math.random() * (safeWidth - padding) + padding;
      const newY = Math.random() * (safeHeight - padding) + padding;
      
      setNoPosition({ x: newX, y: newY });
      setHasMoved(true);
      setNoCount(prev => prev + 1);
    }, []);

    // KEEPING STICKERS EXACTLY AS REQUESTED
    const stickers = useMemo(() => ({
      happy: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTN4dHl3c3ptbXRsZTl2czlyaW5vbDEydjQ5eHUzbnV2MDNzankzbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fX6NhhHhC9zSuxDTwi/giphy.gif",
      angry1: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGw2d29la2UxeGpucjR4amk4N3dkaHJkeGViYWRmajR3ajdwMGIzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Gu1R40YcAdPB4ffnL/giphy.gif",
      angry2: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Z2l1cDh6Y3FwY2sycXNpemRhdGFrajRveW8yamFoYm9lZXQ2Z3d4NiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/OirrD0sBeuV2Qu1aQt/giphy.gif",
      angry3: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTBsaWh5ajlhZHRuZTBiZWpyeHRod3NkOWltODZvMGxqMzFmMXZlZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WWUSelKQYSRNNYWCNR/giphy.gif",
    }), []);

    const currentSticker = useMemo(() => {
      if (noCount === 0) return stickers.happy;
      if (noCount < 3) return stickers.angry1;
      if (noCount < 6) return stickers.angry2;
      return stickers.angry3;
    }, [noCount, stickers]);

    const getFunnyMessage = () => {
      if (noCount === 0) return "Will you be my Valentine?";
      if (noCount < 3) return "Arey! No pe click kyu kar rahe ho? 😡";
      if (noCount < 6) return "Dekho Dudu gussa ho raha hai! 😤";
      return "Maan jao na please... Sirf YES bacha hai! ❤️";
    };

    return (
      <div className="flex flex-col items-center text-center space-y-6 p-4 max-w-lg mx-auto min-h-[85vh] justify-center relative">
        {/* Sticker Display */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-4 overflow-visible">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-6xl animate-pulse">
              ❤️
            </div>
          )}
          
          <img 
            key={currentSticker} 
            src={currentSticker} 
            alt="Bubu Dudu Reaction" 
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full drop-shadow-2xl object-contain transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://media.tenor.com/T0_6p9_o_zQAAAAC/bubu-dudu.gif";
            }}
          />
          
          {noCount > 3 && (
            <div className="absolute -top-10 bg-red-500 text-white text-sm px-4 py-1.5 rounded-full animate-bounce shadow-xl z-30 font-bold border-2 border-white">
              MUJHSE PYAR NAHI? 💢
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="min-h-[140px] flex flex-col items-center justify-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-romantic text-pink-600 font-bold drop-shadow-sm leading-tight px-2">
            {getFunnyMessage()}
          </h1>
          <p className="text-pink-400 text-lg italic animate-pulse">
            "Waiting for your perfect answer..."
          </p>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col items-center justify-center gap-6 w-full pt-10">
          {/* YES Button */}
          <button
            onClick={onAccept}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-5 px-24 rounded-full text-3xl shadow-[0_15px_35px_rgba(255,105,180,0.6)] transform transition active:scale-90 hover:scale-105 z-20 border-4 border-white"
          >
            YES! ❤️
          </button>

          {/* NO Button - The Elusive One */}
          <button
            onMouseEnter={(e) => moveButton(e)}
            onMouseMove={(e) => moveButton(e)}
            onTouchStart={(e) => moveButton(e)}
            onClick={(e) => {
              e.preventDefault();
              moveButton(e);
            }}
            style={hasMoved ? {
              position: 'fixed',
              left: `${noPosition.x}px`,
              top: `${noPosition.y}px`,
              transition: 'none', // Teleport instantly for maximum difficulty
              zIndex: 9999
            } : {
              position: 'relative'
            }}
            className="bg-white/90 backdrop-blur-sm text-gray-400 font-bold py-3 px-14 rounded-full text-xl shadow-md opacity-80 border border-pink-100 cursor-default select-none pointer-events-auto"
          >
            No 😢
          </button>
        </div>
      </div>
    );
  };

  export default Proposal;
