import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { BagItem } from '../types';

interface BagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bagItems: BagItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const BagDrawer: React.FC<BagDrawerProps> = ({
  isOpen,
  onClose,
  bagItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = bagItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const delivery = subtotal > 0 ? 0 : 0; // Free delivery for Nike Members
  const total = subtotal + delivery;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#07111C] text-[#F2F3EE] w-full max-w-md h-full flex flex-col justify-between border-l border-[rgba(255,255,255,0.10)] p-6 sm:p-8 shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.10)]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#C8FF3D]" />
              <h2 className="font-display font-black text-2xl uppercase tracking-wider">
                Your Bag ({bagItems.reduce((acc, item) => acc + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/60 hover:text-[#C8FF3D] transition-colors"
              aria-label="Close bag"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Bag Items List */}
          <div className="my-6 space-y-4 max-h-[50vh] overflow-y-auto pr-2">
            {bagItems.length === 0 ? (
              <div className="text-center py-12 space-y-4 text-white/60">
                <p className="font-body text-xs uppercase tracking-widest">
                  Your Nike bag is currently empty.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#C8FF3D] text-[#07111C] font-body text-xs font-bold uppercase tracking-widest px-6 py-3"
                >
                  Explore drops
                </button>
              </div>
            ) : (
              bagItems.map(({ product, size, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-[#0d1c2d] p-4 border border-[rgba(255,255,255,0.08)]"
                >
                  {/* Thumbnail */}
                  <div
                    className="w-16 h-16 p-1 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: product.bgTone }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-extrabold text-lg uppercase truncate">
                      {product.name}
                    </h3>
                    <p className="font-body text-[10px] text-white/60 uppercase tracking-wider">
                      Size: {size} · {product.category}
                    </p>
                    <p className="font-body text-xs font-bold text-[#C8FF3D] mt-1">
                      {product.formattedPrice}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="flex items-center border border-white/20 bg-[#07111C]">
                      <button
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        className="px-2 py-0.5 text-xs text-white/80 hover:text-[#C8FF3D]"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-2 font-mono text-xs font-bold">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        className="px-2 py-0.5 text-xs text-white/80 hover:text-[#C8FF3D]"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="text-white/40 hover:text-[#FF684C] transition-colors"
                      aria-label={`Remove ${product.name} from bag`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Summary & Checkout */}
        {bagItems.length > 0 && (
          <div className="pt-4 border-t border-[rgba(255,255,255,0.10)] space-y-4">
            <div className="space-y-1.5 font-body text-xs uppercase tracking-wider">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#C8FF3D]">
                <span>Delivery (Nike Member)</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#F2F3EE] pt-2 border-t border-white/10">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full bg-[#C8FF3D] text-[#07111C] hover:bg-[#F2F3EE] transition-all py-4 text-[12px] font-body font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-3 active:scale-95"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
