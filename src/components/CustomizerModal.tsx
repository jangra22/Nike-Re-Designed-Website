import React, { useState } from 'react';
import { X, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { CityKey, Product } from '../types';
import { CITY_DATA } from '../data/nikeData';

interface CustomizerModalProps {
  isOpen: boolean;
  cityKey: CityKey;
  onClose: () => void;
  onAddCustomPairToBag: (customProduct: Product) => void;
}

const SWOOSH_COLORS = [
  { name: 'Electric Lime', hex: '#C8FF3D' },
  { name: 'Cobalt Blue', hex: '#1648FF' },
  { name: 'Siren Coral', hex: '#FF684C' },
  { name: 'Pure White', hex: '#F2F3EE' },
  { name: 'Midnight Ink', hex: '#07111C' }
];

const UPPER_FINISHES = ['Monsoon Mesh', 'Tactile Leather', 'Reflective Canvas'];

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  cityKey,
  onClose,
  onAddCustomPairToBag
}) => {
  const [selectedColor, setSelectedColor] = useState(SWOOSH_COLORS[0]);
  const [selectedFinish, setSelectedFinish] = useState(UPPER_FINISHES[0]);
  const [customText, setCustomText] = useState('MUMBAI-01');

  if (!isOpen) return null;

  const city = CITY_DATA[cityKey];

  const handleAddToCart = () => {
    const customProduct: Product = {
      id: `nike-by-you-${cityKey.toLowerCase()}-${Date.now()}`,
      name: `Pegasus 41 By You (${cityKey})`,
      category: `Customized (${selectedFinish})`,
      price: 13495,
      formattedPrice: '₹13,495',
      label: `${cityKey} Edition`,
      bgTone: '#1648FF',
      textColor: '#F2F3EE',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      tag: 'Running',
      description: `Customized with ${selectedColor.name} Swoosh and ${selectedFinish} upper.`
    };
    onAddCustomPairToBag(customProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#07111C] border border-[rgba(255,255,255,0.20)] w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left: Shoe Live Canvas Preview */}
        <div className="md:w-1/2 bg-[#1648FF] p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between relative z-10">
            <span className="bg-[#C8FF3D] text-[#07111C] px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest">
              Nike By You / {cityKey}
            </span>
            <span className="font-mono text-xs text-white/80">{city.coordinates}</span>
          </div>

          {/* Interactive Shoe Visual */}
          <div className="my-8 flex items-center justify-center relative z-10">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
              alt="Custom Nike Shoe Preview"
              className="max-h-64 object-contain filter drop-shadow-2xl transition-all duration-300 transform hover:scale-110"
              style={{ filter: `drop-shadow(0 10px 20px rgba(0,0,0,0.5))` }}
              referrerPolicy="no-referrer"
            />

            {/* Simulated Accent Swatch Badge */}
            <div
              className="absolute bottom-2 right-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black/20"
              style={{ backgroundColor: selectedColor.hex, color: selectedColor.hex === '#F2F3EE' || selectedColor.hex === '#C8FF3D' ? '#07111C' : '#F2F3EE' }}
            >
              SWOOSH: {selectedColor.name}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/20">
            <h3 className="font-display font-black text-3xl uppercase tracking-tight text-[#F2F3EE]">
              Pegasus 41 {cityKey} Custom
            </h3>
            <p className="font-body text-xs text-[#C8FF3D] uppercase tracking-wider mt-1">
              {city.tagline} · {selectedFinish}
            </p>
          </div>
        </div>

        {/* Right: Customization Controls */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-[#07111C] text-[#F2F3EE]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2 text-[#C8FF3D]">
                <Sparkles className="w-5 h-5" />
                <h2 className="font-display font-black text-2xl uppercase tracking-wider">
                  Design Studio
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-white/60 hover:text-[#C8FF3D]"
                aria-label="Close studio"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Colorway Selection */}
            <div className="space-y-4 mb-6">
              <label className="font-body text-xs font-bold uppercase tracking-widest text-white/80 block">
                1. Select Swoosh Accent Color
              </label>
              <div className="flex gap-3">
                {SWOOSH_COLORS.map((col) => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col)}
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-transform ${
                      selectedColor.name === col.name
                        ? 'border-[#C8FF3D] scale-110'
                        : 'border-white/20 hover:scale-105'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    aria-label={`Select ${col.name} color accent`}
                  >
                    {selectedColor.name === col.name && (
                      <Check
                        className={`w-4 h-4 ${
                          col.hex === '#F2F3EE' || col.hex === '#C8FF3D'
                            ? 'text-[#07111C]'
                            : 'text-[#F2F3EE]'
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Upper Finish Selection */}
            <div className="space-y-3 mb-6">
              <label className="font-body text-xs font-bold uppercase tracking-widest text-white/80 block">
                2. Choose Upper Material
              </label>
              <div className="grid grid-cols-1 gap-2">
                {UPPER_FINISHES.map((fin) => (
                  <button
                    key={fin}
                    onClick={() => setSelectedFinish(fin)}
                    className={`p-3 text-left font-body text-xs font-bold uppercase tracking-wider border transition-all ${
                      selectedFinish === fin
                        ? 'bg-[#1648FF] text-[#F2F3EE] border-[#C8FF3D]'
                        : 'bg-transparent text-white/70 border-white/10 hover:border-white/40'
                    }`}
                  >
                    {fin}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Heel Stamp */}
            <div className="space-y-2 mb-6">
              <label className="font-body text-xs font-bold uppercase tracking-widest text-white/80 block">
                3. Custom Heel Stamp (Up to 8 characters)
              </label>
              <input
                type="text"
                maxLength={8}
                value={customText}
                onChange={(e) => setCustomText(e.target.value.toUpperCase())}
                className="w-full bg-[#0d1c2d] border border-white/20 p-3 font-mono text-sm text-[#C8FF3D] font-bold uppercase focus:outline-none focus:border-[#C8FF3D]"
              />
            </div>
          </div>

          {/* Add Custom Pair Action */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="font-body text-[10px] text-white/60 uppercase block">Total Price</span>
              <span className="font-body font-bold text-lg text-[#C8FF3D]">₹13,495</span>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-[#C8FF3D] text-[#07111C] hover:bg-[#F2F3EE] transition-all px-6 py-3.5 text-xs font-body font-bold uppercase tracking-widest flex items-center gap-2 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add Custom Pair</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
