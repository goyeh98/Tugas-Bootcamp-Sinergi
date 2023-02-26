<template>
    <div>
        <h1>Keranjang Belanja</h1>
        <table style="width: 90%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cart" :key="item.name">
                    <td style="text-align: center">{{ item.name }}</td>
                    <td style="text-align: center">{{ item.quantity }}</td>
                    <td style="text-align: center">
                        {{ item.price * item.quantity }}
                    </td>
                    <td style="text-align: center">
                        <button @click="removeFromCart(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style="margin-left: 10%">Total: {{ total }}</p>
        <button style="margin-left: 10%" @click="checkout">Checkout</button>
    </div>
</template>
<script>
export default {
    props: ["cart"],
    computed: {
        total() {
            return this.cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
        },
    },
    methods: {
        removeFromCart(index) {
            this.$emit("removeFromCart", index);
        },
        checkout() {
            this.$emit("checkout");
        },
    },
};
</script>
