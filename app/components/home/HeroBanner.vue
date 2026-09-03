<template>
  <div class="relative min-h-screen w-full bg-[#05070B] text-white overflow-hidden flex items-center font-sans">
    <!-- Background Image / Overlay -->
    <div class="absolute inset-0 z-0">
      <!-- High-tech futuristic device background placeholder -->
      <img 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop" 
        alt="Luminal Tech Background" 
        class="w-full h-full object-cover object-center opacity-40 mix-blend-screen scale-105"
      />
      <!-- Ambient Gradient Overlays for depth -->
      <div class="absolute inset-0 bg-radial-at-c from-transparent via-[#05070B]/70 to-[#05070B]"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/80 to-transparent"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
      <div class="max-w-xl space-y-6">
        
        <!-- Badge -->
        <div class="inline-block">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-900/40 text-blue-400 border border-blue-500/30 backdrop-blur-sm shadow-sm">
            Introducing Lumina Tech
          </span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
          Engineered for the <br />
          <span class="text-blue-500">Void.</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-lg">
          Experience the pinnacle of electronic precision. Uncompromising performance wrapped in absolute minimalism.
        </p>

        <!-- Call to Action Buttons -->
        <div class="pt-4 flex flex-wrap gap-4 items-center">
          <button 
            type="button" 
            class="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-600/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 uppercase tracking-wider"
          >
            Pre-Order Now
          </button>
          
          <button 
            type="button" 
            class="px-6 py-3.5 bg-transparent hover:bg-white/10 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 text-sm font-semibold rounded-md backdrop-blur-sm transition-all duration-200 focus:outline-none uppercase tracking-wider"
          >
            Explore Specs
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Lumina Tech - Engineered for the Void',
  meta: [
    { name: 'description', content: 'Experience the pinnacle of electronic precision.' }
  ]
})
</script>