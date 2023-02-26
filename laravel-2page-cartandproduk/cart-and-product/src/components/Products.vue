<template>
  <div class="mt-2">
    <div class="mb-3 d-flex justify-content-between align-items-center">
      <h1>Halaman Produk</h1>
    </div>
    <Table :rows="data" :columns="columns" class="">
      <template #actions="{ row }">
        <Button color="btn-primary" content="Add to cart" @functionClick="$emit('addItem', row.id)" />
      </template>
    </Table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import Table from './Table.vue';

defineProps(['data']);
defineEmits(['addItem']);

const columns = ref([
  { title: 'Name', field: 'name' },
  { title: 'Description', field: 'description' },
  { title: 'Quantity', field: 'stock' },
  { title: 'Price', field: 'price' },
]);
</script>
