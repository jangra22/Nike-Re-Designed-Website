import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from './data/nikeData';
import { Product, BagItem, CityKey } from './types';
import { OfferStrip } from './components/OfferStrip';
import { MainHeader } from './components/MainHeader';
import { HeroCampaign } from './components/HeroCampaign';
import { CampaignTicker } from './components/CampaignTicker';
import { LatestProducts } from './components/LatestProducts';
import { SplitPanel } from './components/SplitPanel';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { BagDrawer } from './components/BagDrawer';
import { VideoModal } from './components/VideoModal';
import { CustomizerModal } from './components/CustomizerModal';
import { Toast } from './components/Toast';

export default function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [bagItems, setBagItems] = useState<BagItem[]>([
    {
      product: INITIAL_PRODUCTS[0], // Pre-loaded with Pegasus 41 for realistic cart preview
      size: 'UK 9.5',
      quantity: 1
    }
  ]);
  const [favorites, setFavorites] = useState<string[]>(['pegasus-41']);
  const [activeCategory, setActiveCategory] = useState<string>('All Drops');
  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);
  const [customizerCity, setCustomizerCity] = useState<CityKey>('Mumbai');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleToggleFavorite = (productId: string, productName: string) => {
    setFavorites(prev => {
      const isFav = prev.includes(productId);
      const next = isFav ? prev.filter(id => id !== productId) : [...prev, productId];
      showToast(isFav ? `Removed ${productName} from Favorites` : `Added ${productName} to Favorites`);
      return next;
    });
  };

  const handleAddToCart = (product: Product) => {
    setBagItems(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, size: 'UK 9', quantity: 1 }];
    });
    showToast(`Added ${product.name} to Shopping Bag`);
    setIsBagOpen(true);
  };

  const handleUpdateBagQuantity = (productId: string, delta: number) => {
    setBagItems(prev =>
      prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as BagItem[]
    );
  };

  const handleRemoveBagItem = (productId: string) => {
    setBagItems(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from Bag');
  };

  const handleSearchSubmit = (query: string) => {
    showToast(`Searching Nike India for "${query}"...`);
    setActiveCategory('All Drops');
    const el = document.getElementById('latest-products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    showToast(`Category: ${category.toUpperCase()}`);
    const el = document.getElementById('latest-products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCustomizer = (city: CityKey) => {
    setCustomizerCity(city);
    setIsCustomizerOpen(true);
  };

  const handleCheckout = () => {
    showToast('Redirecting to Secure Nike India Checkout...');
    setIsBagOpen(false);
  };

  const totalBagCount = bagItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#07111C] text-[#F2F3EE] flex flex-col font-body selection:bg-[#C8FF3D] selection:text-[#07111C]">
      {/* 1. Membership Offer Strip */}
      <OfferStrip
        onOfferClick={() => showToast('Nike Membership: 5% off automatically applied at checkout!')}
      />

      {/* 2. Main Navigation Header */}
      <MainHeader
        bagCount={totalBagCount}
        onOpenBag={() => setIsBagOpen(true)}
        onSearchSubmit={handleSearchSubmit}
        onCategorySelect={handleCategorySelect}
        activeCategory={activeCategory}
      />

      <main className="flex-grow">
        {/* 3. Hero Campaign Section */}
        <HeroCampaign
          onShopRunningClick={() => handleCategorySelect('Running')}
          onWatchFilmClick={() => setIsVideoOpen(true)}
        />

        {/* 4. Moving Campaign Ticker Strip */}
        <CampaignTicker />

        {/* 5. Latest Product Section */}
        <div id="latest-products-section">
          <LatestProducts
            products={products}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onAddToCart={handleAddToCart}
            activeCategory={activeCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>

        {/* 6. Member Offer & City Customization Split Panel */}
        <SplitPanel
          onUseApp15Code={() => showToast('Promo code APP15 copied! Enter during checkout.')}
          onOpenCustomizer={handleOpenCustomizer}
        />

        {/* 7. Newsletter Subscription */}
        <Newsletter
          onSubscribe={(email) => showToast(`Subscribed ${email} to Nike India First Look`)}
        />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Side Drawers & Overlays */}
      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        bagItems={bagItems}
        onUpdateQuantity={handleUpdateBagQuantity}
        onRemoveItem={handleRemoveBagItem}
        onCheckout={handleCheckout}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <CustomizerModal
        isOpen={isCustomizerOpen}
        cityKey={customizerCity}
        onClose={() => setIsCustomizerOpen(false)}
        onAddCustomPairToBag={(customPair) => {
          handleAddToCart(customPair);
          showToast(`Custom ${customizerCity} Pegasus added to bag!`);
        }}
      />

      {/* Toast Feedback Banner */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
