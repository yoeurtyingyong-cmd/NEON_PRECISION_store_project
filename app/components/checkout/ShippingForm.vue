<template>
    <div class=" rounded-2xl bg-[#111111] p-6 border border-zinc-800/80 shadow-2xl">
      <!-- Section Header -->
      <div class="flex items-center gap-3 mb-6">
        <span class="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold text-zinc-300">
          2
        </span>
        <h2 class="text-xl font-bold tracking-tight text-white">
          Payment Protocol
        </h2>
      </div>

      <!-- Payment Options Container -->
      <div class="space-y-3">
        <!-- Credit / Debit Option (Selected) -->
        <div class="rounded-xl border border-zinc-800 bg-[#161616] p-4">
          <!-- Option Header -->
          <label class="flex items-center justify-between cursor-pointer">
            <div class="flex items-center gap-3">
              <!-- Custom Radio Circle -->
              <span class="relative flex h-4 w-4 items-center justify-center rounded-full border border-blue-500 bg-blue-600">
                <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
              </span>
              <span class="text-sm font-semibold text-white">Credit / Debit</span>
            </div>
            <!-- Icon/Label Right -->
            <span class="font-serif text-xs text-zinc-400">credit_card</span>
          </label>

          <!-- Expandable Card Inputs -->
          <div class="mt-4 pl-3 border-l-2 border-zinc-800 space-y-3">
            <div>
              <input
                v-model="paymentForm.cardNumber"
                type="text"
                placeholder="0000 0000 0000 0000"
                class="w-full rounded-lg bg-[#0a0a0a] border border-zinc-800/60 px-4 py-3 text-xs font-mono text-zinc-300 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"
              />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <input
                v-model="paymentForm.expiry"
                type="text"
                placeholder="MM/YY"
                class="w-full rounded-lg bg-[#0a0a0a] border border-zinc-800/60 px-4 py-3 text-xs text-zinc-300 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"
              />
              <input
                v-model="paymentForm.cvc"
                type="text"
                placeholder="CVC"
                class="w-full rounded-lg bg-[#0a0a0a] border border-zinc-800/60 px-4 py-3 text-xs text-zinc-300 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"
              />
            </div>
          </div>
        </div>

        <!-- Cryptocurrency Option -->
        <div class="rounded-xl border border-zinc-800/60 bg-[#141414] p-4 transition hover:border-zinc-700">
          <label class="flex items-center justify-between cursor-pointer">
            <div class="flex items-center gap-3">
              <span class="h-4 w-4 rounded-full border border-zinc-600 bg-zinc-300"></span>
              <span class="text-sm font-semibold text-zinc-300">Cryptocurrency</span>
            </div>
            <span class="font-serif text-xs text-zinc-400">currency_bitcoin</span>
          </label>
        </div>

        <!-- Digital Wallet Option -->
        <div class="rounded-xl border border-zinc-800/60 bg-[#141414] p-4 transition hover:border-zinc-700">
          <label class="flex items-center justify-between cursor-pointer">
            <div class="flex items-center gap-3">
              <span class="h-4 w-4 rounded-full border border-zinc-600 bg-zinc-300"></span>
              <span class="text-sm font-semibold text-zinc-300">Digital Wallet</span>
            </div>
            <span class="font-serif text-xs text-zinc-400">account_balance_wallet</span>
          </label>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const paymentForm = reactive({
  cardNumber: '',
  expiry: '',
  cvc: '',
})
</script>