import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

interface MainHeaderProps {
  bagCount: number;
  onOpenBag: () => void;
  onSearchSubmit: (query: string) => void;
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const NAV_LINKS = [
  'New & Featured',
  'Men',
  'Women',
  'Kids',
  'Jordan',
  'Sale'
];

export const MainHeader: React.FC<MainHeaderProps> = ({
  bagCount,
  onOpenBag,
  onSearchSubmit,
  onCategorySelect,
  activeCategory
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery.trim());
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#07111C] border-b border-[rgba(255,255,255,0.10)] transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-5 flex items-center justify-between relative min-h-[72px]">
        {/* Left: Nike Logo / Wordmark */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCategorySelect('All Drops');
            }}
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#C8FF3D] outline-none"
            aria-label="Nike India Home"
          >
            {/* High-impact custom SVG Nike Swoosh */}
            <svg
              className="w-12 h-6 text-[#F2F3EE] group-hover:text-[#C8FF3D] transition-colors duration-200 fill-current"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M21.71 4.22c-3.13 2.1-7.85 5.56-11.66 9.17-2.61 2.47-4.8 5.16-5.83 6.61-.17.24-.4.36-.67.36-.37 0-.71-.24-.88-.63-.25-.56-.12-1.25.32-1.68 1.93-1.88 5.68-4.37 9.87-7.1 2.87-1.87 5.92-3.85 8.12-5.46.24-.18.52-.28.81-.28.53 0 .97.38 1.05.91.09.58-.28 1.1-.83 1.1-.11 0-.21-.02-.3-.04z"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-2xl tracking-tighter uppercase text-[#F2F3EE] group-hover:text-[#C8FF3D] transition-colors">
                NIKE
              </span>
              <span className="font-body text-[9px] font-bold text-[#C8FF3D] tracking-[0.25em] uppercase">
                INDIA
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeCategory.toLowerCase() === link.toLowerCase();
            return (
              <button
                key={link}
                onClick={() => onCategorySelect(link)}
                className={`text-[12px] font-body font-bold uppercase tracking-[0.12em] transition-colors duration-200 py-1 relative ${
                  isActive
                    ? 'text-[#C8FF3D] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C8FF3D]'
                    : 'text-[#F2F3EE] hover:text-[#C8FF3D]'
                }`}
              >
                {link}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (Search, Bag, Mobile Menu) */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Toggle / Inline Form */}
          {isSearchOpen ? (
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-[#0d1c2d] border border-[rgba(255,255,255,0.20)] px-3 py-1.5 w-48 sm:w-64 transition-all duration-300"
            >
              <Search className="w-4 h-4 text-[#C8FF3D] mr-2 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Nike India"
                className="bg-transparent text-xs text-[#F2F3EE] placeholder-white/40 focus:outline-none w-full font-body uppercase tracking-wider"
                aria-label="Search Nike India products"
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="text-white/60 hover:text-[#C8FF3D] ml-1 p-1"
                aria-label="Close search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#F2F3EE] hover:text-[#C8FF3D] transition-colors rounded-none focus-visible:ring-2 focus-visible:ring-[#C8FF3D]"
              aria-label="Open search bar"
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          {/* Shopping Bag Button */}
          <button
            onClick={onOpenBag}
            className="p-2 text-[#F2F3EE] hover:text-[#C8FF3D] transition-colors relative focus-visible:ring-2 focus-visible:ring-[#C8FF3D]"
            aria-label={`Shopping Bag, ${bagCount} items`}
          >
            <ShoppingBag className="w-5 h-5" />
            {bagCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#C8FF3D] text-[#07111C] font-body text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {bagCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#F2F3EE] hover:text-[#C8FF3D] lg:hidden transition-colors focus-visible:ring-2 focus-visible:ring-[#C8FF3D]"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#C8FF3D]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#07111C] border-b border-[rgba(255,255,255,0.10)] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  onCategorySelect(link);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left font-display text-2xl font-extrabold uppercase tracking-wider text-[#F2F3EE] hover:text-[#C8FF3D] py-1 border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between"
              >
                <span>{link}</span>
                <ArrowRight className="w-4 h-4 text-[#C8FF3D]" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[rgba(255,255,255,0.10)] flex justify-between items-center text-xs font-body text-white/60">
            <span>LOCATION: INDIA (INR ₹)</span>
            <span className="text-[#C8FF3D] font-bold">NIKE MEMBER ACCESS</span>
          </div>
        </div>
      )}
    </header>
  );
};
