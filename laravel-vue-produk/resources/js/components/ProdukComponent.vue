<template>
    <div>
        <h1>Semua Produk</h1>
        <table style="width: 90%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.name">
                    <td style="text-align: center">{{ product.name }}</td>
                    <td style="text-align: center">
                        {{ product.description }}
                    </td>
                    <td style="text-align: center">{{ product.stock }}</td>
                    <td style="text-align: center">{{ product.price }}</td>
                    <td style="text-align: center">
                        <button @click="addToCart(product)">Add</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <br />

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
    data() {
        return {
            products: [
                {
                    name: "Indomie Goreng Rendang",
                    description: "Masakan instan terenak didunia",
                    stock: 10,
                    price: 3900,
                },
                {
                    name: "Mie Gelas Rendang",
                    description: "Mie instan khusus anak kosan",
                    stock: 3,
                    price: 10500,
                },
                {
                    name: "Bakmi Mewah",
                    description: "Kalau anak kosan jangan macem2 deh",
                    stock: 80,
                    price: 10000,
                },
            ],
            cart: [],
        };
    },
    methods: {
        addToCart(product) {
            if (product.stock > 0) {
                product.stock--;
                const item = this.cart.find((i) => i.name === product.name);
                if (item) {
                    item.quantity++;
                } else {
                    this.cart.push({
                        name: product.name,
                        quantity: 1,
                        price: product.price,
                    });
                }
            }
        },
        removeFromCart(index) {
            const cartItem = this.cart[index];
            const productItem = this.products.find(
                (i) => i.name === cartItem.name
            );
            cartItem.quantity--;
            productItem.stock++;
            if (cartItem.quantity === 0) {
                this.cart.splice(index, 1);
            }
        },
        checkout() {
            const totalPrice = this.cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            alert(`Total Price: ${totalPrice}`);
        },
    },
    computed: {
        total() {
            return this.cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
        },
    },
};
</script>
