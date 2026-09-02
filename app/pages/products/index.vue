<script setup lang="ts">
const store = productStore()

onMounted(() => {
  store.getAllProduct()
})

const products = computed(() => store.productList?.data ?? [])

function onAddToCart(product: any) {
  console.log('Added to cart:', product.name)
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-8">
    <div class="flex flex-col lg:flex-row gap-8">
      <aside class="w-full lg:w-64 shrink-0">
        <ProductFilterSidebar />
      </aside>

      <div class="flex-1">
        <ProductGrid :products="products" @add-to-cart="onAddToCart" />
      </div>
    </div>
  </div>
</template>