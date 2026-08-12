import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface NewsletterProps {
  onSubscribe: (email: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      onSubscribe(email.trim());
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="w-full bg-[#F2F3EE] text-[#07111C] py-20 lg:py-28 px-5 lg:px-10 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Heading Block */}
        <div className="lg:col-span-6 space-y-4">
          <span className="font-body text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.24em] text-[#1648FF] block">
            Keep moving
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.82] tracking-tight">
            First look. <br />
            Every week.
          </h2>
          <p className="font-body text-sm sm:text-base font-medium text-[#07111C]/80 max-w-lg pt-2 leading-relaxed">
            Get exclusive early access to India drops, athlete stories, localized gear releases, and member-only events directly in your inbox.
          </p>
        </div>

        {/* Right: Form Block */}
        <div className="lg:col-span-6">
          {isSubmitted ? (
            <div className="bg-[#07111C] text-[#C8FF3D] p-8 border border-[#1648FF] flex items-center gap-4 animate-in fade-in duration-300">
              <div className="bg-[#C8FF3D] text-[#07111C] p-2 rounded-full">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl uppercase">You're in the squad.</h3>
                <p className="font-body text-xs text-white/80 uppercase tracking-wider">
                  Check your inbox soon for your exclusive Nike India access code.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  className="w-full bg-transparent border-b-2 border-[#07111C] py-4 text-sm sm:text-base font-body font-bold text-[#07111C] placeholder-[#07111C]/50 focus:outline-none focus:border-[#1648FF] uppercase tracking-wider transition-colors"
                  aria-label="Email address for Nike India newsletter"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="font-body text-[10px] sm:text-[11px] text-[#07111C]/60 uppercase tracking-wider max-w-xs">
                  By signing up, you agree to Nike's Privacy Policy and Terms of Use.
                </p>

                <button
                  type="submit"
                  className="bg-[#1648FF] text-[#F2F3EE] hover:bg-[#07111C] hover:text-[#C8FF3D] transition-all duration-200 px-8 py-4 text-[12px] font-body font-bold uppercase tracking-[0.16em] flex items-center gap-3 shrink-0 active:scale-95"
                >
                  <span>Sign up</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
