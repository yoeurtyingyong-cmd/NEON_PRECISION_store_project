<script setup lang="ts">
</script>
<template>
    <div class="flex bg-black  gap-5">
        
        <div class="space-y-5 w-[70%]">
            <CheckoutPaymentMethod />
            <CheckoutShippingForm />
        </div>
        <div class="w-[30%]">
            <CheckoutOrderSummary />
        </div>
    </div>

</template>