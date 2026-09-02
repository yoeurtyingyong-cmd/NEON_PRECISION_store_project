export type ProductImage={
  id:number,
  url:string,
  sort_order:number
}
export type ProductCategory={
  id:number,
  name:string,
  slug:string,
  description:string|null
}
export type Product={
  id:number,
  category_id:number,
  name:string,
  slug:string,
  description:string,
  price:string,
  compare_at_price:string,
  stock:number,
  sku:string,
  is_active:true,
  category:ProductCategory,
  images:ProductImage[],
  rating?:number,
  reviews?:number,



}

export type ProductsResponse={
  data:Product[],
  total?:number,
  current_page?:number
}