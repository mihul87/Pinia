
<script setup>
import { storeToRefs } from 'pinia';
import { useProductStore } from '~/stores/products';
  const productsStore = useProductStore();
  const { products, productCount} = storeToRefs(productsStore); 
</script>

<template>
  <div class="bg-corn-field text-trinidad font-medium ">
    <div class="max-w-4xl py-5 mx-auto">
      <header class="flex justify-between items-center mx-5">
        <h3 class="my-5 text-center text-lg font-bold">All Products: {{ productCount }}</h3>
        <button @click="productsStore.addOneMore()" class="flex">
          <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 18V6m-6 6h12"/></svg>
          <span>New Product</span>
        </button>
      </header>
      <ul class=""> 
        <li v-for="product in products" :key="product.id">
          <Product :product="product"/>
        </li>  
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
