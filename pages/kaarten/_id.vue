<template>
<main>

    <section class="product">
        <div v-for="product in PhotoCards" :key="product.id" :product="product">

            <img v-if="product.id == PC" :src="product.image" alt="">
            <div class="product_text" v-if="product.id == PC">
                <h1>{{ product.name }}</h1>
                <h2>{{ product.subtitle}}</h2>
                <p>{{ product.description }}</p>
                <p>€ {{ product.price }} p/st.</p>
            </div>

            <div class="order_box" v-if="product.id == PC">
                <div>
                    <input name="amount" type="text" v-model.number="quantity" @keyup.enter="addToCart(product)">
                    <p class="error-1">Voer een geldig getal in</p>
                    <p class="error-2">Helaas, we hebben van {{ product.name }} momenteel {{product.stock }} voorradig</p>
                    
                    
                </div>
                <button class="button-1" v-on:click="addToCart(product)">In winkelwagen</button>
                <button @click="test123(product)"></button>
                
            </div>


            <div class="modal-overlay" v-show="showModal" @click="showModal = false" v-if="product.id == PC">
                <div class="modal" @click.stop>
                    <h1>Opgeslagen in uw winkelwagen!</h1>
                    <img class="modal-image" :src="product.image" alt="">
                    <h2>{{ product.name }}</h2>
                    <h3></h3>
                    <p>Aantal: {{ product.quantity }}</p>
                    <p>Price: €{{ product.price }}</p>
                    <p>Total item cost: €{{ (product.price * product.quantity).toFixed(2) }}</p>
                    <NuxtLink class="button-1" to="/winkelwagen">Naar winkelwagen</NuxtLink>
                    <div class="button-2" @click="showModal = false">Verder winkelen</div>
                </div>
            </div>
        </div>
    </section>



</main>
</template>

<script>

import PhotoCards from "~/assets/json/PhotoCards.json";

export default {

    data () {
        return {
            PhotoCards,
            product: null,
            quantity: 1,
            showModal: false
        }
    },

    asyncData ({ params }) {
        return {
            PC: params.id
        }
    }, 

    computed: {
        cartItemCount () {
            return this.$store.getters.cartItemCount
        },
    },


    methods: {

        addToCart( product ) {

            this.product = product
            product.quantity = this.quantity
            this.$store.commit("addToCart", product);
            this.showModal = true


            if (this.cartItemCount < 100 && this.cartItemCount != 0) {
                document.querySelector(".notification-label").innerHTML = this.cartItemCount;
                document.querySelector(".notification-label").style.display = "flex";
            } else if (this.cartItemCount >= 100) {
                document.querySelector(".notification-label").innerHTML = "99+";
            } else if (this.cartItemCount == 0) {
                document.querySelector(".notification-label").style.display = "none";
            }



            // document.querySelector(".error-1").style.display = "none";
            // document.querySelector(".error-2").style.display = "none";

            // if (product.quantity <= 0) {
            //     document.querySelector(".error-1").style.display = "block";

            // } else if (product.quantity > product.stock) {
            //     document.querySelector(".error-2").style.display = "block";

            // } else {
                
            // }
                        
        },
    },
}

</script>



<style scoped>

.product {
    display: flex;
    align-items: center;
    width: 95%;
    flex-direction: column;
    margin-top: 150px;
}

.product img {
    width: 100%;
}

.product_text {
    padding: 25px 0;
}

.order_box {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.order_box div {
    width: 25%;
}

.order_box div input {
    width: 100%;
    height: 65px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    border-radius: 4px;
    padding: 0.5em 1em;
    border: 1px solid black;
    cursor: text;
    text-align: center;
}

.order_box div p {
    display: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


.order_box button {
    width: 70%;
}





























.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal {
    background-color: white;
    width: 90%;    
    border-radius: 5px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;

}

.modal-image {
    height: 200px;
    max-width: 200px;
}
</style>