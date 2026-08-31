<template>
    <div class="rounded-lg bg-[#111111] px-6 py-6 text-white shadow-lg">
        <h2 class="text-[21px] font-bold tracking-tight text-[#e5e5e5]">
            Order Summary
        </h2>
        <div class="mt-4 h-px bg-[#292929]"></div>
        <div class="mt-4 space-y-4">
            <div class="flex items-center justify-between">
                <span class="text-[9px] font-medium text-[#999999]">
                    Subtotal
                </span>
                <span class="text-[10px] font-semibold text-[#dddddd]">
                    $1,076.00
                </span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-[9px] font-medium text-[#999999]">
                    Shipping (Express)
                </span>
                <span class="text-[10px] font-semibold text-[#dddddd]">
                    $25.00
                </span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-[9px] font-medium text-[#999999]">
                    Estimated Tax
                </span>
                <span class="text-[10px] font-semibold text-[#dddddd]">
                    $89.00
                </span>
            </div>
        </div>
        <div class="mt-5 h-px bg-[#292929]"></div>
        <div class="mt-5 flex items-center justify-between">
            <span class="text-[14px] font-semibold text-[#d5d5d5]">
                Total
            </span>
            <span class="text-[25px] font-bold tracking-tight text-[#a9c7ff]">
                $1,450.00
            </span>
        </div>
        <button class="mt-5 flex h-[41px] w-full items-center justify-center gap-2 rounded-md
             bg-[#3b82f6] text-[11px] font-bold text-white
             transition hover:bg-[#3275df] active:scale-[0.99]">
            <span>Proceed to Checkout</span>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </button>
        <div class="mt-3 flex items-center justify-center gap-1 text-[9px] text-[#8b8b8b]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v2h8z" />
            </svg>
            <span>Secure Encryption</span>
        </div>
    </div>
</template>