<template>
<main>

    <BreadCrumbs :items="breadcrumbs"/>
    <section>
        

        <div v-for="product in PhotoCards" :key="product.id" :product="product"  class="product">

            <div class="product__img" v-if="product.id == PC">
                <img :src="require(`~/assets/img${product.image.jpeg.original}`)" alt="">

            </div>

            <div class="product__info" v-if="product.id == PC">
                <h1>{{ product.name }}</h1>
                <h3>{{ product.category }}</h3>
                <p>€ {{ product.price.toFixed(2).replace(".", ",") }} p/st.</p>
                <div class="product__info__box" v-if="product.id == PC">
                    <div v-if="product.stock !== 0">
                        <input name="amount" type="number" v-model.number="quantity" @keyup.enter="addToCart(product)">
                    </div>

                    <button v-if="product.stock !== 0" class="button-1" v-on:click="addToCart(product)">In winkelwagen</button>
                    <h1 v-if="product.stock === 0">Helaas, dit artikel is uitverkocht!</h1>
                    
                </div>
                <p class="error-1">Voer een geldig getal in</p>
                <p class="error-2">Helaas, we hebben van {{ product.name }} momenteel {{product.stock }} voorradig</p>
            </div>



            <transition name="fade">
                <div class="modal-overlay" v-show="showModal" @click="showModal = false" v-if="product.id == PC">
                    <div class="modal" @click.stop>
                        <Loading />
                        <div class="modal__header">
                            <span>
                                <Checkmark />
                            </span>
                            <h3>Toegevoegd aan je winkelwagen</h3>
                        </div>                  
                        <span class="modal__close" @click="showModal = false">
                            <Cross />
                        </span>
                        <div class="modal__product">
                            <div class="modal__product__img">
                                <img :src="require(`~/assets/img${product.image.jpeg.original}`)" alt="">
                            </div>
                            
                            <div class="modal__product__info">
                                <h2>{{ product.name }}</h2>
                                <h3>{{ product.category }}</h3>
                                <p>Aantal: {{ product.quantity }}</p>
                                <p>€ {{ product.price.toFixed(2) }}</p>
                                <!-- <p>Total item cost: €{{ (product.price * product.quantity).toFixed(2) }}</p> -->
                            </div>
                        </div>
                        <div class="modal__buttons">
                            <NuxtLink class="button-1" to="/winkelwagen">Naar winkelwagen</NuxtLink>
                            <button class="button-2" @click="showModal = false">Verder winkelen</button>
                        </div>
                    </div>
                </div>
            </transition>
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
            if (product.quantity <= product.stock && product.quantity > 0) {
                this.$store.commit("addToCart", product);
                this.showModal = true
            }
            
            setTimeout(() => {
                document.querySelector(".loadingbullets").style.display = "none";
            }, 1000)
        },

    },
}

</script>



<style scoped>

main {
    background: var(--clr-bg);
}


.product {
    display: flex;
    justify-content: space-between;

}

.product__img {
    display: flex;
    justify-content: center;
    width: calc(50% - 0.7%);
    border: 1px solid var(--clr-1-2);
    border-radius: var(--border-radius);
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

.product__info h3 {
    text-transform: uppercase;
    color: var(--clr-1-1);
    font-weight: 700;
    letter-spacing: 1.2px;
    margin: 3px 0px 20px 0px;
    font-size: 17px;
}

.product__info__box {
    width: 100%;
    display: flex;
    margin: 25px 0px;
}

.product__info__box div {
    margin-right: 15px;
}

.product__info__box button {
    width: 70%;
    max-width: 300px;
}



.product__info__box div input {
    width: 100%;
    height: 55px;
    max-width: 100px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    border-radius: var(--border-radius);
    border: 1px solid rgb(0 0 0 / 25%);
    cursor: text;
    text-align: center;
    background: transparent;
}

.product__info__box div p {
    display: none;
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



















/* ########## MODAL ########## */

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
    transition: all 3s ease-in-out;
}

.modal {
    max-width: 700px;
    background-color: white;
    width: 90%;    
    border-radius: var(--border-radius);
    padding: 20px 20px;
    position: relative;
    overflow: hidden;
    
}

.modal__close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3a524dbe;
    font-weight: 600;
}

.modal__close svg {
    fill: var(--clr-1-1);
}

.modal__header {
    display: flex;
}

.modal__header h3 {
    margin: 0 30px 20px 0;
    color: var(--clr-1-1);
    line-height: 1.2;
}

.modal__header span {
    border-radius: 50%;
    width: 27px;
    height: 27px;
    margin-right: 10px;
    border: 3px solid var(--clr-1-1);
}

.modal__header span svg {
    fill: var(--clr-1-1);
    margin: 4px 3.3px 3px 3px;
}


.modal__product {
    display: flex;
    margin-bottom: 30px;
}

.modal__product__img {
    border-radius: var(--border-radius);
    border: 1px solid var(--clr-1-2);
    padding: 10px;
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 0 30px 0 0;
}

.modal__product img {
    max-width: 60%;
}

.modal__product__info {
    width: 50%;
}

.modal__product__info h2 {
    padding-bottom: 5px;
}

.modal__product__info h3 {
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 4px;
    color: var(--clr-1-1);
}

.modal__product__info p {
    margin-bottom: 5px;
}


.modal__buttons {
    display: flex;
    align-items: center;
}

.modal__buttons a {
    margin-right: 18px;
}

.modal__buttons a, .modal__buttons button {   
    width: calc(50% - 10px);
    height: 100%;
}




@media only screen and (max-width: 767px) {

    .modal__header h2 {
        font-size: 25px;
    }

    .modal__header span {
        font-size: 17px;
        border: 1.5px solid var(--clr-1-1);
        max-width: 30px;
        max-height: 30px;
        min-width: 30px;
        min-height: 30px;
    }

    .modal__product h2 {
        font-size: 25px;
    }






    .modal__buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal__buttons a {
        margin: 0px 0px 10px 0px;
    }

    .modal__buttons a, .modal__buttons button {   
        width: 100%;
    }

    


}




.fade-enter-active, .fade-leave-active {
    transition: all 300ms ease-in-out;
}


.fade-enter, .fade-leave-to {
    opacity: 0;
}
















</style>