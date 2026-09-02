import { defineStore } from "pinia";
import type { Product, ProductsResponse } from "~/types/product";

export const productStore = defineStore("product", () => {
  const productList = ref<ProductsResponse | null>(null);
  const config = useRuntimeConfig();

  async function getAllProduct() {
    try {
      const res = await fetch(`${config.public.apiBase}/products`);
      const data = await res.json();
      productList.value = data;
    } catch (err) {
      console.error(err);
    }
  }
  async function getProductBySlug(slug: string): Promise<Product | null> {
    try {
      const res = await fetch(`${config.public.apiBase}/products/${slug}`);
      const data = await res.json();
      return data.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  return { productList, getAllProduct, getProductBySlug };
});
