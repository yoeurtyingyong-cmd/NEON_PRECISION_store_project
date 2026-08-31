<template>
    <div id="cartItemCard"
        class="cart-card-transition w-full bg-[#18181b] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden group hover:border-zinc-700/80">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pr-6 sm:pr-4">
            <div
                class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-zinc-950 overflow-hidden flex-shrink-0 border border-zinc-800/60 shadow-inner group-hover:border-cyan-500/30 transition-all">
                <img id="productImage"
                    src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80"
                    alt="N-Core Wireless Mouse"
                    class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onerror="this.src='https://placehold.co/200x200/111/0ef?text=N-Core+Mouse'" />
            </div>
            <div class="flex-1 min-w-0 w-full flex flex-col justify-between self-stretch">
                <div>
                    <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-white truncate pr-4">
                        N-Core Wireless Mouse
                    </h2>
                    <p id="variantLabel" class="text-xs sm:text-sm text-zinc-400 mt-0.5 font-medium">
                        Color: <span id="colorName" class="text-zinc-300">Obsidian Black</span>
                    </p>
                </div>
                <div>
                    <CartQuantitySelector />
                </div>

            </div>
        </div>
    </div>
</template>