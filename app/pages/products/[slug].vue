<template>
  <div class="bg-[#050507] px-10 py-10 md:px-10">
    <div v-if="pending" class="text-white/50 text-center py-16">Loading...</div>
    <div v-else-if="!product" class="text-red-400 text-center py-16">Product not found.</div>

    <template v-else>
      <div class="grid md:grid-cols-2 gap-12 w-full mx-auto">
        <ProductGallery :product="product" />
        <ProductInfo :product="product" />
      </div>

      <div>
        <hr class="text-2xl border-1 border-white/10 my-8" />
      </div>

      <div>
        <ProductRelatedProducts :category-id="product.category_id" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Product, } from '~/types/product'


const route = useRoute()
const slug = route.params.slug as string

const product = ref<Product | null>(null)
const pending = ref(true)
const useProduct = productStore()

onMounted(async () => {
  pending.value = true
  
  product.value = await useProduct.getProductBySlug(slug)
  pending.value = false
})
</script>