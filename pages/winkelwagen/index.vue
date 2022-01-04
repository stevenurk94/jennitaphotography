<template>
    <main>
        <BreadCrumbs :items="breadcrumbs" :cartbreadcrumbs="true"/>
        <h1 v-if="cartItemCount">Uw winkelwagen</h1>
        <section>
            <div class="items" v-if="cartItemCount">
                <div class="items__card" v-for="product in orderedproducts" :key="product.id" >
                    <NuxtLink class="items__card__img" :to="`/kaarten/${ product.slug }`">
                        <img :src="require(`~/assets/img${product.image2}`)" alt="">
                    </NuxtLink>
                
                    <div class="items__card__info">
                        <div class="items__card__info__title">
                            <NuxtLink :to="`/kaarten/${ product.slug }`">{{ product.name }}</NuxtLink>
                            <h3>{{ product.category }}</h3>
                        </div>
                       

                        <div class="items__card__info__options">
                            <div class="items__card__info__options__change">
                                <p class="items__card__info__options__change__remove" v-on:click="removeProductFromCart(product)"></p>
                                <div class="items__card__info__options__change__quantity">
                                    <button @click="removeOneFromCart(product)">&#8722;</button>
                                    <p>{{ product.quantity }}</p>
                                    <button @click="addOneToCart(product)">&#43;</button>
                                </div>
                            </div>
                            
                            <p>€ {{ (product.price * product.quantity).toFixed(2).replace(".", ",") }}</p>
                        </div>                      
                    </div>
                </div>
            </div>
            <div class="summary sticky" v-if="cartItemCount">
                <div class="summary__subtotal">
                    <h3>Subtotaal</h3>
                    <h3>€ {{ (cartTotal).toFixed(2).replace(".", ",") }}</h3>
                </div>
                <p>Inclusief btw</p>

                <NuxtLink class="button-1" to="/winkelwagen/gegevens">Ik ga bestellen</NuxtLink>
            </div>




            
        </section>

        <EmptyCart  v-if="!cartItemCount"/>
        
    </main> 
</template>



<script>

import _ from "lodash";


export default {

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

        breadcrumbs() {
            return [
                {
                    label: "Verder winkelen",
                    url: "/kaarten"
                }
            ]
        }
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

h1 {
    max-width: 1523px;
    width: 95%;
}


section {
    display: flex;
    justify-content: space-between;
}

.items {
    width: 60%;
    margin-right: 85px;
}


.items__card {
    border-bottom: 1px solid #3a524db4;
    padding: 30px 0px;
    display: flex;
}



/* ########## IMAGE ########## */

.items__card__img {
    border: 1px solid #3a524db4;
    border-radius: 5px;
    display: inherit;
    justify-content: center;
    align-items: center;
    height: 170px;
    width: 140px;
    /* width: 110px;
    height: 110px; */
    margin-right: 25px;
    padding: 10px;
    transition: all 300ms ease-in-out;
}

.items__card__img:hover {
    transform: scale(1.01);
}

.items__card__img img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}



.items__card__info {
    width: 80%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    position: relative;
}

/* ########## INFO TITLE ########## */

.items__card__info__title a {
    font-family: 'IBM Plex Serif', serif;
    font-size: 25px;
    font-weight: 600;

}

.items__card__info__title a:hover {
    text-decoration: underline;
}

.items__card__info__title h3 {
    text-transform: uppercase;
    color: #3A524D;
    font-size: 17px;
}

.items__card__info__options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 25px;
}

.items__card__info__options__change {
    display: flex;
    align-items: center;
}

.items__card__info__options__change__remove {
    cursor: pointer;
    margin-right: 25px;
}

.items__card__info__options__change__remove::before {
    content: "🗑 Verwijderen";
}



.items__card__info__options__change__quantity {
    display: flex;
    border-radius: 5px;
    width: fit-content;   
    align-items: center;
    padding: 0;
}

.items__card__info__options__change__quantity button {
    background: transparent;
    border: 1px solid #3a524db4;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
    line-height: 1;
    /* border: none; */
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    transition: all 300ms ease-in-out;
    height: 32px;
    color: #3A524D;
}

.items__card__info__options__change__quantity button:hover {
    border-color: #3A524D;
    background: #3a524d65;
}

.items__card__info__options__change__quantity button:nth-child(1) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.items__card__info__options__change__quantity button:nth-child(3) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.items__card__info__options__change__quantity p {
    font-size: 16px;
    width: 44px;
    border-top: 1px solid #3a524db4;
    border-bottom: 1px solid #3a524db4;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: context-menu;
}


.items__card__info__options > p {
    font-weight: 700;
}




/* ########## SUMMARY ########## */
.summary {
    width: 33%;
    border-radius: 5px;
    padding: 30px;
    height: fit-content;
    background: #3a524d65;
    position: sticky;
    top: 90px;
}

.summary__subtotal {
    display: flex;
    justify-content: space-between;
}

.summary p {
    margin-top: 2px;
    margin-bottom: 50px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.541);
}

.summary a {
    width: 100%;
    display: flex;
    justify-content: center;
}









@media only screen and (max-width: 958px) {

    section {
        display: block;
    }

    .items {
        width: 100%;
        margin: 0;
    }

    .summary {
        margin-top: 70px;
        width: 100%;
        /* position: inherit; */
    }
}

@media only screen and (max-width: 758px) {

    .items__card__info__options__change__remove {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
    }

    .items__card__info__options__change__remove::before {
        content: "🗑";
        font-size: 23px;
    }
}



</style>