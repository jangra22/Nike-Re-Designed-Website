import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ShieldAlert } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState('Mumbai Night Run');

  if (!isOpen) return null;

  const CHAPTERS = ['Mumbai Night Run', 'Delhi Street Tempo', 'Bengaluru Rain Sprint'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#07111C] border border-[rgba(255,255,255,0.20)] w-full max-w-4xl overflow-hidden shadow-2xl relative">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 bg-[#07111C] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF3D] animate-ping" />
            <h2 className="font-display font-black text-xl uppercase tracking-wider text-[#F2F3EE]">
              Nike Running India · Campaign Film
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-[#C8FF3D] transition-colors"
            aria-label="Close video film modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Simulated High-Energy Campaign Film Backdrop */}
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=1600&auto=format&fit=crop"
            alt="Nike Campaign Film frame"
            className={`w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? 'scale-105 filter contrast-125' : 'filter brightness-50'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Playing Status Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111C] via-transparent to-transparent flex flex-col justify-between p-6">
            <div className="flex gap-2">
              {CHAPTERS.map((chap) => (
                <button
                  key={chap}
                  onClick={() => setActiveChapter(chap)}
                  className={`px-3 py-1 text-[10px] font-body font-bold uppercase tracking-widest transition-colors ${
                    activeChapter === chap
                      ? 'bg-[#C8FF3D] text-[#07111C]'
                      : 'bg-black/60 text-white/80 border border-white/20'
                  }`}
                >
                  {chap}
                </button>
              ))}
            </div>

            {/* Bottom Overlay Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-[#C8FF3D] text-[#07111C] p-3 rounded-full hover:bg-white transition-colors"
                  aria-label={isPlaying ? 'Pause film' : 'Play film'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:text-[#C8FF3D] p-2"
                  aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              <span className="font-mono text-xs text-[#C8FF3D] font-bold tracking-widest">
                01:42 / 03:00 · 4K HIGH FIDELITY
              </span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#0d1c2d] border-t border-white/10 flex flex-wrap justify-between items-center text-xs font-body text-white/70">
          <span>CHAPTER: {activeChapter.toUpperCase()}</span>
          <span className="text-[#C8FF3D] font-bold uppercase tracking-wider">
            FEATURED SHOE: PEGASUS 41 INDIA EDITION
          </span>
        </div>
      </div>
    </div>
  );
};
