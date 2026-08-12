import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';
import { CITY_DATA } from '../data/nikeData';
import { CityKey } from '../types';

interface SplitPanelProps {
  onUseApp15Code: () => void;
  onOpenCustomizer: (city: CityKey) => void;
}

export const SplitPanel: React.FC<SplitPanelProps> = ({
  onUseApp15Code,
  onOpenCustomizer
}) => {
  const [selectedCity, setSelectedCity] = useState<CityKey>('Mumbai');
  const [copiedCode, setCopiedCode] = useState(false);

  const city = CITY_DATA[selectedCity];

  const handleCopyCode = () => {
    navigator.clipboard.writeText('APP15');
    setCopiedCode(true);
    onUseApp15Code();
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section className="w-full bg-[#07111C] py-10 px-5 lg:px-10 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Panel: Member Offer */}
        <div className="bg-[#C8FF3D] text-[#07111C] p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[520px] lg:min-h-[580px] relative overflow-hidden group">
          {/* Subtle Background Watermark */}
          <div
            className="absolute -right-10 -bottom-10 font-display font-black text-9xl text-black/5 uppercase select-none pointer-events-none"
            aria-hidden="true"
          >
            MEMBER
          </div>

          <div>
            {/* Eyebrow */}
            <span className="font-body text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] text-[#07111C]/80 block mb-6">
              Member offer
            </span>

            {/* Headline */}
            <h2 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.8] tracking-tight mb-8">
              Get <br />
              in <br />
              the <br />
              game.
            </h2>

            {/* Body Copy */}
            <p className="font-body text-sm sm:text-base font-medium max-w-md text-[#07111C]/90 leading-relaxed mb-8">
              Unlock 15% off your first in-app purchase with promo code <strong className="font-bold underline underline-offset-4">APP15</strong>. Enjoy early access to Nike India drops, custom member rewards, and running events.
            </p>
          </div>

          {/* CTA Action */}
          <div className="pt-4 flex flex-wrap items-center gap-4 relative z-10">
            <button
              onClick={handleCopyCode}
              className="bg-[#07111C] text-[#F2F3EE] hover:bg-[#1648FF] hover:text-[#C8FF3D] transition-all duration-200 px-6 py-4 text-[12px] font-body font-bold uppercase tracking-[0.16em] flex items-center gap-3 active:scale-95 shadow-xl"
            >
              {copiedCode ? (
                <>
                  <Check className="w-4 h-4 text-[#C8FF3D]" />
                  <span>Code APP15 Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Use APP15</span>
                </>
              )}
            </button>
            <span className="font-body text-xs font-bold uppercase tracking-widest text-[#07111C]/70">
              VALID ON NIKE APP
            </span>
          </div>
        </div>

        {/* Right Panel: City Customization */}
        <div className="bg-[#1648FF] text-[#F2F3EE] p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[520px] lg:min-h-[580px] relative overflow-hidden group">
          {/* Subtle Background Watermark */}
          <div
            className="absolute -right-10 -bottom-10 font-display font-black text-9xl text-white/5 uppercase select-none pointer-events-none"
            aria-hidden="true"
          >
            CUSTOM
          </div>

          <div>
            {/* Top Row: Eyebrow + Interactive City Selector */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="font-body text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] text-[#C8FF3D] block">
                Nike by you / {selectedCity}
              </span>

              {/* City Selector Buttons */}
              <div className="flex gap-1.5 bg-[#07111C]/40 p-1 border border-white/10">
                {(['Mumbai', 'Delhi', 'Bengaluru'] as CityKey[]).map((cityKey) => (
                  <button
                    key={cityKey}
                    onClick={() => setSelectedCity(cityKey)}
                    className={`px-2.5 py-1 text-[10px] font-body font-bold uppercase tracking-wider transition-all ${
                      selectedCity === cityKey
                        ? 'bg-[#C8FF3D] text-[#07111C]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {cityKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.8] tracking-tight mb-6">
              Your <br />
              city. <br />
              Your <br />
              pair.
            </h2>

            {/* City Tagline Details */}
            <div className="space-y-1 mb-8 font-body">
              <p className="text-sm sm:text-base text-[#C8FF3D] font-bold uppercase tracking-wide">
                {city.tagline}
              </p>
              <p className="text-xs text-white/60 font-mono tracking-widest">
                COORDINATES: {city.coordinates}
              </p>
            </div>
          </div>

          {/* Location Row Divider & CTA */}
          <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs font-body font-bold uppercase tracking-wider text-white/90">
              <MapPin className="w-4 h-4 text-[#C8FF3D]" />
              <span>Nike By You, India ({city.studioName})</span>
            </div>

            <button
              onClick={() => onOpenCustomizer(selectedCity)}
              className="bg-[#C8FF3D] text-[#07111C] hover:bg-[#F2F3EE] transition-all duration-200 px-6 py-4 text-[12px] font-body font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-3 group/btn active:scale-95"
            >
              <span>Enter studio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
