
<script setup>
import { storeToRefs } from 'pinia';
import { useProductStore } from '~/stores/products';
  const productsStore = useProductStore();
  const { products, productCount} = storeToRefs(productsStore); 
</script>

<template>
  <div class="bg-corn-field text-trinidad font-medium ">
    <div class="p-5 mx-auto">
      <header class="text-center m-5 bg-white p-3 rounded text-xl uppercase tracking-wider font-bold">
        Shop
      </header>
      <main class="grid grid-cols-3 gap-10 mx-5">
        <div class="col-span-2 bg-white p-3 rounded">
          <h3 class="my-5 text-center text-lg font-bold">All Products: {{ productCount }}</h3>
          <ul> 
            <li v-for="product in products" :key="product.id">
              <Product :product="product"/>
            </li>  
          </ul>
        </div>
        <NewProduct class=""/>
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
