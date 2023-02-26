<template>
  <div class="mb-5"></div>
  <Cart :data="availableCart" @deleteItem="deleteItem" @checkout="checkout" :totalPrice="totalPriceCart" />
</template>

<script setup>
import Cart from '../components/Cart.vue';
import Button from '../components/Button.vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const availableCart = computed(() => store.getters.availableCart);
const totalPriceCart = computed(() => store.getters.totalPriceCart);

const deleteItem = (id) => {
  store.commit('deleteOneItemCart', id);
};

const checkout = () => {
  alert(`Pesanan berhasil di checkout dengan total harga Rp. ${totalPriceCart.value}`);
  location.reload();
};
</script>
