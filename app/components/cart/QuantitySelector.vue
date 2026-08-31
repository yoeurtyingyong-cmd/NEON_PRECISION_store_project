<script setup lang="ts">
const quantity = ref(1)

function increase() {
  quantity.value++
}

function decrease() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

</script>
<template>
  <div class="flex items-center justify-between mt-4 sm:mt-2 pt-2 border-t sm:border-t-0 border-zinc-800/60">
    <div class="inline-flex items-center bg-black border border-zinc-800 rounded-lg p-0.5 shadow-inner">
      <button @click="decrease"
        class="w-8 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800/80 rounded transition-colors text-lg font-bold select-none focus:outline-none"
        aria-label="Decrease quantity">
        -
      </button>
      <div
        class="w-8 h-7 sm:w-8 sm:h-8 bg-white text-black font-semibold text-sm flex items-center justify-center rounded-sm mx-0.5 select-none shadow-sm">
        <span id="quantityDisplay">{{ quantity }}</span>
      </div>
      <button @click="increase"
        class="w-8 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800/80 rounded transition-colors text-lg font-bold select-none focus:outline-none"
        aria-label="Increase quantity">
        +
      </button>
    </div>
    <div class="text-right">
      <span id="priceDisplay" class="text-lg sm:text-xl font-bold tracking-tight text-white">
        $122.00
      </span>
    </div>
  </div>
</template>
