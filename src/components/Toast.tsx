import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#C8FF3D] text-[#07111C] px-6 py-3 shadow-2xl border-2 border-[#07111C] font-body text-xs font-bold uppercase tracking-[0.18em] flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="text-[#07111C] hover:opacity-75 font-mono text-sm px-1"
        aria-label="Dismiss notification"
      >
        ✕
      </button>
    </div>
  );
};
