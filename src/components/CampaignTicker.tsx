import React from 'react';

export const CampaignTicker: React.FC = () => {
  const tickerText = 'Move to zero /// Made for India /// Sport is culture /// ';
  
  return (
    <div className="w-full bg-[#1648FF] text-[#F2F3EE] py-3 overflow-hidden border-y border-[rgba(255,255,255,0.10)] select-none">
      <div className="animate-marquee whitespace-nowrap">
        {/* Repeating items to create seamless infinite loop */}
        {[...Array(6)].map((_, index) => (
          <span
            key={index}
            className="font-body text-[12px] font-bold uppercase tracking-[0.2em] px-4 inline-block"
          >
            {tickerText}
          </span>
        ))}
      </div>
    </div>
  );
};
