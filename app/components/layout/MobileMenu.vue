<template>
  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 md:hidden"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/60"
        @click="close"
      />

      <!-- Panel -->
      <div class="absolute right-0 top-0 h-full w-72 bg-[#0d0f14] border-l border-white/10 flex flex-col">
        <!-- Header row -->
        <div class="flex items-center justify-between px-6 h-[72px] border-b border-white/10">
          <span class="text-white font-extrabold text-lg tracking-wide">
            NEON_PRECISION
          </span>
          <button
            class="text-white"
            aria-label="Close menu"
            @click="close"
          >
            <Icon name="mdi:close" class="w-6 h-6" />
          </button>
        </div>

        <!-- Nav Links -->
        <nav class="flex flex-col px-6 py-6 gap-1">
          <NuxtLink
            to="/shop"
            class="py-3 text-white/80 hover:text-white border-b border-white/5"
            active-class="!text-violet-400"
            @click="close"
          >
            Shop
          </NuxtLink>
          <NuxtLink
            to="/specs"
            class="py-3 text-white/80 hover:text-white border-b border-white/5"
            active-class="!text-violet-400"
            @click="close"
          >
            Specs
          </NuxtLink>
          <NuxtLink
            to="/support"
            class="py-3 text-white/80 hover:text-white border-b border-white/5"
            active-class="!text-violet-400"
            @click="close"
          >
            Support
          </NuxtLink>
          <NuxtLink
            to="/account"
            class="py-3 text-white/80 hover:text-white border-b border-white/5"
            active-class="!text-violet-400"
            @click="close"
          >
            Account
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="mt-auto px-6 py-6 border-t border-white/10 flex gap-6">
          <NuxtLink to="/cart" class="text-white/85 flex items-center gap-2" @click="close">
            <Icon name="mdi:cart-outline" class="w-5 h-5" />
            <span class="text-sm">Cart</span>
          </NuxtLink>
          <NuxtLink to="/profile" class="text-white/85 flex items-center gap-2" @click="close">
            <Icon name="mdi:account-outline" class="w-5 h-5" />
            <span class="text-sm">Account</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}
</script>