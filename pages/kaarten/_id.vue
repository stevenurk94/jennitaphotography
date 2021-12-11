<template>
<main>
    <!-- <picture class=" width-cover"> 
        <source 
            media="(min-width: 768px)" 
            type="image/webp" 
            sizes=" (min-width: 1200px) 1200px, (min-width: 992px) 992px, (min-width: 768px) 768px, (min-width: 576px) 576px" 
            srcset=" 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=700&amp;height=430&amp;mode=crop&amp;format=webp&amp;signature=cc86aaaca89c5f0bde5076fa453ea5b773d89742 1200w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=579&amp;height=430&amp;mode=crop&amp;format=webp&amp;signature=dcb43841c5c6cd596d51484855742a407bf13a9e 992w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=448&amp;height=430&amp;mode=crop&amp;format=webp&amp;signature=07a7b9f6c5329e148f63fc21452c74bc109c630c 768w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=768&amp;height=430&amp;mode=crop&amp;format=webp&amp;signature=8d42ea39d542c316ca12a59599255dd8d5dfbfd1 576w "> 
            
        <source 
            media="(min-width: 768px)" 
            type="image/jpeg" 
            sizes=" (min-width: 1200px) 1200px, (min-width: 992px) 992px, (min-width: 768px) 768px, (min-width: 576px) 576px" 
            srcset=" 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=700&amp;height=430&amp;mode=crop&amp;format=jpeg&amp;signature=c184177e76623fee0a70e2b53d0e53c14d8c7fd9 1200w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=579&amp;height=430&amp;mode=crop&amp;format=jpeg&amp;signature=ce68112fcb32d4e6160b74bd1c2087474e9b4d86 992w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=448&amp;height=430&amp;mode=crop&amp;format=jpeg&amp;signature=5f8e145bd13da08f547aafa2299e308cfb3f9efb 768w , 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=768&amp;height=430&amp;mode=crop&amp;format=jpeg&amp;signature=2e91f615361a29eeafc3751234f79185c2f27370 576w "> 
        
        <source 
            type="image/webp" 
            media="(max-width:767px)" 
            srcset=" 
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=576&amp;height=323&amp;mode=crop&amp;format=webp&amp;signature=79b778e5921702f803f3cd3c342f15d71c38e2be ">
            
        <source 
            type="image/jpeg" 
            media="(max-width:767px)" 
            srcset="
            https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=576&amp;height=323&amp;mode=crop&amp;format=jpeg&amp;signature=2a259b9440eabc07a9d2b758e2d03448070d1cd5 ">
            
        <img 
            src=" https://plate-assets.com/prod1-img/1f4beed156/spg-18113-wandeling-hoog_laag-32.jpg?width=576&amp;height=323&amp;mode=crop&amp;format=jpeg&amp;signature=2a259b9440eabc07a9d2b758e2d03448070d1cd5 " 
            alt="spg-18113-wandeling-hoog_laag-32"> 
            
    </picture> -->


    <section class="product">
        <BreadCrumbs :items="breadcrumbs"/>

        <div v-for="product in PhotoCards" :key="product.id" :product="product">

            <img v-if="product.id == PC" :src="product.image" alt="">
            <div class="product_text" v-if="product.id == PC">
                <h1>{{ product.name }}</h1>
                <p>€ {{ product.price.toFixed(2) }} p/st.</p>
            </div>

            <div class="order_box" v-if="product.id == PC">
                <div>
                    <input v-if="product.stock !== 0" name="amount" type="text" v-model.number="quantity" @keyup.enter="addToCart(product)">
                    <p class="error-1">Voer een geldig getal in</p>
                    <p class="error-2">Helaas, we hebben van {{ product.name }} momenteel {{product.stock }} voorradig</p>
                </div>
                <button v-if="product.stock !== 0" class="button-1" v-on:click="addToCart(product)">In winkelwagen</button>
                <h1 v-if="product.stock === 0">Helaas, deze is uitverkocht!</h1>
                
            </div>


            <div class="modal-overlay" v-show="showModal" @click="showModal = false" v-if="product.id == PC">
                <div class="modal" @click.stop>
                    <h1>Opgeslagen in uw winkelwagen!</h1>
                    <img class="modal-image" :src="product.image" alt="">
                    <h2>{{ product.name }}</h2>
                    <h3></h3>
                    <p>Aantal: {{ product.quantity }}</p>
                    <p>Price: €{{ product.price.toFixed(2) }}</p>
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

        breadcrumbs() {
            return [
                {
                    label: this.$route.path.slice(1,8).replace(/([k])/g, "K"),
                    url: this.$route.path.slice(0,8),
                },
                {
                    label: PhotoCards.find(element => element.id === parseInt(this.$route.path.slice(9,))).name
                }
            ]
        }
    },

    methods: {

        addToCart( product ) {

            this.product = product
            product.quantity = this.quantity

            document.querySelector(".error-1").style.display = "none";
            document.querySelector(".error-2").style.display = "none";

            if (product.quantity <= 0) {
                document.querySelector(".error-1").style.display = "block";
            } 
            if (product.quantity > product.stock) {
                document.querySelector(".error-2").style.display = "block";
            } 
            if (product.quantity < product.stock && product.quantity > 0) {
                this.$store.commit("addToCart", product);
                this.showModal = true
            }


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