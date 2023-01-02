<script>
import { useProductStore } from '~/stores/products';
export default {
    props: ['product'],
    setup(props) {
      const productsStore = useProductStore();

      const productDetails = computed(() => props.product.name + ' ' + props.product.description + " din zona" + " " + props.product.county + " " + props.product.price + " lei");
      
      return { productDetails, productsStore }
    }
}

</script>

<template>
  <div class="flex justify-between rounded border border-acapulco mx-2 mb-2 pt-2 px-3">
    <p>{{ productDetails }}</p>
    <div class="text-acapulco">
      <button @click="productsStore.deleteProduct(product.id)">
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#dc2626" d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712q.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z"/></svg>
      </button>
    </div>
  </div>
</template>


<style scoped>

</style>