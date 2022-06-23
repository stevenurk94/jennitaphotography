<template>
<main>

    <PagepartsBreadCrumbs :items="breadcrumbs"/>
    <section>
        
        <div class="product">
            <div class="product__img">
                <IconsLoading v-if="showLoading"/>
                <picture :class="PhotoCard.position">
                    <source
                        type="image/webp"
                        sizes="                       
                            (max-width: 320px) 320px,
                            (min-width: 320px) and (max-width: 640px) 640px,
                            (min-width: 640px) and (max-width: 768px) 768px,
                            (min-width: 768px) 640px, 768px"
                        :srcset="
                            require(`~/static/img${PhotoCard.image.webp._320}`) + ' 320w, ' +
                            require(`~/static/img${PhotoCard.image.webp._640}`) + ' 640w, ' +
                            require(`~/static/img${PhotoCard.image.webp._768}`) + ' 768w, ' +
                            require(`~/static/img${PhotoCard.image.webp._1024}`) + ' 1024w'">
                    <source
                        type="image/jpeg"
                        sizes="                       
                            (max-width: 320px) 320px,
                            (min-width: 320px) and (max-width: 640px) 640px,
                            (min-width: 640px) and (max-width: 768px) 768px,
                            (min-width: 768px) 640px, 768px"
                        :srcset="
                            require(`~/static/img${PhotoCard.image.jpeg._320}`) + ' 320w, ' +
                            require(`~/static/img${PhotoCard.image.jpeg._640}`) + ' 640w, ' +
                            require(`~/static/img${PhotoCard.image.jpeg._768}`) + ' 768w, ' +
                            require(`~/static/img${PhotoCard.image.jpeg._1024}`) + ' 1024w'">

                    <img 
                        @load="showLoading = false"
                        :src="require(`~/static/img${PhotoCard.image.jpeg._768}`)" 
                        :alt="PhotoCard.name.toLowerCase()">
                </picture>
            </div>
            <div class="product__info">
                <h1>{{ PhotoCard.name }}</h1>
                <h3 class="product__info__category">{{ PhotoCard.category }}</h3>
                <p class="product__info__price">€ {{ PhotoCard.price.toFixed(2).replace(".", ",") }} p/st.</p>
                <p class="product__info__stock message orange" v-if="!PhotoCard.stock">Binnenkort op voorraad</p>

                <div v-if="PhotoCard.stock !== 0" class="product__info__box">
                    <div>
                        <input name="amount" type="number" v-model.number="quantity" @keyup.enter="addToCart(PhotoCard)" oninput="this.value=this.value.replace(/[^0-9]/g,'');">
                    </div>
                    <button class="button-1" v-on:click="addToCart(PhotoCard)">In winkelwagen</button>
                </div>
                <p class="product__info__error message orange">Voer een geldig getal in</p>
                <p class="product__info__error message orange">Van "{{ PhotoCard.name }}" hebben we momenteel {{ PhotoCard.stock }} kaarten op voorraad</p>

                <PagepartsProductBenefits />
            </div>

            

        </div>
    </section>

    <ModalsCartModal :PhotoCard="PhotoCard" :showModal="showModal" @closeModal="showModal = false"/>
    <!-- <PagepartsImageModal :PhotoCard="PhotoCard" :showImageModal="showImageModal" @closeImageModal="showImageModal = false"/> -->

    <SectionsProductData :product_description="PhotoCard.product_description" />

</main>
</template>

<script>

import PhotoCards from "~/server/json/PhotoCards.json";

export default {
    data () {
        return {
            PhotoCards,
            // product: null,
            quantity: 1,
            showModal: false,
            showLoading: true,
            // showImageModal: false,
        }
    },
    head () {
        return {
            title: this.PhotoCard.name,
            meta: [
                {  hid: "description", name: "description", content: this.PhotoCard.meta_description },
                
                { property: "og:title", content: this.PhotoCard.name },
                { property: "og:image", content: "https://jennitaphotography.nl" + require(`~/static/img${this.PhotoCard.image.jpeg._640}`) },
                { property: "og:url", content: `https://jennitaphotography.nl/kaarten/${this.PhotoCard.slug}/` },
                { property: "og:type", content: "product" },
                { property: "og:description", content: this.PhotoCard.meta_description },

                { name: "twitter:title", content: this.PhotoCard.name },
                { name: "twitter:image", content: "https://jennitaphotography.nl" + require(`~/static/img${this.PhotoCard.image.jpeg._640}`) },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:description", content: this.PhotoCard.meta_description },
            ]
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
                    label: this.PhotoCard.name
                }
            ]
        },
        PhotoCard () {
            return this.PhotoCards.find(element => element.slug == this.$route.params.slug)
        }
    },
    methods: {
        addToCart( product ) {

            this.product = product
            product.quantity = this.quantity

            document.querySelector(".product__info__error:nth-of-type(2)").style.display = "none";
            document.querySelector(".product__info__error:nth-of-type(3)").style.display = "none";

            if (product.quantity < 1) {
                document.querySelector(".product__info__error:nth-of-type(2)").style.display = "block";
            } 
            
            else if (this.$store.getters.cartItems.find(item => item.id === product.id)) {
                if (this.$store.getters.cartItems.find(item => item.id === product.id).quantity + product.quantity > product.stock) {
                    document.querySelector(".product__info__error:nth-of-type(3)").style.display = "block";
                } 
                
                else if (product.quantity > product.stock) {
                    document.querySelector(".product__info__error:nth-of-type(3)").style.display = "block";
                } 
                
                else {
                    this.$store.commit("addToCart", product);
                    this.showModal = true
                }
            }
            
            else if (product.quantity > product.stock) {
                document.querySelector(".product__info__error:nth-of-type(3)").style.display = "block";
            }

            else {
                this.$store.commit("addToCart", product);
                this.showModal = true;
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
    border-radius: var(--border-radius);
    padding: 10px;
    background: var(--clr-3-3);
    position: relative;
    height: fit-content;
}

.product__img picture {
    width: 70%;
    min-width: 300px;
}

.product__img picture.lying {
    width: auto;
}

.product__img img {
    width: 100%;
    height: 100%;
}

.product__info {
    min-width: calc(50% - 1.5%);
    margin-left: 2%;
}

.product__info__category {
    text-transform: uppercase;
    color: var(--clr-1-1);
    font-weight: 700;
    letter-spacing: 1.2px;
    margin: 3px 0px 20px 0px;
    font-size: 17px;
}

.product__info__stock {
    margin: 10px 0;
}




.product__info__error {
    display: none;
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
    color: var(--clr-3-1);
}

.product__info__box div p {
    display: none;
}






@media only screen and (max-width: 767px) {
    .product {
        display: flex;
        flex-direction: column;
    }

    .product__img {
        width: 100%;
        min-width: auto;
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
    }
}




@media only screen and (max-width: 420px) {
    .product__img picture {
        width: 100%;
        min-width: auto;
    }
}








</style>