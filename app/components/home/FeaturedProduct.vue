<template>
  <section class="max-w-6xl mx-auto p-6 bg-black text-white rounded-xl">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold tracking-wide">Featured Equipment</h2>
      <a href="#" class="text-xs text-blue-400 hover:underline tracking-wider uppercase flex items-center gap-1">
        View All <span>&rarr;</span>
      </a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      
      <div class="lg:col-span-2 bg-[#121214] border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row justify-between overflow-hidden relative group">
        <div class="flex flex-col justify-between z-10 max-w-xs space-y-4">
          <div>
            <span class="inline-block bg-blue-950 text-blue-400 text-[10px] font-semibold tracking-widest px-2.5 py-1 rounded uppercase mb-3">
              New Release
            </span>
            <h3 class="text-2xl font-semibold text-white mb-2">Nexus Pro X</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              The definitive mobile computing experience. Featuring an edge-to-edge quantum display.
            </p>
          </div>
          
          <div class="pt-6">
            <div class="text-2xl font-bold text-white mb-3">$1,299</div>
            <button class="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-wider px-5 py-2.5 rounded transition uppercase">
              Add to Cart
            </button>
          </div>
        </div>

        <div class="mt-6 md:mt-0 flex-1 flex justify-center items-center relative">
          <img 
            src="https://via.placeholder.com/400x300" 
            alt="Nexus Pro X" 
            class="object-contain max-h-64 drop-shadow-[0_10px_20px_rgba(59,130,246,0.15)]"
          />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        
        <div class="bg-[#121214] border border-gray-800 rounded-xl p-4 flex flex-col justify-between">
          <div class="bg-[#1a1a1e] rounded-lg h-36 flex items-center justify-center p-4 mb-3">
            <img src="https://via.placeholder.com/150" alt="Aura Sonic V2" class="max-h-full object-contain" />
          </div>
          <div class="flex justify-between items-end">
            <div>
              <h4 class="text-sm font-semibold text-gray-200">Aura Sonic V2</h4>
              <p class="text-sm text-gray-400 mt-1">$349</p>
            </div>
            <button class="p-2 text-gray-400 hover:text-white transition" aria-label="Add Aura Sonic V2 to cart">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="bg-[#121214] border border-gray-800 rounded-xl p-4 flex flex-col justify-between">
          <div class="bg-[#1a1a1e] rounded-lg h-36 flex items-center justify-center p-4 mb-3">
            <img src="https://via.placeholder.com/150" alt="Chrono Sync" class="max-h-full object-contain" />
          </div>
          <div class="flex justify-between items-end">
            <div>
              <h4 class="text-sm font-semibold text-gray-200">Chrono Sync</h4>
              <p class="text-sm text-gray-400 mt-1">$799</p>
            </div>
            <button class="p-2 text-gray-400 hover:text-white transition" aria-label="Add Chrono Sync to cart">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>