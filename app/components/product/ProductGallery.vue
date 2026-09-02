<template>
  <div class="w-full">
    <div>
      <!-- Main image -->
      <div
        class="relative rounded-2xl overflow-hidden bg-[#0a0a0f] aspect-[4/3] content-center text-center text-white font-bold"
      >
       
          <img
            :src="
              product.images?.[0]?.url ||
              'https://placehold.co/400x400/12141a/ffffff?text=No+Image'
            "
            alt="product.name"
          />
      

        <!-- Badge -->
        <span
          class="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/10 backdrop-blur-sm text-violet-300 border border-violet-500/30"
        >
          NEW RELEASE
        </span>
      </div>

      <div class="grid grid-cols-4 gap-3 mt-4">
        <button
          v-for="(image, index) in product.images"
          :key="image.id"
          class="relative rounded-xl overflow-hidden aspect-square border transition-colors border-violet-500"
          :class="
            index === 0
              ? 'border-violet-500'
              : 'border-white/10 hover:border-violet-500/50'
          "
        >
          <div>
            <img
              :src="image.url"
              alt="`${product.name} ${index + 1}`"
              class="w-full h-full object-cover"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- Thumbnails -->
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

defineProps<{
  product: Product;
}>();
</script>
