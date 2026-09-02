<template>
  <div class="bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-violet-500/50 transition-colors group">
    <div class="relative aspect-square bg-[#0a0b0f] overflow-hidden">
      <img
        :src="product.images?.[1]?.url || 'https://placehold.co/400x400/12141a/ffffff?text=No+Image'"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div class="p-4">
      <div class="flex items-center justify-between mb-1">
        <span class="text-[11px] text-violet-400 font-medium uppercase tracking-wide">
          {{ product.category.name }}
        </span>
        <span class="flex items-center gap-1 text-xs text-white/70">
          <span class="text-yellow-400">★</span>
          {{ product.rating ?? 0 }}
        </span>
      </div>

      <h3 class="text-white font-semibold text-sm mb-2 line-clamp-1">
        {{ product.name }}
      </h3>

      <p class="text-white font-bold text-lg mb-3">
        ${{ Number(product.price).toFixed(2) }}
      </p>

      <button
        @click="$emit('add-to-cart', product)"
        class="w-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold py-2 rounded-lg transition-colors"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

defineProps<{
  product: Product
}>()

defineEmits(['add-to-cart'])
</script>