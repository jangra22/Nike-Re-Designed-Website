import React from 'react';

interface OfferStripProps {
  onOfferClick?: () => void;
}

export const OfferStrip: React.FC<OfferStripProps> = ({ onOfferClick }) => {
  return (
    <div
      onClick={onOfferClick}
      className="w-full bg-[#C8FF3D] text-[#07111C] py-2 px-4 text-center cursor-pointer hover:bg-[#bbf028] transition-colors duration-200 select-none z-50 relative"
      style={{ minHeight: '34px' }}
      role="banner"
      aria-label="Membership Offer Announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] font-body leading-none">
        <span>Members get 5% off all orders</span>
        <span className="hidden sm:inline opacity-60">·</span>
        <span className="hidden sm:inline">Free delivery for Nike Members</span>
        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
};
