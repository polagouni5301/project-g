import React, { useState } from 'react';
import { users, rewards } from './data/users';
import SpinWheel from './components/SpinWheel';
import IdDialog from './components/IdDialog';
import WinnerDialog from './components/WinnerDialog';

function App() {
  const [showIdDialog, setShowIdDialog] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [finalRotation, setFinalRotation] = useState(0);
  const [winningPrize, setWinningPrize] = useState('');
  const [showWinnerDialog, setShowWinnerDialog] = useState(false);

  const handleSpinClick = () => {
    setShowIdDialog(true);
  };

  const handleIdSubmit = (id: string) => {
    const user = users.find(u => u.id === id);
    if (!user) {
      alert('Invalid ID. Please try again.');
      return;
    }

    setShowIdDialog(false);

    // Get random prize from user's bucket
    const bucketPrizes = rewards[user.bucket];
    const randomPrize = bucketPrizes[Math.floor(Math.random() * bucketPrizes.length)];
    setWinningPrize(randomPrize);

    // Calculate rotation based on prize
    const baseRotation = 1440; // 4 full spins (360 * 4)
    const prizeRotation = Object.values(rewards).flat().indexOf(randomPrize) * 90;
    setFinalRotation(baseRotation + prizeRotation);
    
    setIsSpinning(true);
  };

  const handleSpinComplete = () => {
    setShowWinnerDialog(true);
    setIsSpinning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Wheel of Fortune</h1>
        <p className="text-white/80">Spin the wheel to win amazing prizes!</p>
      </div>

      <SpinWheel
        isSpinning={isSpinning}
        finalRotation={finalRotation}
        onSpinComplete={handleSpinComplete}
      />

      <button
        onClick={handleSpinClick}
        disabled={isSpinning}
        className="mt-8 px-8 py-3 bg-white text-purple-600 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Spin Now
      </button>

      <IdDialog
        isOpen={showIdDialog}
        onSubmit={handleIdSubmit}
      />

      <WinnerDialog
        isOpen={showWinnerDialog}
        prize={winningPrize}
        onClose={() => {
          setShowWinnerDialog(false);
          setFinalRotation(0);
        }}
      />
    </div>
  );
}

export default App;