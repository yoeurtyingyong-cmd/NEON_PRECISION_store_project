<!-- components/home/CategoryGrid.vue -->
<template>
  <section class="bg-black text-white py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">Categories</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <NuxtLink
          v-for="category in categories"
          :key="category.name"
          :to="category.slug"
          class="bg-[#181818] hover:bg-[#222222] border border-zinc-800/80 rounded-xl aspect-square flex flex-col items-center justify-center p-4 transition duration-200 group"
        >
          <!-- Nuxt Icon Component -->
          <Icon 
            :name="category.icon" 
            class="w-8 h-8 text-zinc-300 group-hover:text-white transition-colors mb-3" 
          />
          <span class="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
            {{ category.name }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { name: 'Smartphones', slug: '/category/smartphones', icon: 'lucide:smartphone' },
  { name: 'Laptops', slug: '/category/laptops', icon: 'lucide:laptop' },
  { name: 'Audio', slug: '/category/audio', icon: 'lucide:headphones' },
  { name: 'Gaming', slug: '/category/gaming', icon: 'lucide:gamepad-2' },
  { name: 'Accessories', slug: '/category/accessories', icon: 'lucide:cable' }
]
</script>