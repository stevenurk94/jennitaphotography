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
                        <NuxtLink :to="`/kaarten/${ product.slug }`">{{ product.name }}</NuxtLink>
                        <h3>{{ product.category }}</h3>
                        <p>€ {{ (product.price * product.quantity).toFixed(2) }}</p>
                        <p class="items__card__info__remove" v-on:click="removeProductFromCart(product)">&#128465; Verwijderen</p>
                        
                        <div class="items__card__info__quantity">
                            <button @click="removeOneFromCart(product)">&#8722;</button>
                            <p>{{ product.quantity }}</p>
                            <button @click="addOneToCart(product)">&#43;</button>
                        </div>

                    </div>
                </div>

            </div>
            <div class="summary" v-if="cartItemCount">
                <h2>Subtotaal: € {{ (cartTotal).toFixed(2) }}</h2>
                <NuxtLink class="button-1" to="/winkelwagen/gegevens">Afrekenen</NuxtLink>
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
}

.items {
    width: 66%;
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
    width: 200px;
    height: 200px;
    margin-right: 25px;
    padding: 10px;
    transition: all 300ms ease-in-out;
}

.items__card__img:hover {
    transform: scale(1.01);
}

.items__card__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}





/* ########## INFO TITLE ########## */

.items__card__info a {
    font-family: 'IBM Plex Serif', serif;
    font-size: 25px;
    font-weight: 600;

}

.items__card__info a:hover {
    text-decoration: underline;
}



/* ########## INFO SUBTITLE ########## */

.items__card__info h3:nth-child(2) {
    text-transform: uppercase;
    color: #3A524D;
    font-size: 17px;
}





/* ########## INFO REMOVE ########## */

.items__card__info__remove {
    text-decoration: underline;
    cursor: pointer;

}





/* ########## INFO QUANTITY ########## */ 

.items__card__info__quantity {
    display: flex;
    /* border: 1px solid #3a524db4; */
    border-radius: 5px;
    width: fit-content;   
    margin-top: 15px;
    align-items: center;
    padding: 0;
}

.items__card__info__quantity button {
    background: transparent;
    border: 1px solid #3a524db4;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
    line-height: 1;
    /* vertical-align: middle; */
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    transition: all 300ms ease-in-out;
    height: 32px;
    color: #3A524D;
}

.items__card__info__quantity button:hover {
    border-color: #3A524D;
}

.items__card__info__quantity button:nth-child(1) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.items__card__info__quantity button:nth-child(3) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.items__card__info__quantity p {
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










.summary {
    width: 33%;
    border: 1px solid #3a524db4;
    border-radius: 5px;
    padding: 30px;
    height: fit-content;
    background: #3a524db4;
}



.summary h2 {
    margin-bottom: 50px;
}
















</style>