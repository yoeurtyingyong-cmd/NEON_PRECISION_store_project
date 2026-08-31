<template>
  <div class="rounded-[9px] border border-[#24282c] bg-[#111111] px-[27px] py-[28px] text-white">
    <h1 class="text-[28px] leading-none font-bold tracking-[-0.8px] text-white">
      Order Summary
    </h1>
    <div class="mt-2 h-px bg-black"></div>
    <div class="mt-2 flex items-center gap-3">
      <div class="h-[56px] w-[56px] shrink-0 overflow-hidden rounded-[6px] bg-black">
        <img src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=150&q=80"
          alt="Quantum Earbuds V2" class="h-full w-full object-cover" />
      </div>
      <div class="min-w-0 flex-1">

        <div class="text-[12px] font-bold uppercase leading-[12px] tracking-[-0.1px] text-white">
          QUANTUM<br />EARBUDS V2
        </div>
        <div class="text-[10px] leading-[11px] text-[#a7a7a7]">
          Qty: 1 | Obsidian Black
        </div>
      </div>
      <div class="shrink-0 text-[16px] font-medium tracking-[-0.3px] text-white">
        $299.00
      </div>
    </div>
    <div class="mt-3 flex items-center gap-[13px]">
      <div class="h-[56px] w-[56px] shrink-0 overflow-hidden rounded-[6px] bg-black">
        <img src="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=150&q=80"
          alt="Neon Chrono X" class="h-full w-full object-cover" />
      </div>
      <div class="min-w-0 flex-1">
        <div class="text-[12px] font-bold uppercase text-white">
          NEON CHRONO X
        </div>
        <div class="text-[10px] leading-[11px] text-[#a7a7a7]">
          Qty: 1 | Titanium
        </div>
      </div>
      <div class="shrink-0 text-[16px] font-medium tracking-[-0.3px] text-white">
        $450.00
      </div>
    </div>
    <div class="mt-3 h-px bg-black"></div>
    <div class="mt-3 space-y-[12px]">
      <div class="flex items-center justify-between">
        <span class="text-[14px] font-medium text-white">
          Subtotal
        </span>
        <span class="text-[14px] font-medium text-white">
          $749.00
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-[14px] font-medium text-white">
          Shipping
        </span>
        <span class="text-[14px] font-semibold text-[#87aefd]">
          Free
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-[14px] font-medium text-white">
          Estimated Tax
        </span>
        <span class="text-[14px] font-medium text-white">
          $44.94
        </span>
      </div>
    </div>
    <div class="mt-3 h-px bg-black"></div>
    <div class="mt-3 flex items-center justify-between">
      <span class="text-[28px] font-bold tracking-[-0.7px] text-white">
        Total
      </span>
      <span class="text-[29px] font-bold tracking-[-0.8px] text-white">
        $793.94
      </span>
    </div>
    <button type="button" class="mt-[20px] flex h-[46px] w-full items-center justify-center
             gap-[10px] rounded-[7px] border border-[#9ab6ee]
             bg-[#a9c7ff] text-[12px] font-bold tracking-[0.2px]
             text-[#183b68] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
             transition duration-200 hover:bg-[#b8d2ff]
             active:scale-[0.99]">
      <span>COMPLETE PURCHASE</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        class="h-[15px] w-[15px]">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h13m-5-5 5 5-5 5" />
      </svg>
    </button>
    <div class="mt-2 flex items-center justify-center gap-4 text-[10px] font-medium text-[#9b9b9b]">
      <span>Guaranteed Safe Checkout</span>
    </div>
  </div>
</template>