
import React, { useState } from 'react';
import Proposal from './components/Proposal';
import Mailbox from './components/Mailbox';
import Gallery from './components/Gallery';
import HeartBackground from './components/HeartBackground';

export enum Step {
  PROPOSAL,
  MAILBOX,
  GALLERY
}

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.PROPOSAL);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4">
      <HeartBackground />
      
      <main className="z-10 w-full max-w-4xl mx-auto">
        {step === Step.PROPOSAL && (
          <Proposal onAccept={() => setStep(Step.MAILBOX)} />
        )}
        
        {step === Step.MAILBOX && (
          <Mailbox onNext={() => setStep(Step.GALLERY)} />
        )}
        
        {step === Step.GALLERY && (
          <Gallery />
        )}
      </main>

      {/* Footer Decoration */}
      <footer className="fixed bottom-4 text-pink-400 text-sm opacity-50 font-romantic">
        Made with ❤️ for someone special
      </footer>
    </div>
  );
};

export default App;
