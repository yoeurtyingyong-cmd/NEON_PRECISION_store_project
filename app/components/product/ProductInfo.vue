<template>
  <div class="w-full text-white">

    <!-- Title -->
    <h1 class="text-3xl font-bold tracking-tight">
      {{ product.name }}
    </h1>

    <!-- Rating -->
    <div class="mt-2">
      <ProductRating
        :rating="product.rating ?? 0"
        :reviews="product.reviews ?? 0"
      />
    </div>

    <!-- Price -->
    <p class="mt-4 text-2xl font-semibold text-violet-400">
      ${{ Number(product.price || 0).toFixed(2) }}
    </p>

    <!-- Description -->
    <p class="mt-4 text-sm leading-relaxed text-white/60">
      {{ product.description || "No description available." }}
    </p>

    <!-- Storage capacity -->
    <div class="mt-6">

      <p
        class="text-xs font-semibold tracking-wide uppercase
               text-white/40 mb-2"
      >
        Storage capacity
      </p>

      <div class="flex gap-3">

        <button
          class="flex-1 rounded-xl border px-4 py-2.5
                 text-sm font-medium transition-colors
                 border-violet-500 bg-violet-500/10 text-white"
        >
          256GB

          <span class="text-white/40">
            +$15
          </span>
        </button>

      </div>
    </div>

    <!-- Color finish -->
    <div class="mt-6">

      <p
        class="text-xs font-semibold tracking-wide uppercase
               text-white/40 mb-2"
      >
        Color finish
      </p>

      <div class="flex items-center gap-3">

        <button
          class="w-8 h-8 rounded-full border-2
                 transition-all border-violet-500 scale-110
                 bg-black"
        >
        </button>

      </div>

      <p class="mt-2 text-sm text-white/40">
        Selected: Phantom Black
      </p>

    </div>

    <!-- Actions -->
    <div class="mt-8 flex flex-col gap-3">

      <!-- Buy Now -->
      <button
        class="w-full rounded-xl bg-violet-600
               hover:bg-violet-500 text-white
               font-semibold py-3 transition-colors"
      >
        Buy Now
      </button>

      <!-- Add To Cart -->
      <button
        @click="emit('add-to-cart', product)"
        class="w-full flex items-center justify-center gap-2
               rounded-xl border border-white/15
               hover:border-white/30 text-white
               font-semibold py-3 transition-colors"
      >
        <Icon
          name="mdi:cart-outline"
          class="w-4 h-4"
        />

        Add to Cart
      </button>

    </div>

    <!-- Trust badges -->
    <div
      class="mt-4 flex items-center gap-4
             text-xs text-white/40"
    >

      <span class="flex items-center gap-1">
        <Icon
          name="mdi:truck-fast-outline"
          class="w-4 h-4"
        />

        Free overnight shipping
      </span>

      <span class="flex items-center gap-1">
        <Icon
          name="mdi:shield-check-outline"
          class="w-4 h-4"
        />

        2-year global warranty
      </span>

    </div>

  </div>
</template>


<script setup lang="ts">

import type { Product } from "~/types/product"

defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e: "add-to-cart", product: Product): void
}>()

</script>