<script setup>
// import { ref } from 'vue'
import { useProductStore } from '~/stores/products';
  const productStore = useProductStore();
    const name = ref('');
    const description = ref('');
    const price = ref(null);
    const county = ref('');
    const handleSubmit = () => {
        productStore.addProduct({
            index: productStore.lastProduct.id + 1,
            name: name,
            description: description,
            price: price,
            county: county
        })
    }
  
//   return { name, description, price, county, productStore }
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white rounded py-3 px-5">
    <h2 class="text-center my-2">New Product</h2>
    <div class="mb-2">
      <label for="name">Name:</label>
      <div class="mt-1">
          <input type="text" placeholder="Ie" v-model="name" />
      </div>
    </div>
    <div>
      <label for="description">Description:</label>
      <div class="mt-1">
        <input type="text" placeholder="din in" v-model="description" />
      </div>
    </div>
    <div>
      <label for="price">Price:</label>
      <div class="mt-1">
        <input type="number" placeholder="200" v-model="price" />
      </div>
    </div>
    <div>
      <label for="county">County:</label>
      <div class="mt-1">
        <input type="text" placeholder="Moldova" v-model="county" />
      </div>
    </div>
    <button class="w-full my-6 mx-auto border rounded-md bg-corn-field px-5 py-2">
      <!-- <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 18V6m-6 6h12"/></svg> -->
      Add
    </button>
  </form>
</template>


<style scoped>
input {
    @apply border border-acapulco px-2 text-black font-normal w-full
}
</style>