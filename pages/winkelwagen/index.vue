<template>
    <main>




        <section class="cart-section">

            <div v-if="!cartItemCount">
                <h1>Helaas, u heeft geen producten in uw winkelwagen..</h1>
            </div>

            <h1 v-if="cartItemCount">Uw winkelwagen</h1>
            <div class="cart-card" v-for="product in orderedproducts" :key="product.id" >

                <h2>{{ product.name }}</h2>
                <img :src="product.image" alt="">
                <h3>Prijs per stuk: € {{ (product.price * 1).toFixed(2) }}</h3>
                <h3>Totaal: € {{ (product.price * product.quantity).toFixed(2) }}</h3>
                <h3 style="text-decoration:underline;cursor:pointer;" v-on:click="removeProductFromCart(product)">Uit winkelwagen verwijderen</h3>
                <button @click="addOneToCart(product)">+</button>
                <h3>Aantal: {{ product.quantity }}</h3>
                <button @click="removeOneFromCart(product)">-</button>

            
            </div>

            <div v-if="cartItemCount">
                <h2>Verzending: € {{ shipping.toFixed(2) }}</h2>
                <h1>Totaalbedrag: € {{ (cartTotal + shipping).toFixed(2) }}</h1>
            </div>
            <NuxtLink class="button-1" to="/winkelwagen/gegevens">Afrekenen</NuxtLink>
        </section>
        
    </main> 
</template>



<script>

import _ from "lodash";


export default {

    data () {
        return {
            shipping: 5, 
        }
    },

    computed: {

        products () {
            return this.$store.getters.cartItems
        },

        cartTotal () {
            return this.$store.getters.cartTotal
        },

        orderedproducts: function () {
            return _.orderBy(this.products, ["id"])
        },

        cartItemCount () {
            return this.$store.getters.cartItemCount
        }, 
    },

    methods: {
        addOneToCart( product ) {

            this.product = product
            this.$store.commit("addOneToCart", product);



            // NOTIFICATION LABEL UPDATING
            if (this.cartItemCount < 100 && this.cartItemCount != 0) {
                document.querySelector(".notification-label").innerHTML = this.cartItemCount;
                document.querySelector(".notification-label").style.display = "flex";
            } else if (this.cartItemCount >= 100) {
                document.querySelector(".notification-label").innerHTML = "99+";
            } else if (this.cartItemCount == 0) {
                document.querySelector(".notification-label").style.display = "none";
            }
        },

        removeOneFromCart( product ) {
            this.$store.commit("removeOneFromCart", product);

            // NOTIFICATION LABEL UPDATING
            if (this.cartItemCount < 100 && this.cartItemCount != 0) {
                document.querySelector(".notification-label").innerHTML = this.cartItemCount;
                document.querySelector(".notification-label").style.display = "flex";
            } else if (this.cartItemCount >= 100) {
                document.querySelector(".notification-label").innerHTML = "99+";
            } else if (this.cartItemCount == 0) {
                document.querySelector(".notification-label").style.display = "none";
            }
        },

        removeProductFromCart( product ) {
            this.$store.commit("removeProductFromCart", product);

            // NOTIFICATION LABEL UPDATING
            if (this.cartItemCount < 100 && this.cartItemCount != 0) {
                document.querySelector(".notification-label").innerHTML = this.cartItemCount;
                document.querySelector(".notification-label").style.display = "flex";
            } else if (this.cartItemCount >= 100) {
                document.querySelector(".notification-label").innerHTML = "99+";
            } else if (this.cartItemCount == 0) {
                document.querySelector(".notification-label").style.display = "none";
            }
        },
    },
}



</script>



<style scoped>
.cart-section {
    width: 90%;
    margin: 150px 0;
}

.cart-card {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    padding: 20px;
}

.cart-card img {
    width: 50px;
    height: 50px;
}

</style>