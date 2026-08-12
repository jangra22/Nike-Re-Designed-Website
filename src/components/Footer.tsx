import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07111C] text-[#F2F3EE] border-t border-[rgba(255,255,255,0.10)] pt-16 pb-12 px-5 lg:px-10 max-w-[1440px] mx-auto select-none">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-[rgba(255,255,255,0.10)]">
        {/* Column 1: Nike India Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-10 h-5 text-[#C8FF3D] fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21.71 4.22c-3.13 2.1-7.85 5.56-11.66 9.17-2.61 2.47-4.8 5.16-5.83 6.61-.17.24-.4.36-.67.36-.37 0-.71-.24-.88-.63-.25-.56-.12-1.25.32-1.68 1.93-1.88 5.68-4.37 9.87-7.1 2.87-1.87 5.92-3.85 8.12-5.46.24-.18.52-.28.81-.28.53 0 .97.38 1.05.91.09.58-.28 1.1-.83 1.1-.11 0-.21-.02-.3-.04z"/>
            </svg>
            <span className="font-display font-black text-3xl tracking-tighter uppercase">
              NIKE INDIA
            </span>
          </div>
          <p className="font-body text-xs text-[rgba(255,255,255,0.60)] leading-relaxed">
            Empowering the next generation of Indian athletes, creators, and street culture tastemakers.
          </p>
        </div>

        {/* Column 2: Featured & Collections */}
        <div className="space-y-3 font-body text-xs uppercase tracking-wider">
          <h4 className="font-bold text-[#C8FF3D] text-sm">Featured</h4>
          <ul className="space-y-2 text-[rgba(255,255,255,0.60)]">
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Pegasus 41</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Nike Tech Fleece</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Air Jordan Drops</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Nike By You Mumbai</a></li>
          </ul>
        </div>

        {/* Column 3: Get Help */}
        <div className="space-y-3 font-body text-xs uppercase tracking-wider">
          <h4 className="font-bold text-[#C8FF3D] text-sm">Get Help</h4>
          <ul className="space-y-2 text-[rgba(255,255,255,0.60)]">
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Order Status</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Returns Policy</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Payment Options</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Actions */}
        <div className="space-y-3 font-body text-xs uppercase tracking-wider">
          <h4 className="font-bold text-[#C8FF3D] text-sm">Quick Actions</h4>
          <ul className="space-y-2 text-[rgba(255,255,255,0.60)]">
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Find a Store</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Nike Journal India</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Become a Member</a></li>
            <li><a href="#" className="hover:text-[#F2F3EE] transition-colors">Send Us Feedback</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Row */}
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-[11px] text-[rgba(255,255,255,0.40)] uppercase tracking-wider">
        <div className="flex items-center gap-2 text-[#F2F3EE]">
          <MapPin className="w-3.5 h-3.5 text-[#C8FF3D]" />
          <span>India · INR ₹</span>
          <span className="opacity-40">|</span>
          <span>© 2026 Nike, Inc. All Rights Reserved</span>
        </div>

        <div className="flex flex-wrap gap-6 text-[rgba(255,255,255,0.60)]">
          <a href="#" className="hover:text-[#F2F3EE] transition-colors">Guides</a>
          <a href="#" className="hover:text-[#F2F3EE] transition-colors">Terms of Sale</a>
          <a href="#" className="hover:text-[#F2F3EE] transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-[#F2F3EE] transition-colors">Nike Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
