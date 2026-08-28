<script setup lang="ts">
interface CartItem {
  id: number
  name: string
  qty: number
  variant: string
  price: number
  image: string
}

const items = ref<CartItem[]>([
  {
    id: 1,
    name: 'QUANTUM EARBUDS V2',
    qty: 1,
    variant: 'Obsidian Black',
    price: 299.00,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'NEON CHRONO X',
    qty: 1,
    variant: 'Titanium',
    price: 450.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&auto=format&fit=crop'
  }
])

const shippingCost = ref(0)
const taxRate = ref(0.06) // 6%

const subtotal = computed(() => 
  items.value.reduce((sum, item) => sum + item.price * item.qty, 0)
)

const estimatedTax = computed(() => 
  subtotal.value * taxRate.value
)

const grandTotal = computed(() => 
  subtotal.value + shippingCost.value + estimatedTax.value
)

const handleCheckout = () => {
  // Handle purchase logic
}
</script>

<template>
  <div class="  rounded-2xl bg-[#0e0f11] p-6 text-white shadow-2xl border border-neutral-800 font-sans">
    <!-- Header -->
    <h2 class="text-2xl font-bold tracking-tight mb-6 text-white">
      Order Summary
    </h2>

    <!-- Items List -->
    <div class="space-y-4 mb-6">
      <div 
        v-for="item in items" 
        :key="item.id" 
        class="flex items-center justify-between gap-3"
      >
        <div class="flex items-center gap-3">
          <img 
            :src="item.image" 
            :alt="item.name" 
            class="h-14 w-14 rounded-xl object-cover bg-neutral-900 border border-neutral-800"
          >
          <div>
            <h3 class="text-xs font-extrabold tracking-wider text-neutral-100 uppercase leading-tight">
              {{ item.name }}
            </h3>
            <p class="text-xs text-neutral-400 mt-0.5">
              Qty: {{ item.qty }} | {{ item.variant }}
            </p>
          </div>
        </div>
        <span class="text-base font-semibold text-white whitespace-nowrap">
          ${{ item.price.toFixed(2) }}
        </span>
      </div>
    </div>

    <hr class="border-neutral-800/80 mb-5">

    <!-- Pricing Details -->
    <div class="space-y-3 text-sm mb-6">
      <div class="flex justify-between items-center text-neutral-300">
        <span class="font-medium">Subtotal</span>
        <span class="font-semibold text-white">${{ subtotal.toFixed(2) }}</span>
      </div>

      <div class="flex justify-between items-center text-neutral-300">
        <span class="font-medium">Shipping</span>
        <span class="font-semibold text-indigo-400">
          {{ shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}` }}
        </span>
      </div>

      <div class="flex justify-between items-center text-neutral-300">
        <span class="font-medium">Estimated Tax</span>
        <span class="font-semibold text-white">${{ estimatedTax.toFixed(2) }}</span>
      </div>
    </div>

    <hr class="border-neutral-800/80 mb-6">

    <!-- Total Price -->
    <div class="flex justify-between items-baseline mb-6">
      <span class="text-2xl font-bold tracking-tight text-white">Total</span>
      <span class="text-3xl font-extrabold text-[#8cb4ff] tracking-tight">
        ${{ grandTotal.toFixed(2) }}
      </span>
    </div>

    <!-- CTA Button -->
    <button
      type="button"
      @click="handleCheckout"
      class="w-full py-3.5 px-4 rounded-xl bg-[#a4c2ff] hover:bg-[#8cb4ff] transition-colors duration-200 text-[#0c1324] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm"
    >
      <span>COMPLETE PURCHASE</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-4 w-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        stroke-width="2.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>

    <!-- Footer Trust Badge -->
    <div class="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-400 font-medium">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-4 w-4 text-neutral-400" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" />
      </svg>
      <span>Guaranteed Safe Checkout</span>
    </div>
  </div>
</template>