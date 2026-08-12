import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

interface HeroCampaignProps {
  onShopRunningClick: () => void;
  onWatchFilmClick: () => void;
}

export const HeroCampaign: React.FC<HeroCampaignProps> = ({
  onShopRunningClick,
  onWatchFilmClick
}) => {
  return (
    <section className="relative w-full min-h-[690px] lg:min-h-[760px] flex items-end overflow-hidden bg-[#07111C]">
      {/* Campaign Background Image with Night Running / Rain-lit Street mood */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2000&auto=format&fit=crop"
          alt="Nike Running India - Rain-lit night street runner in high energy outerwear"
          className="w-full h-full object-cover object-right-top filter brightness-[0.88] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Left-to-right gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111C] via-[#07111C]/80 to-transparent w-full md:w-3/4" />
        {/* Radial cobalt blue ambient glow */}
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #1648FF 0%, transparent 70%)' }} />
        {/* Bottom-to-top dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111C] via-[#07111C]/60 to-transparent" />
      </div>

      {/* Floating Lime Circular Cue (Desktop only) */}
      <div className="hidden lg:flex absolute top-20 right-16 z-20 animate-float-cue items-center justify-center w-32 h-32 rounded-full bg-[#C8FF3D] text-[#07111C] border-2 border-[#07111C] shadow-2xl p-3 text-center cursor-pointer select-none group hover:scale-105 transition-transform">
        <div className="flex flex-col items-center justify-center leading-tight">
          <span className="font-display font-extrabold text-lg uppercase tracking-tight">MOVE</span>
          <span className="font-display font-extrabold text-lg uppercase tracking-tight text-[#1648FF]">DIFFERENT</span>
          <span className="font-body text-[9px] font-bold tracking-widest mt-0.5">INDIA '26</span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-5 lg:px-10 pb-16 lg:pb-24 pt-28">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF3D] animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF3D]" />
            <span className="font-body text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] text-[#C8FF3D]">
              Nike Running · India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-[#F2F3EE] uppercase leading-[0.77] tracking-[-0.045em] select-none text-[clamp(4.5rem,14vw,12.5rem)] animate-in fade-in slide-in-from-bottom-6 duration-800 delay-100">
            Find <br />
            <span className="text-[#C8FF3D] italic">your</span> <br />
            fast.
          </h1>

          {/* Campaign Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-900 delay-200">
            {/* Primary Solid Paper Button */}
            <button
              onClick={onShopRunningClick}
              className="bg-[#F2F3EE] text-[#07111C] hover:bg-[#C8FF3D] transition-all duration-200 px-6 py-3.5 text-[12px] font-body font-bold uppercase tracking-[0.16em] flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#C8FF3D] active:scale-95"
            >
              <span>Shop running</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {/* Transparent Bordered Button */}
            <button
              onClick={onWatchFilmClick}
              className="bg-transparent text-[#F2F3EE] border border-[rgba(255,255,255,0.30)] hover:border-[#C8FF3D] hover:text-[#C8FF3D] transition-all duration-200 px-6 py-3.5 text-[12px] font-body font-bold uppercase tracking-[0.16em] flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#C8FF3D] active:scale-95"
            >
              <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
              <span>Watch the film</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
