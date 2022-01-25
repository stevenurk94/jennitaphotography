<template>
<main>
    <BreadCrumbs :items="breadcrumbs"/>


    <section>
        <div class="filter">
            <h2>Categorie</h2>
            <input type="checkbox" id="blanco" v-on:change="blanco($event)" checked>
            <label class="checkmark" for="blanco">
                <span class="checkmark__button"></span>
                <span class="checkmark__text">Fotokaarten - Blanco</span>
            </label>

            <input type="checkbox" id="geboorte" v-on:change="geboorte($event)" checked>
            <label class="checkmark" for="geboorte">
                <span class="checkmark__button"></span>
                <span class="checkmark__text">Fotokaarten - Geboorte</span>

            </label>
            <input type="checkbox" id="verjaardag_jongen" v-on:change="verjaardag_jongen($event)" checked>
            <label class="checkmark" for="verjaardag_jongen">
                <span class="checkmark__button"></span>
                <span class="checkmark__text">Fotokaarten - Verjaardag Jongen</span>
            </label>
        </div>





        <div class="products">
            <h2 v-if="v_blanco === true">Fotokaarten - Blanco</h2>
            <div class="products__wrapper" v-if="v_blanco === true">
                <NuxtLink class="products__wrapper__cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCardsBlanco" :key="PhotoCards.id">
                    <img :src="require(`~/assets/img${PhotoCards.image2}`)" alt="">
                    <div>
                        <h3>{{ PhotoCards.name }}</h3>
                        <p>€ {{ PhotoCards.price.toFixed(2).replace(".", ",") }}</p>
                    </div>
                    <h3 class="products__wrapper__cart__category">{{ PhotoCards.category }}</h3>
                </NuxtLink>
            </div>

            <h2 v-if="v_geboorte === true">Fotokaarten - Geboorte</h2>
            <div class="products__wrapper" v-if="v_geboorte === true">
                <NuxtLink class="products__wrapper__cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCardsGeboorte" :key="PhotoCards.id">
                    <img :src="require(`~/assets/img${PhotoCards.image2}`)" alt="">
                    <div>
                        <h3>{{ PhotoCards.name }}</h3>
                        <p>€ {{ PhotoCards.price.toFixed(2).replace(".", ",") }}</p>
                    </div>
                    <h3 class="products__wrapper__cart__category">{{ PhotoCards.category }}</h3>
                </NuxtLink>
            </div>

            <h2 v-if="v_verjaardag_jongen === true">Fotokaarten - Verjaardag Jongen</h2>
            <div class="products__wrapper" v-if="v_verjaardag_jongen === true">
                <NuxtLink class="products__wrapper__cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCardsVerjaardagJongen" :key="PhotoCards.id">
                    <img :src="require(`~/assets/img${PhotoCards.image2}`)" alt="">
                    <div>
                        <h3>{{ PhotoCards.name }}</h3>
                        <p>€ {{ PhotoCards.price.toFixed(2).replace(".", ",") }}</p>
                    </div>
                    <h3 class="products__wrapper__cart__category">{{ PhotoCards.category }}</h3>
                </NuxtLink>
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
            v_blanco: true,
            v_geboorte: true,
            v_verjaardag_jongen: true,
        }
    },

    methods: {
        blanco (event) {
            if (event.target.checked) {
                this.v_blanco = true
            } else {
                this.v_blanco = false
            }
        },
        geboorte (event) {
            if (event.target.checked) {
                this.v_geboorte = true
            } else {
                this.v_geboorte = false
            }
        },
        verjaardag_jongen (event) {
            if (event.target.checked) {
                this.v_verjaardag_jongen = true
            } else {
                this.v_verjaardag_jongen = false
            }
        }
    },

    computed: {
        breadcrumbs() {
            return [
                {
                    label: "Home",
                    url: "/"
                },
                {
                    label: this.$route.path.slice(1,8).replace(/([k])/g, "K")
                }
            ]
        },

        PhotoCardsBlanco: function() {
            return this.PhotoCards.filter(function(u) {
                return u.category == "blanco"
            })
        },
        PhotoCardsGeboorte: function() {
            return this.PhotoCards.filter(function(u) {
                return u.category == "geboorte"
            })
        },
        PhotoCardsVerjaardagJongen: function() {
            return this.PhotoCards.filter(function(u) {
                return u.category == "verjaardag jongen"
            })
        },
    },
  
}






