<template>
  <div class=" rounded-lg border border-[#242424] bg-[#111111] p-6">
    <div class="flex items-center gap-3 pb-5 border-b border-[#242424]">
      <div class="w-6 h-6 rounded-full bg-[#1e293b] flex items-center justify-center">
        <span class="text-xs text-gray-300">2</span>
      </div>
      <h2 class="text-[24px] font-bold text-gray-200">
        Payment Protocol
      </h2>
    </div>
    <div class="mt-3 space-y-3">
      <div class="rounded-md border border-[#292929] bg-[#1b1b1b]">
        <div class="flex items-center justify-between px-3 py-4 cursor-pointer">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 rounded-full bg-[#60a5fa] ring-2 ring-[#3b82f6]/40 shadow-[0_0_8px_#3b82f6]">
            </div>
            <span class="text-sm font-medium text-gray-200">
              Credit / Debit
            </span>

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="#bdbdbd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>

        </div>
        <div class="px-5 pb-5">
          <div class="border-l-2 border-[#334155] pl-3">
            <input type="text" placeholder="0000 0000 0000 0000" maxlength="19" class="w-full h-[38px]
                                   rounded-md border border-[#292929] bg-black px-3 text-xs text-gray-300
                                   placeholder:text-gray-500 outline-none focus:border-[#3b82f6] transition">
            <!-- Expiry + CVC -->
            <div class="grid grid-cols-2 gap-3 mt-3">

              <input type="text" placeholder="MM/YY" maxlength="5" class="w-full h-[38px] rounded-md border border-[#292929]
                                       bg-black px-3 text-sm text-gray-300 placeholder:text-gray-500 outline-none
                                       focus:border-[#3b82f6] transition">
              <input type="text" placeholder="CVC" maxlength="4" class="w-full h-[38px] rounded-md border border-[#292929]
                                       bg-black px-3 text-sm text-gray-300 placeholder:text-gray-500 outline-none
                                       focus:border-[#3b82f6] transition">
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="w-full h-[49px] rounded-md border border-[#292929]
                       bg-[#1b1b1b] px-3 flex items-center justify-between hover:bg-[#202020] transition">
        <div class="flex items-center gap-3">
          <div class="w-3 h-3 rounded-full bg-white"></div>

          <span class="text-sm font-medium text-gray-200">
            Cryptocurrency
          </span>

        </div>


        <!-- Bitcoin Icon -->
        <span class="text-xl text-gray-400 font-bold">
          ₿
        </span>

      </button>
      <button type="button" class="w-full h-[49px] rounded-md border border-[#292929] bg-[#1b1b1b] px-3 flex items-center justify-between
               hover:bg-[#202020] transition">
        <div class="flex items-center gap-3">

          <!-- Radio -->
          <div class="w-3 h-3 rounded-full bg-white"></div>

          <span class="text-sm font-medium text-gray-200">
            Digital Wallet
          </span>

        </div>


        <!-- Wallet Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 7V4a1 1 0 0 0-1-1H5a3 3 0 0 0 0 6h15a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6" />
          <path d="M16 13h2" />
        </svg>

      </button>
    </div>
  </div>
</template>
