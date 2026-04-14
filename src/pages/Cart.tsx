import React from 'react';

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-black">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-gray-400 text-sm mb-6">
        <a href="#" className="hover:text-black transition-colors">Home</a>
        <span>&gt;</span>
        <span className="text-black font-medium">Cart</span>
      </nav>

      <h1 className="text-4xl font-black mb-8 uppercase italic tracking-tighter">YOUR CART</h1>

      <div className="flex flex-col lg:flex-row gap-5">
        
        {/* Left: Cart Items List */}
        <div className="flex-grow border border-black/10 rounded-[20px] px-6">
          
          {/* Item 1: Gradient Graphic T-shirt */}
          <div className="flex py-6 gap-4 border-b border-black/10 last:border-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#F0EEED] rounded-xl flex-shrink-0 overflow-hidden">
              <img 
                src="./images/ao7.png" 
                alt="Product" 
                className="w-full h-full object-cover mix-blend-multiply" 
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Gradient Graphic T-shirt</h3>
                  <p className="text-sm text-black/60">Size: <span className="text-black/50">Large</span></p>
                  <p className="text-sm text-black/60">Color: <span className="text-black/50">White</span></p>
                </div>
                <button className="text-red-500 hover:text-red-600 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6h-3.5l-1-1h-5l-1 1H5v2h14V6zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9H6v10z" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold">$145</span>
                <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-5">
                  <button className="text-xl font-medium hover:text-gray-500">-</button>
                  <span className="font-medium">1</span>
                  <button className="text-xl font-medium hover:text-gray-500">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Checkered Shirt */}
          <div className="flex py-6 gap-4 border-b border-black/10 last:border-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#F0EEED] rounded-xl flex-shrink-0 overflow-hidden">
              <img 
                src="./images/ao2.png" 
                alt="Product" 
                className="w-full h-full object-cover mix-blend-multiply" 
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Checkered Shirt</h3>
                  <p className="text-sm text-black/60">Size: <span className="text-black/50">Medium</span></p>
                  <p className="text-sm text-black/60">Color: <span className="text-black/50">Red</span></p>
                </div>
                <button className="text-red-500 hover:text-red-600 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6h-3.5l-1-1h-5l-1 1H5v2h14V6zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9H6v10z" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold">$180</span>
                <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-5">
                  <button className="text-xl font-medium hover:text-gray-500">-</button>
                  <span className="font-medium">1</span>
                  <button className="text-xl font-medium hover:text-gray-500">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: Skinny Fit Jeans */}
          <div className="flex py-6 gap-4 border-b border-black/10 last:border-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#F0EEED] rounded-xl flex-shrink-0 overflow-hidden">
              <img 
                src="./images/quan1.png" 
                alt="Product" 
                className="w-full h-full object-cover mix-blend-multiply" 
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">Skinny Fit Jeans</h3>
                  <p className="text-sm text-black/60">Size: <span className="text-black/50">Large</span></p>
                  <p className="text-sm text-black/60">Color: <span className="text-black/50">Blue</span></p>
                </div>
                <button className="text-red-500 hover:text-red-600 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6h-3.5l-1-1h-5l-1 1H5v2h14V6zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9H6v10z" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold">$240</span>
                <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 gap-5">
                  <button className="text-xl font-medium hover:text-gray-500">-</button>
                  <span className="font-medium">1</span>
                  <button className="text-xl font-medium hover:text-gray-500">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Order Summary Sidebar */}
        <div className="lg:w-[450px] border border-black/10 rounded-[20px] p-6 h-fit bg-white">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-black/60 text-lg">Subtotal</span>
              <span className="font-bold text-lg">$565</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black/60 text-lg">Discount (-20%)</span>
              <span className="font-bold text-lg text-red-500">-$113</span>
            </div>
            <div className="flex justify-between items-center border-b border-black/10 pb-4">
              <span className="text-black/60 text-lg">Delivery Fee</span>
              <span className="font-bold text-lg">$15</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xl">Total</span>
              <span className="font-bold text-2xl">$467</span>
            </div>
          </div>

          {/* Promo Code Input */}
          <div className="flex gap-3 mb-6">
            <div className="flex-grow relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Add promo code" 
                className="w-full bg-[#F0F0F0] rounded-full py-3 pl-12 pr-4 outline-none placeholder:text-black/40 focus:ring-1 focus:ring-black/20" 
              />
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all active:scale-95">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-black text-white py-4 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-95 shadow-lg">
            Go to Checkout
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;