<template>
<div class="flex flex-col min-h-screen">
    <header class="bg-secondary ">
    <div class="max-w-7xl mx-auto h-16 flex items-center justify-center">
      <NuxtLink to="/" class="flex items-center gap-2">
        <span class="w-4 h-4 rounded-full bg-violet-500"></span>
        <span class="text-white font-bold text-2xl tracking-wide">
          NEON_PRECISION
        </span>
      </NuxtLink>
    </div>
  </header>
  <div>
    <slot/>
  </div>
  
  <footer class="relative bg-[#0d0f14]  overflow-hidden">
    <div class="max-w-7xl mx-auto h-14 flex items-center justify-center relative z-10">
      <p class="text-sm text-white/60">
        © 2026
        <span class="text-violet-400 font-semibold">NEON_PRECISION</span>.
        <span class="text-cyan-400">Engineered for the void.</span>
      </p>
    </div>

    <!-- Dotted pattern panel (right side) -->
    <div
      class="absolute top-0 right-0 h-full w-32 opacity-40"
      style="background-image"
    />
  </footer>
</div>

    
</template>