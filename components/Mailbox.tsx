
import React, { useState } from 'react';

interface MailboxProps {
  onNext: () => void;
}

const Mailbox: React.FC<MailboxProps> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
      {!isOpen ? (
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-romantic text-pink-600 mb-12 drop-shadow-sm px-4">A Special Surprise for You...</h2>
          
          <div 
            onClick={() => setIsOpen(true)}
            className="group cursor-pointer relative"
          >
            <div className="w-72 h-48 bg-gradient-to-br from-pink-500 to-red-600 rounded-t-full shadow-2xl relative border-b-8 border-red-800 transition-transform group-hover:scale-110 duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-8xl transform group-hover:rotate-12 transition-all duration-500 drop-shadow-lg">💌</div>
              </div>
              
              <div className="absolute -left-5 top-1/2 w-4 h-20 bg-gray-300 rounded-full border-2 border-gray-400">
                <div className="absolute top-0 -left-3 w-10 h-5 bg-red-500 rounded-sm transform origin-right rotate-0 group-hover:-rotate-90 transition-transform duration-700"></div>
              </div>

              <div className="absolute bottom-6 right-6 text-white text-3xl animate-pulse">💖</div>
            </div>
            
            <div className="w-8 h-40 bg-gray-400 mx-auto shadow-inner rounded-b-xl border-x-2 border-gray-500"></div>
            <div className="w-32 h-6 bg-gray-500 mx-auto rounded-full -mt-2 opacity-30 blur-sm"></div>
          </div>
          
          <p className="mt-10 text-pink-500 font-bold animate-bounce flex items-center gap-4 bg-white/80 backdrop-blur-sm px-10 py-4 rounded-full border-2 border-pink-100 shadow-lg text-xl">
            <span>Tap to open your heart!</span> 
            <img src="https://media.tenor.com/j8S6l-Tj6O4AAAAC/bubu-dudu-love.gif" className="w-10 h-10 rounded-full" alt="sticker" />
          </p>
        </div>
      ) : (
        <div className="bg-white/95 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-[0_30px_80px_rgba(255,182,193,0.7)] border-4 border-pink-100 max-w-2xl w-full relative animate-in slide-in-from-bottom-20 duration-1000">
          
          {/* Balloons */}
          <div className="absolute -top-20 -left-16 text-8xl animate-float opacity-90">🎈</div>
          <div className="absolute -top-24 -right-16 text-8xl animate-float opacity-90" style={{ animationDelay: '0.7s' }}>🎈</div>
          <div className="absolute -bottom-16 -right-12 text-7xl animate-bounce">🎁</div>
          <div className="absolute -bottom-12 -left-12 text-6xl animate-pulse rotate-12">💖</div>

          <div className="flex justify-between items-center mb-10 px-8">
            <div className="flex flex-col items-center group">
              <img src="https://media.tenor.com/2m-X_l-R_l4AAAAC/bubu-dudu-letter.gif" alt="Bubu" className="w-24 h-24 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black text-pink-300 tracking-[0.2em] uppercase mt-2">Dudu</span>
            </div>
            <div className="text-6xl text-pink-500 animate-pulse drop-shadow-md">❤️</div>
            <div className="flex flex-col items-center group">
              <img src="https://media.tenor.com/O6S6Wp_z6LwAAAAC/bubu-dudu-kiss.gif" alt="Bubu" className="w-24 h-24 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-black text-pink-300 tracking-[0.2em] uppercase mt-2">Bubu</span>
            </div>
          </div>

          <div className="space-y-8 text-pink-800">
            <h3 className="text-4xl font-romantic font-bold text-pink-600 border-b-4 border-pink-50 pb-6 inline-block">Meri Jaan Ke Liye...</h3>
            <div className="italic text-2xl md:text-3xl leading-relaxed font-medium space-y-4 py-4">
              <p className="hover:scale-105 transition-transform duration-300 cursor-default">"Jab tak hai jaan, jab tak hai jaan..."</p>
              <p className="hover:scale-105 transition-transform duration-300 text-pink-500 cursor-default">"Tum mile toh mil gaya ye jahan..."</p>
              <p className="hover:scale-105 transition-transform duration-300 cursor-default">"Tere bina jeena bhi kya jeena,"</p>
              <p className="hover:scale-105 transition-transform duration-300 text-pink-500 cursor-default">"Tu hi hai meri saari duniya..."</p>
              <p className="text-lg text-pink-400 mt-4 font-romantic">~ I love you more than words can say ~</p>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t-4 border-pink-50 flex flex-col items-center gap-8">
            <p className="font-bold text-pink-400 italic text-xl flex items-center gap-3 animate-pulse">
              <span>Wait... there is a surprise for you!</span> 🤫
            </p>
            <button
              onClick={onNext}
              className="group bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-6 px-16 rounded-full shadow-[0_20px_40px_rgba(255,105,180,0.4)] transform transition hover:scale-110 active:scale-90 flex items-center gap-4 border-4 border-white text-2xl"
            >
              <span>Click for your gift</span>
              <span className="group-hover:rotate-[30deg] transition-transform text-3xl">🎁</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mailbox;
