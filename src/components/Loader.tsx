import { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsComplete(true), 8000);
          return 100;
        }
        return prev + 0.88;
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#000000] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9B2430]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFDC00]/10 rounded-full blur-3xl animate-pulse-slower" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: Math.random() > 0.5 ? '#9B2430' : '#FFDC00',
              opacity: Math.random() * 0.4 + 0.2,
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Animated Logo/Icon */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute inset-0 w-40 h-40 border-4 border-transparent border-t-[#9B2430] border-r-[#FFDC00] rounded-full animate-spin" />
            <div className="absolute inset-2 w-36 h-36 border-4 border-transparent border-b-[#FFDC00] border-l-[#9B2430] rounded-full animate-spin-reverse" />
            
            {/* Center icon */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-8 bg-gradient-to-br from-[#9B2430] to-[#FFDC00] rounded-full animate-pulse-glow" />
              <svg
                className="relative w-16 h-16 text-white animate-float-gentle"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="inline-block animate-fade-slide-up text-[#FFDC00] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Dionne
            </span>
            <br />
            <span className="inline-block animate-fade-slide-up-delay text-[#FFDC00] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Tweneboah
            </span>
          </h1>
          
          <div className="space-y-3 animate-fade-in-slow">
            <p className="text-sm md:text-base text-[#9B2430] font-semibold uppercase tracking-[0.2em]">
              Purpose:
            </p>
            <p className="text-lg md:text-xl text-white font-light max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Lawyer, Author, Entrepreneur, Coach
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-4 animate-fade-in-slower">
          <div className="relative w-full max-w-md mx-auto h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bar" />
            <div
              className="relative h-full bg-gradient-to-r from-[#9B2430] via-[#FFDC00] to-[#9B2430] transition-all duration-300 ease-out rounded-full shadow-lg"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(155, 36, 48, 0.6), 0 0 40px rgba(255, 220, 0, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide-shimmer" />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{ 
                    backgroundColor: i % 2 === 0 ? '#FFDC00' : '#9B2430',
                    animationDelay: `${i * 0.15}s` 
                  }}
                />
              ))}
            </div>
            <p className="text-[#FFDC00] text-sm font-medium tracking-widest">
              {progress}%
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-12 text-sm md:text-base text-white/80 font-light animate-fade-in-slowest drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] max-w-2xl mx-auto leading-relaxed">
          Empowering women to break free from limitations and live with bold purpose
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(10px, -15px);
            opacity: 0.6;
          }
          50% {
            transform: translate(-5px, -25px);
            opacity: 0.4;
          }
          75% {
            transform: translate(-15px, -10px);
            opacity: 0.5;
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
            box-shadow: 0 0 30px rgba(155, 36, 48, 0.6);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
            box-shadow: 0 0 50px rgba(255, 220, 0, 0.9);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes shimmer-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slide-shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fade-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-slide-up-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-slow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s linear infinite;
        }

        .animate-shimmer-bar {
          animation: shimmer-bar 2s ease-in-out infinite;
        }

        .animate-slide-shimmer {
          animation: slide-shimmer 1.5s ease-in-out infinite;
        }

        .animate-fade-slide-up {
          animation: fade-slide-up 1s ease-out 0.3s both;
        }

        .animate-fade-slide-up-delay {
          animation: fade-slide-up-delay 1s ease-out 0.6s both;
        }

        .animate-fade-in-slow {
          animation: fade-in-slow 1.2s ease-out 0.9s both;
        }

        .animate-fade-in-slower {
          animation: fade-in-slow 1.2s ease-out 1.2s both;
        }

        .animate-fade-in-slowest {
          animation: fade-in-slow 1.2s ease-out 1.5s both;
        }
      `}</style>
    </div>
  );
};

export default Loader;

