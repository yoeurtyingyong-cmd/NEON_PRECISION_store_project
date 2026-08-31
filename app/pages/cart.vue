<template>
    <div class="bg-black p-5">
        <div class="px-0">
            <h1 class="text-4xl text-white md:p-5 mb-3">Shopping Cart</h1>
        </div>
        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-5 px-0 md:px-5 lg:px-5">
            <div class="w-full">
                <CartItem/>
            </div>
            <div class="w-full">
                <CartSummary/>
            </div>
        </div>
    </div>
</template>