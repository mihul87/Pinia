<script setup>
import { storeToRefs } from 'pinia';
import { useProductStore } from '~/stores/products';
import { useUserStore } from '~/stores/users';
  const productsStore = useProductStore();
  const { products, productCount} = storeToRefs(productsStore);
  const userStore = useUserStore();
  const {user, isUserLoggedIn, fullname}= storeToRefs(userStore);
  
</script>

<template>
  <div class="bg-corn-field text-trinidad font-medium ">
    <div class="bg-acapulco h-12 text-corn-field text-lg flex justify-end justify-items-center py-1 px-10">
      <div v-if="isUserLoggedIn" class="flex items-center">
        <p class="pr-5">
           <span>{{fullname}}</span> <span>{{ user.email }}</span>
        </p>
        <button @click="userStore.logout" class="font-bold border-2 border-white rounded-md px-3 py-1">Log out</button>
      </div>
      <div v-else class="flex items-center">
        <NuxtLink to="/login" class="font-bold border-2 border-white rounded-md px-3 py-1">Login</NuxtLink> 
      </div>
    </div>
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
input {
    @apply border border-acapulco px-2 text-black font-normal rounded
}
</style>