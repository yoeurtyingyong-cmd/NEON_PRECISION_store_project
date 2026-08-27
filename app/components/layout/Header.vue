<script setup lang="ts">
defineEmits(['toggle-mobile-menu'])
</script>
<template>
 <header class="bg-secondary border-b border-white/10">
    <div class="max-w-7xl mx-auto h-[72px] px-8 flex items-center justify-between">
        <NuxtLink to="/" class="text-white font-bold text-xl tracking-wide ">
            NEON_PRECISION
        </NuxtLink >
        <nav class="hidden md:flex gap-8">
            <NuxtLink to="/" class="text-sm text-white/70 hover:text-white pb-1 border-b-2 border-transparent transition-colors" active-class="!text-white !border-violet-500">
                Shop
            </NuxtLink>
            <NuxtLink to="/specs" class="text-sm text-white/70 hover:text-white pb-1 border-b-2 border-transparent transition-colors" active-class="!text-white !border-violet-500">
                Specs
            </NuxtLink>
            <NuxtLink to="/support" class="text-sm text-white/70 hover:text-white pb-1 border-b-2 border-transparent transition-colors" active-class="!text-white !border-violet-500">
                Support
            </NuxtLink>
            <NuxtLink to="/account" class="text-sm text-white/70 hover:text-white pb-1 border-b-2 border-transparent transition-colors" active-class="!text-white !border-violet-500">
                Account
            </NuxtLink>
        </nav>
        <div class="flex items-center gap-5">
            <NuxtLink to="/cart" aria-label="Cart" class="text-white/85 hover:text-white transition-opacity">
                <Icon name="mdi:cart-outline" class="w-6 h-6"/>
            </NuxtLink>
            <NuxtLink to="/profile" aria-label="Profile" class="text-white/85 hover:text-white transition-opacity">
                <Icon name="mdi:account-outline" class="w-6 h-6"/>
            </NuxtLink>

            <button class="md:hidden text-white" aria-label="Open menu" @click="$emit('toggle-mobile-menu')" >
                <Icon name="mdi:menu" class="w-6 h-6"/>
            </button>
        </div>

    </div>
 </header>
</template>