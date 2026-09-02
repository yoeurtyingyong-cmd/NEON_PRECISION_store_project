<template>
  <div>
    <!-- Toolbar -->
    <div class="flex items-center justify-between py-4 px-2 border-b border-white/10 mb-6 bg-secondary rounded-xl">
      <p class="text-sm text-white/60">
        Showing
        <span class="text-violet-400 font-semibold">{{ startItem }}-{{ endItem }}</span>
        of
        <span class="text-white font-semibold">{{ products.length }}</span>
        Products
      </p>

      <div class="flex items-center gap-2">
        <span class="text-sm text-white/60">Sort By</span>
        <select
          v-model="selectedSort"
          class="bg-[#12141a] border border-white/10 text-violet-400 text-sm font-medium rounded-lg px-3 py-2 focus:outline-none focus:border-violet-500 cursor-pointer"
        >
          <option value="newest">Newest Arrivals</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="products.length === 0" class="text-center py-16">
      <p class="text-white/50 text-sm">No products found.</p>
    </div>

    <!-- Grid -->
    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-10"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="$emit('add-to-cart', $event)"
      />
    </div>

    <div>
      <hr class="text-white/10 border-1" />
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-center gap-2 py-3">
      <button
        class="w-8 h-8 flex items-center justify-center rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
      >
        <Icon name="mdi:chevron-left" class="w-4 h-4" />
      </button>

      <button
        class="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium bg-violet-600 text-white"
      >
        1
      </button>

      <button
        class="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
      >
        2
      </button>

      <button
        class="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
      >
        3
      </button>

      <span class="w-8 h-8 flex items-center justify-center text-white/40 text-sm">
        ...
      </span>

      <button
        class="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
      >
        12
      </button>

      <button
        class="w-8 h-8 flex items-center justify-center rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
      >
        <Icon name="mdi:chevron-right" class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  products: any[]
}>()

defineEmits(['add-to-cart'])

const startItem = ref(1)
const endItem = ref(8)
const selectedSort = ref('newest')
</script>