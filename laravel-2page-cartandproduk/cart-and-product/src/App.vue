<template>
  <main class="py-3 px-5 position-relative">
    <RouterView />
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { RouterView } from 'vue-router';
const store = useStore();

const totalItemCart = computed(() => store.getters.totalItemCart);
</script>
