<!-- components/BestSellers.vue -->
<template>
  <section class="bg-[#0b0c10] text-white py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-serif tracking-wide">Best Sellers</h2>
        <NuxtLink to="/products"
          class="text-xs tracking-widest uppercase text-slate-400 hover:text-white transition flex items-center gap-1">
          View All <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="product in products" :key="product.id"
          class="bg-[#16181d] rounded-xl overflow-hidden flex flex-col justify-between border border-slate-800/60 hover:border-slate-700 transition">
          <!-- Product Image Container -->
          <div class="relative bg-[#0d0e12] aspect-square flex items-center justify-center p-4">
            <!-- Badge -->
            <span v-if="product.isBestSeller"
              class="absolute top-3 left-3 bg-[#1e293b]/80 border border-cyan-500/30 text-cyan-400 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
              Best Seller
            </span>

            <img :src="product.image" :alt="product.name" class="max-h-full max-w-full object-contain" />
          </div>

          <!-- Product Info -->
          <div class="p-5 flex flex-col flex-grow justify-between">
            <div>
              <h3 class="text-lg font-semibold text-slate-100 mb-2">
                {{ product.name }}
              </h3>

              <!-- Rating -->
              <div class="flex items-center gap-1 text-slate-400 text-sm mb-6">
                <span class="text-slate-400">☆</span>
                <span class="font-medium text-slate-200">{{ product.rating }}</span>
                <span class="text-slate-500">({{ product.reviewsCount }} reviews)</span>
              </div>
            </div>

            <!-- Price and Action -->
            <div class="flex items-center justify-between mt-auto">
              <div class="flex items-baseline gap-2">
                <span class="text-lg font-semibold text-white">
                  ${{ product.price }}
                </span>
                <span v-if="product.originalPrice" class="text-sm text-slate-500 line-through">
                  ${{ product.originalPrice }}
                </span>
              </div>

              <button @click="addToCart(product)" aria-label="Add to cart"
                class="w-10 h-10 rounded-full bg-[#0d0e12] border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-slate-800 hover:text-white transition">
                🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = ref([
  {
    id: 1,
    name: 'Aura Buds Pro',
    rating: 4.9,
    reviewsCount: 215,
    price: 199,
    originalPrice: 249,
    isBestSeller: true,
    image: '/images/aura-buds-pro.png',
  },
  {
    id: 2,
    name: 'Vortex GPU X',
    rating: 4.7,
    reviewsCount: 85,
    price: 899,
    originalPrice: null,
    isBestSeller: false,
    image: '/images/vortex-gpu-x.png',
  },
  {
    id: 3,
    name: 'Titan Laptop Z',
    rating: 5.0,
    reviewsCount: 42,
    price: 2499,
    originalPrice: 2799,
    isBestSeller: true,
    image: '/images/titan-laptop-z.png',
  },
  {
    id: 4,
    name: 'Neon Watch GT',
    rating: 4.8,
    reviewsCount: 156,
    price: 349,
    originalPrice: null,
    isBestSeller: false,
    image: '/images/neon-watch-gt.png',
  },
])

const addToCart = (product) => {
  // Add item logic here
  console.log('Added to cart:', product.name)
}
</script>