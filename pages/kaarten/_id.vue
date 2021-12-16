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

    <BreadCrumbs :items="breadcrumbs"/>
    <section>
        

        <div v-for="product in PhotoCards" :key="product.id" :product="product"  class="product">

            <div class="product__img" v-if="product.id == PC">
                <img :src="require(`@/static/img${product.image2}`)" alt="">

            </div>

            <div class="product__info" v-if="product.id == PC">
                <h1>{{ product.name }}</h1>
                <p>€ {{ product.price.toFixed(2) }} p/st.</p>
                <div class="product__info__box" v-if="product.id == PC">
                    <div v-if="product.stock !== 0">
                        <input name="amount" type="text" v-model.number="quantity" @keyup.enter="addToCart(product)">
                    </div>

                    <button v-if="product.stock !== 0" class="button-1" v-on:click="addToCart(product)">In winkelwagen</button>
                    <h1 v-if="product.stock === 0">Helaas, dit artikel is uitverkocht!</h1>
                    
                </div>
                <p class="error-1">Voer een geldig getal in</p>
                <p class="error-2">Helaas, we hebben van {{ product.name }} momenteel {{product.stock }} voorradig</p>
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
                    label: "Home",
                    url: "/"
                },
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
    justify-content: space-between;

}

.product__img {
    display: flex;
    justify-content: center;
    width: calc(50% - 0.7%);
    border: 1px solid #3a524db4;
    border-radius: 5px;
    padding: 10px;
}

.product__img img {
    width: 70%;
    min-width: 300px;
}

.product__info {
    min-width: calc(50% - 1.5%);
    margin-left: 2%;
}

.product__info h1 {
    margin-bottom: 15px;
}

.product__info__box {
    width: 100%;
    display: flex;
    margin: 25px 0px;
}

.product__info__box div {
    width: 25%;
    margin-right: 15px;
}

.product__info__box button {
    width: 70%;
    max-width: 75%;
}



.product__info__box div input {
    width: 100%;
    height: 65px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    border-radius: 4px;
    padding: 0.5em 1em;
    border: 1px solid rgb(0 0 0 / 25%);
    cursor: text;
    text-align: center;
}

.product__info__box div p {
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




@media only screen and (max-width: 767px) {
    
    .product {
        display: flex;
        flex-direction: column;
    }

    .product__img, .product__img img {
        width: 100%;
    }

    .product__info {
        min-width: 100%;
        width: 100%;
        margin: 30px 0px 0px 0px;
        padding: 2px;
    }

    .product__info__box {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}












.error-1, .error-2 {
    display: none;
    color: rgb(156, 6, 6);
    font-size: 16px;
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
    z-index: 999999;
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