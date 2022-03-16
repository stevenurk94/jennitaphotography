<template>
    <main>
        <PagepartsBreadCrumbs :items="breadcrumbs" :cartbreadcrumbs="true"/>
        <h1 v-if="cartItemCount">Uw winkelwagen</h1>
        
        <section>
            <div class="items" v-if="cartItemCount">

                <div class="items__card" v-for="product in orderedproducts" :key="product.id" >
                    <NuxtLink class="items__card__img" :to="`/kaarten/${ product.slug }`">
                        <picture :class="product.position">
                            <source
                                type="image/webp"
                                sizes="(min-width: 260px) 160px, 320px"
                                :srcset="
                                    require(`~/assets/img${product.image.webp._160}`) + ' 160w, ' +
                                    require(`~/assets/img${product.image.webp._320}`) + ' 320w'">
                            <source
                                type="image/jpeg"
                                sizes="(min-width: 260px) 160px, 320px"
                                :srcset="
                                    require(`~/assets/img${product.image._160}`) + ' 160w, ' +
                                    require(`~/assets/img${product.image._320}`) + ' 320w'">
                            <img :src="require(`~/assets/img${product.image._160}`)" alt="">
                        </picture>
                    </NuxtLink>
                
                    <div class="items__card__info">
                        <div class="items__card__info__title">
                            <NuxtLink :to="`/kaarten/${ product.slug }`">{{ product.name }}</NuxtLink>
                            <h3>{{ product.category }}</h3>
                        </div>

                        <p :class="'items__card__info__error message orange' + ' product-' + JSON.stringify(product.id)">Helaas, hier hebben we momenteel {{ product.stock }} voorradig</p>
                       

                        <div class="items__card__info__options">
                            <div class="items__card__info__options__change">
                                <span class="items__card__info__options__change__remove" v-on:click="removeProductFromCart(product)">
                                    <span>
                                        <IconsTrashBin />
                                    </span>
                                    <p>Verwijderen</p>
                                </span>
                                
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

        <PagepartsEmptyCart  v-if="!cartItemCount"/>
        
    </main> 
</template>



<script>

import _ from "lodash";


export default {
    head () {
        return {
            title: "Winkelwagen"
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

            if ((this.$store.getters.cartItems.find(item => item.id === product.id).quantity) + 1 > product.stock) {
                document.querySelector(".items__card__info__error" + ".product-" + JSON.stringify(product.id)).style.display = "block";
            } 

            else if ((this.$store.getters.cartItems.find(item => item.id === product.id).quantity) < product.stock) {
                this.product = product
                this.$store.commit("addOneToCart", product);
            }
        },

        removeOneFromCart( product ) {
            this.$store.commit("removeOneFromCart", product);
            document.querySelector(".items__card__info__error" + ".product-" + JSON.stringify(product.id)).style.display = "none";
        },

        removeProductFromCart( product ) {
            this.$store.commit("removeProductFromCart", product);
        },
    },
}



</script>



<style scoped>

h1 {
    max-width: var(--website-width);
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
    border-bottom: 1px dashed var(--clr-1-3);
    padding: 30px 0px;
    display: flex;
}



/* ########## IMAGE ########## */

.items__card__img {
    background: var(--clr-3-3);
    border-radius: var(--border-radius);
    display: inherit;
    justify-content: center;
    align-items: center;
    height: 140px;
    min-height: 140px;
    width: 115px;
    min-width: 115px;
    margin-right: calc(3% + 2px);
    padding: 5px;
    transition: all 300ms ease-in-out;
}

.items__card__img picture {
    width: 100%;
    height: 100%;
}

.items__card__img picture.lying img {
    object-fit: contain;
}

.items__card__img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}



.items__card__info {
    width: 80%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: .8% 0;
}

/* ########## INFO TITLE ########## */

.items__card__info__title a {
    font-family: 'IBM Plex Serif', serif;
    font-size: 20px;
    font-weight: 700;

}

.items__card__info__title a:hover {
    text-decoration: underline;
}

.items__card__info__title h3 {
    text-transform: uppercase;
    color: var(--clr-1-1);
    font-size: 13px;
}


.items__card__info__error {
    display: none;
}


.items__card__info__options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

.items__card__info__options__change {
    display: flex;
    align-items: center;
}

.items__card__info__options__change__remove {
    cursor: pointer;
    display: flex;
    margin-right: 25px;
}

.items__card__info__options__change__remove span {
    display: none;
    width: 14px;
    height: 14px;
}

.items__card__info__options__change__remove span svg {
    fill: var(--clr-1-2)
}

.items__card__info__options__change__remove p {
    font-size: 15px;
}



.items__card__info__options__change__quantity {
    display: flex;
    border-radius: var(--border-radius);
    width: fit-content;   
    align-items: center;
    padding: 0;
}

.items__card__info__options__change__quantity button {
    background: transparent;
    border: 1px solid var(--clr-1-3);
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
    font-weight: 500;
    line-height: 1;
    /* border: none; */
    font-family: 'Work Sans', sans-serif;
    transition: all 300ms ease-in-out;
    height: 32px;
    color: var(--clr-1-1);
}

.items__card__info__options__change__quantity button:hover {
    background: var(--clr-1-3);
}

.items__card__info__options__change__quantity button:nth-child(1) {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
}

.items__card__info__options__change__quantity button:nth-child(3) {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
}

.items__card__info__options__change__quantity p {
    font-size: 16px;
    width: 44px;
    border-top: 1px solid var(--clr-1-3);
    border-bottom: 1px solid var(--clr-1-3);
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
    border-radius: var(--border-radius);
    padding: 30px;
    height: fit-content;
    background: var(--clr-1-3);
    position: sticky;
    top: 90px;
    min-width: 350px;
}

.summary__subtotal {
    display: flex;
    justify-content: space-between;
}

.summary__subtotal h3 {
    padding-bottom: 0;
    font-size: 19px;
}

.summary p {
    margin-bottom: 50px;
    font-size: calc(12px + .15vmax);
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
        min-width: auto;
        padding: 20px;
    }
}

@media only screen and (max-width: 658px) {

    .items__card__info__options__change__remove {
        position: absolute;
        top: 2px;
        right: 2px;
        margin: 0;
    }

    .items__card__info__options__change__remove span {
        display: block;
        width: 16px;
        height: 16px;
    }

    .items__card__info__options__change__remove p {
        display: none;
    }
}



</style>