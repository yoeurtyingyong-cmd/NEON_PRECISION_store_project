<script setup lang="ts">        
    definePageMeta ({layout:'checkout'})

</script>
<template>
    <div class="bg-black">
        <div  class="flex p-4 gap-5">
            <div class="space-y-5  w-[70%]">
                <CheckoutPaymentMethod />
                <CheckoutShippingForm />
            </div>
            <div class="w-[30%]">
                <CheckoutOrderSummary />
            </div>
        </div>
        
    </div>

</template>