</script>

<style scoped>

main {
    background: var(--clr-bg);
}


h1 {
    max-width: 1523px;
    width: 95%;
}

main section {
    display: flex;
    justify-content: space-between;
}

/* ########### FILTER ########## */

.filter {
    width: 28%;
    border-radius: var(--border-radius);
    border: 1px solid var(--clr-1-2);
    padding: 20px;
}





/* ########## PRODUCTS ########## */

.products {
    width: 66%;
    min-width: 950px;
}

.products__wrapper {
    display: flex;
    flex-wrap: wrap;
}


.products__wrapper__cart {
    box-shadow: 0 0 0 1px #dadce0;
    border-radius: var(--border-radius);
    margin: 15px 12.5px; 
    overflow: hidden;
    cursor: pointer;
    width: calc(33% - 13.5px);
    min-width: 225px;

    background: #fff;
    transition: all .2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}

.products__wrapper__cart:nth-child(3n + 1) {
    margin-left: 0px;
}

.products__wrapper__cart:nth-child(3n + 3) {
    margin-right: 0px;
}

@media only screen and (max-width: 1290px) {

    .products__cart {
        width: calc(25% - 20px);
        margin: 15px 1.08%;
    }

    .products__cart:nth-child(5n + 1), .products__cart:nth-child(5n + 5) {
        margin-left: 1.08%;
        margin-right: 1.08%;
    }

    .products__cart:nth-child(4n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(4n + 4) {
        margin-right: 0px;
    }
}

@media only screen and (max-width: 1013px) {

    .products__cart {
        width: calc(33% - 20px);
        margin: 15px 1.81%;
    }

    .products__cart:nth-child(5n + 1), .products__cart:nth-child(5n + 5), .products__cart:nth-child(4n + 1), .products__cart:nth-child(4n + 4) {
        margin-left: 1.81%;
        margin-right: 1.81%;
    }

    .products__cart:nth-child(3n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(3n + 3) {
        margin-right: 0px;
    }
}

@media only screen and (max-width: 766px) {
    .products__cart {
        width: calc(50% - 20px);
        margin: 15px 2.7%;
    }

    .products__cart:nth-child(5n + 1), .products__cart:nth-child(5n + 5), .products__cart:nth-child(4n + 1), .products__cart:nth-child(4n + 4), .products__cart:nth-child(3n + 1), .products__cart:nth-child(3n + 3) {
        margin-left: 2.7%;
        margin-right: 2.7%;
    }

    .products__cart:nth-child(2n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(2n + 2) {
        margin-right: 0px;
    }
}

@media only screen and (max-width: 501px) {
    .products__cart {
        width: 47.5%;
        margin: 15px 2.5%;
        min-width: auto;
    }

    .products__cart:nth-child(5n + 1), .products__cart:nth-child(5n + 5), .products__cart:nth-child(4n + 1), .products__cart:nth-child(4n + 4), .products__cart:nth-child(3n + 1), .products__cart:nth-child(3n + 3) {
        margin-left: 2.5%;
        margin-right: 2.5%;
    }

    .products__cart:nth-child(2n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(2n + 2) {
        margin-right: 0px;
    }
}

@media only screen and (max-width: 450px) {
    .products__cart {
        width: 48.5%;
        margin: 10px 1.5%;
        min-width: auto;
    }

    .products__cart:nth-child(5n + 1), .products__cart:nth-child(5n + 5), .products__cart:nth-child(4n + 1), .products__cart:nth-child(4n + 4), .products__cart:nth-child(3n + 1), .products__cart:nth-child(3n + 3) {
        margin-left: 1.5%;
        margin-right: 1.5%;
    }

    .products__cart:nth-child(2n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(2n + 2) {
        margin-right: 0px;
    }
}






.products__wrapper__cart:hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
}

.products__wrapper__cart div h3 {
    font-size: 17px;
}

.products__wrapper__cart p {
    font-size: 15px;
}



.products__wrapper__cart img {
    /* width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: middle; */
    object-fit: contain;
    height: 220px;
    width: 90%;
    right: 0;
    left: 0;
    margin: 15px 10px;
}

.products__wrapper__cart div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px 10px 5px 10px;
    width: 85%;
}


.products__wrapper__cart__category {
    text-transform: uppercase;
    color: #3A524D;
    margin: 2px 10px 15px 10px;
    width: 85%;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;

}


</style>
