import React, { useState, useEffect } from 'react';

const VibeBall = () => {
  const [shaking, setShaking] = useState(false);
  const [currentVibe, setCurrentVibe] = useState('Shake to check the vibes...');
  const [showingAnswer, setShowingAnswer] = useState(false);
  
  const vibeResponses = [
    "The vibes are immaculate right now",
    "Pretty chill vibes tbh",
    "Major main character energy",
    "Vibes are off... maybe try again later",
    "Extremely chaotic good vibes",
    "It's giving nostalgic vibes",
    "Absolutely cursed vibes detected",
    "The vibes are simply unmatched",
    "Strong weekend vibes even if it's not the weekend",
    "Extremely productive vibes",
    "Vibes are mysteriously cosmic right now",
    "Big 'treat yourself' energy",
    "The vibes are just mid, nothing special",
    "Blessed vibes only",
    "The vibes are straight fire",
    "Completely unhinged but in a good way",
    "Cozy vibes detected",
    "Main character energy confirmed",
    "Vibes are on a spiritual level",
    "Pure summer vibes regardless of season"
  ];
  
  const handleShake = () => {
    if (!shaking) {
      setShaking(true);
      setShowingAnswer(false);
      
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * vibeResponses.length);
        setCurrentVibe(vibeResponses[randomIndex]);
        setShaking(false);
        setShowingAnswer(true);
      }, 1500);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-800 p-4">
      <h1 className="text-3xl font-bold text-white mb-6">The Vibe Ball™</h1>
      
      <div 
        className={`relative w-64 h-64 rounded-full bg-black shadow-2xl flex items-center justify-center mb-8 cursor-pointer
          ${shaking ? 'animate-bounce' : ''}`}
        onClick={handleShake}
      >
        <div className="absolute w-40 h-40 rounded-full bg-indigo-900 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-700 to-blue-500 flex items-center justify-center p-4">
            {showingAnswer ? (
              <p className="text-white text-center font-medium text-lg">{currentVibe}</p>
            ) : (
              <div className="text-white text-2xl">8</div>
            )}
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleShake}
        disabled={shaking}
        className="bg-white text-purple-700 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 disabled:opacity-50 transition duration-300"
      >
        {shaking ? "Checking the vibes..." : "Shake for Vibes"}
      </button>
      
      <p className="text-white text-sm mt-6 max-w-md text-center">
        Tap the ball or press the button to check what kind of vibes are happening right now.
      </p>
    </div>
  );
};

export default VibeBall;