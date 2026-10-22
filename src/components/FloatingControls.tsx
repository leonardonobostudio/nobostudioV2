import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronUp, X, Check } from 'lucide-react';

interface FloatingControlsProps {
  isTechMode: boolean;
}

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: string;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ isTechMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Design Sprint MVP', category: 'Strategy', price: '$4,800' },
    { id: '2', name: 'WebGL 3D Experience', category: 'Creative Tech', price: '$8,500' },
  ]);
  const [orderedSuccess, setOrderedSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Right Edge Floating Shopping Cart Tab (as in reference image) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          aria-label="Open Agency Sprints & Service Cart"
          className="bg-white hover:bg-neutral-100 text-neutral-900 pl-3.5 pr-2.5 py-3 rounded-l-xl shadow-[-5px_0_25px_rgba(0,0,0,0.5)] flex items-center gap-1.5 transition-all duration-200 group cursor-pointer border-t border-b border-l border-neutral-200"
        >
          <ShoppingCart className="w-5 h-5 text-amber-500 fill-amber-500/20 group-hover:scale-110 transition-transform" />
          {cartItems.length > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#ff3811] text-[10px] font-bold text-white flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Bottom Right Floating Scroll-To-Top Button (as in reference image 2) */}
      <div 
        className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="w-12 h-12 rounded-full text-white shadow-[0_10px_25px_rgba(255,56,17,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          style={{ backgroundColor: isTechMode ? '#00e5ff' : '#ff3811' }}
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      </div>

      {/* Cart Slide-out Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-[#111114] border-l border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-amber-500" />
                  <h3 className="text-lg font-bold text-white font-syne">Agency Cart</h3>
                </div>
                <button
                  type="button"
                  aria-label="Close cart drawer"
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {cartItems.length === 0 ? (
                  <p className="text-neutral-400 text-sm py-8 text-center">Your agency project scope is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-white">{item.name}</div>
                        <div className="text-xs text-neutral-400">{item.category}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-white font-mono">{item.price}</span>
                        <button
                          type="button"
                          aria-label={`Remove ${item.name}`}
                          onClick={() => setCartItems(cartItems.filter((i) => i.id !== item.id))}
                          className="text-neutral-500 hover:text-red-400 text-xs ml-1"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-4">
              <div className="flex justify-between items-center text-sm text-neutral-300">
                <span>Estimated Investment:</span>
                <span className="font-bold text-white text-base font-mono">
                  ${cartItems.reduce((acc, curr) => acc + parseInt(curr.price.replace(/[$,]/g, ''), 10), 0).toLocaleString()}
                </span>
              </div>

              {orderedSuccess ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" /> Inquiry submitted! We&apos;ll be in touch within 24 hours.
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setOrderedSuccess(true);
                    setTimeout(() => {
                      setOrderedSuccess(false);
                      setIsCartOpen(false);
                    }, 2000);
                  }}
                  className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white rounded-xl transition-all duration-300 cursor-pointer shadow-lg"
                  style={{ backgroundColor: isTechMode ? '#00b8d4' : '#ff3811' }}
                >
                  Proceed with Consultation
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
