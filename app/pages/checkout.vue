<script setup lang="ts">        
    definePageMeta ({layout:'checkout'})

</script>
<template>
    <div class="bg-black p-10">
        <div class="ml-1 md:ml-5">
            <h1 class="text-4xl text-white font-bold ">Secure Checkout</h1>
            <div>
                <img src="" alt="">
                <p class="text-white">256-bit Encrypted Trensaction</p>
            </div>
        </div>
        <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 gap-5 px-0 md:px-5 lg:px-5">
            <div class="space-y-5  w-full">
                <CheckoutPaymentMethod />
                <CheckoutShippingForm />
            </div>
            <div class="w-full">
                <CheckoutOrderSummary />
            </div>
        </div>
        
    </div>

</template>