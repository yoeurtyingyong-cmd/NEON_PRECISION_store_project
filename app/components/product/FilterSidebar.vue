<script setup lang="ts">
import { ref } from 'vue'

const categories = [
  { value: 'processors', label: 'Processors' },
  { value: 'graphics-cards', label: 'Graphics Cards' },
  { value: 'motherboards', label: 'Motherboards' }
]

const selectedCategories = ref(['processors'])
const priceValue = ref(1000)
const minRating = ref(4)
</script>
<template>
<aside class="w-64 bg-black text-white p-5 rounded-lg">
    <!-- Header -->
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-sm font-bold tracking-wide">FILTERS</h2>
      <button class="text-xs text-violet-400 hover:text-violet-300">
        Reset
      </button>
    </div>
    <div>
      <hr class=" border border-secondary">
    </div>
    <!-- Category -->
    <div class="mb-6 mt-5">
      <h3 class="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
        Category
      </h3>
      <div class="space-y-2">
        <label
          v-for="category in categories"
          :key="category.value"
          class="flex items-center gap-2 cursor-pointer group"
        >
          <input
            v-model="selectedCategories"
            :value="category.value"
            type="checkbox"
            class="w-4 h-4 rounded border-white/30 bg-transparent text-violet-500 focus:ring-violet-500 focus:ring-offset-0"
          />
          <span class="text-sm text-white/80 group-hover:text-white">
            {{ category.label }}
          </span>
        </label>
      </div>
    </div>

    <!-- Price Range -->
    <div class="mb-6">
      <h3 class="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
        Price Range
      </h3>
      <input
        v-model.number="priceValue"
        type="range"
        min="0"
        max="20000"
        step="100"
        class="w-full accent-violet-500"
      />
      <div class="flex justify-between text-xs text-white/60 mt-2">
        <span>$0</span>
        <span class="text-white font-medium">${{ priceValue.toLocaleString() }}</span>
        <span>$20000+</span>
      </div>
    </div>

    <!-- Minimum Rating -->
    <div>
      <h3 class="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
        Minimum Rating
      </h3>
      <div class="flex items-center gap-1">
        <button
          v-for="star in 5"
          :key="star"
          @click="minRating = star"
          class="text-lg transition-colors"
          :class="star <= minRating ? 'text-yellow-400' : 'text-white/20'"
        >
          ★
        </button>
        <span class="text-xs text-white/60 ml-2">& Up</span>
      </div>
    </div>
  </aside>
</template>