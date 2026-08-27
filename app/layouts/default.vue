<template>
  <div>
    <LayoutHeader @toggle-mobile-menu="showMobileMenu = true" />
    <LayoutMobileMenu v-model="showMobileMenu" />
    <slot />
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts">
const showMobileMenu = ref(false)
</script>
