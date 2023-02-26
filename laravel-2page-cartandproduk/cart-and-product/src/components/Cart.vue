<template>
  <div class="mt-5">
    <h1 class="mb-3">Halaman Keranjang</h1>
    <Table :rows="data" :columns="columns">
      <template #actions="{ row }">
        <Button color="btn-danger" content="Delete item" @functionClick="$emit('deleteItem', row.id)" />
      </template>
    </Table>
    <div class="mt-2">
      <p>
        Total :<b style="margin-left: 54%"> Rp.{{ totalPrice }} </b>
      </p>
    </div>

    <div class="mt-5" v-if="data.length > 0">
      <Button color="btn-primary" content="Checkout" @functionClick="$emit('checkout')" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Table from './Table.vue';
import Button from './Button.vue';

defineProps({
  data: {
    type: Array,
  },
  totalPrice: {
    type: Number,
  },
});
defineEmits(['deleteItem', 'checkout']);

const columns = ref([
  { title: 'Name', field: 'name' },
  { title: 'Quantity', field: 'stock' },
  { title: 'Price', field: 'price' },
]);
</script>
