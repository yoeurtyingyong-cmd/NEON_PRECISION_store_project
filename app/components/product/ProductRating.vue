<template>
  <div class="flex items-center gap-2">
    
    <!-- Star -->
    <div class="flex items-center gap-0.5 text-yellow-400">
      ★
    </div>

    <!-- Rating -->
    <span class="text-sm font-medium text-white/80">
      {{ rating  }}/5
    </span>

    <!-- Reviews -->
    <span class="text-sm text-white/40">
      ({{ reviews }} reviews)
    </span>

  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

defineProps<{
   rating: number
  reviews: number
}>();
</script>