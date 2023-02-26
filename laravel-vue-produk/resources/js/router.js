import { createRouter, createWebHistory } from "vue-router";
import Produk from "./components/ProdukComponent.vue";
import Cart from "./components/Cart.vue";

const routes = [
    {
        path: "/",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
