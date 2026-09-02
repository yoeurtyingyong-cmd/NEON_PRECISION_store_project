    <template>
  <div  class="w-ful">
    <h2 class="text-lg font-bold tracking-tight text-white mb-4">
      Complete The Setup
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        
        class="rounded-2xl bg-white/[0.03] border border-white/10 p-3 hover:border-white/20 transition-colors"
      >
        <div class="rounded-xl overflow-hidden aspect-[3/2] bg-[#0a0a0f]">
        <div class="content-center text-center">
            <h1 class=" text-2xl text-white font-extrabold text-center ">Image</h1>
        </div>
        </div>

        <div class="mt-3">
          <h3 class="text-sm font-semibold text-white">item name</h3>
          <p class="text-xs text-violet-300/80 mt-0.5">itemtagline</p>

          <div class="mt-2 flex items-center justify-between">
            <span class="text-base font-semibold text-violet-400">
            $250
            </span>
            <button
            
              class="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-violet-600 text-white transition-colors"
              :aria-label="`Add  to cart`"
            >
              <Icon name="mdi:plus" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>