<template>
  <footer class="bg-[#0d0f14] border-t-2 border-violet-500">
    <div class="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row md:justify-between gap-10">
      <div>
        <NuxtLink  class="text-white font-extrabold text-xl tracking-wide">NEON_PRECISION</NuxtLink>
        <p class="mt-3 text-sm text-white/50 max-w-xs">© 2026 NEON_PRECISION. Engineered for the void.</p>
      </div>
      <div class="flex gap-16">
        <div>
          <h3 class="text-violet-400 text-xs font-bold tracking-wider uppercase mb-3">Legal</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/privacy" class="text-sm text-white/70 hover:text-white transition-colors"> Privacy Policy </NuxtLink></li>
            <li>
              <NuxtLink to="/terms" class="text-sm text-white/70 hover:text-white transition-colors"> Term of Service </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-violet-400 text-xs font-bold tracking-wider uppercase mb-3">Support</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/shipping" class="text-sm text-white/70 hover:text-white transition-colors"> Shopping Info </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/returns" class="text-sm text-white/70 hover:text-white transition-colors"> Returns </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-solid border-white/20 max-w-7xl mx-auto px-8 py-6 text-center">
      <p class="text-sm text-white/50">
        © 2026
        <span class= "text-white/50 font-semibold">NEON_PRECISION</span>.
        <span class=" text-white/50">Engineered for the void.</span>
      </p>
    </div>
  </footer>
</template>
