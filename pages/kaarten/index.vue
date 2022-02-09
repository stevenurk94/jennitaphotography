<template>
<main>
    <BreadCrumbs :items="breadcrumbs"/>

    <section>
        <div class="filter">
            <h3>Categorie</h3>
            <input type="checkbox" id="blanco" v-on:change="blanco($event)" :checked="v_blanco">
            <label class="checkmark" for="blanco">
                <span class="checkmark__button">
                    <Checkmark />
                </span>
                
                 <span class="checkmark__text">Blanco</span>
            </label>

            <input type="checkbox" id="geboorte" v-on:change="geboorte($event)" :checked="v_geboorte">
            <label class="checkmark" for="geboorte">
                <span class="checkmark__button">
                    <Checkmark />
                </span>
                <span class="checkmark__text">Geboorte</span>

            </label>
            <input type="checkbox" id="verjaardag_jongen" v-on:change="verjaardag_jongen($event)" :checked="v_verjaardag_jongen">
            <label class="checkmark" for="verjaardag_jongen">
                <span class="checkmark__button">
                    <Checkmark />
                </span>
                <span class="checkmark__text">Verjaardag Jongen</span>
            </label>
        </div>





        <div class="products">
            <h2 class="products__title" v-if="v_blanco === true">Blanco</h2>
            <div class="products__wrapper" v-if="v_blanco === true">
                <NuxtLink class="products__wrapper__cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCardsBlanco" :key="PhotoCards.id">
                    <img :src="require(`~/assets/img${PhotoCards.image.jpeg.original}`)" alt="">
                    <div>
                        <div class="products__wrapper__cart__info">
                            <h3>{{ PhotoCards.name }}</h3>
                            <h3>{{ PhotoCards.category }}</h3>
                        </div>
                        <p>€ {{ PhotoCards.price.toFixed(2).replace(".", ",") }}</p>
                    </div>
                    
                    
                </NuxtLink>
            </div>

            <h2 class="products__title" v-if="v_geboorte === true">Geboorte</h2>
            <div class="products__wrapper" v-if="v_geboorte === true">
                <NuxtLink class="products__wrapper__cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCardsGeboorte" :key="PhotoCards.id">
                    <img :src="require(`~/assets/img${PhotoCards.image.jpeg.original}`)" alt="">
                    <div>
                        <div class="products__wrapper__cart__info">
                            <h3>{{ PhotoCards.name }}</h3>
                            <h3>{{ PhotoCards.category }}</h3>
                        </div>                        
                        <p>€ {{ PhotoCards.price.toFixed(2).replace(".", ",") }}</p>
                    </div>
                    
                </NuxtLink>
            </div>

            <h2 class="products__title" v-if="v_verjaardag_jongen === true">Verjaardag Jongen</h2>
            <div class="products__wrapper" v-if="v_verjaardag_jongen === true">
                <NuxtLink class="products__wrapper__cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCardsVerjaardagJongen" :key="PhotoCards.id">
                    <img :src="require(`~/assets/img${PhotoCards.image.jpeg.original}`)" alt="">
                    <div>
                        <div class="products__wrapper__cart__info">
                            <h3>{{ PhotoCards.name }}</h3>
                            <h3>{{ PhotoCards.category }}</h3>
                        </div>
                        <p>€ {{ PhotoCards.price.toFixed(2).replace(".", ",") }}</p>
                    </div>
                    
                    
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

    // mounted: function () {

    //     if (new URLSearchParams(window.location.search).get("category") == "blanco") {
    //         this.v_blanco = true
    //         this.v_geboorte = false
    //         this.v_verjaardag_jongen = false
    //     }
    //     if (new URLSearchParams(window.location.search).get("category") == "geboorte") {
    //         this.v_blanco = false
    //         this.v_geboorte = true
    //         this.v_verjaardag_jongen = false
    //     }
    //     if (new URLSearchParams(window.location.search).get("category") == "verjaardag_jongen") {
    //         this.v_blanco = false
    //         this.v_geboorte = false
    //         this.v_verjaardag_jongen = true
    //     }
    // }
}

</script>



<style scoped>

main {
    background: var(--clr-bg);
}

main section {
    display: flex;
    justify-content: space-between;
}

/* ########### FILTER ########## */

.filter {
    width: 28%;
    border-radius: var(--border-radius);
    border: 1px solid var(--clr-1-3);
    padding: 20px;
    height: fit-content;
    position: sticky;
    top: 110px;
    margin-right: 50px;
    min-width: 300px;
}





/* ########## PRODUCTS ########## */

.products {
    width: 68%;
}

.products__title {
    border-bottom: 1px solid var(--clr-1-3);
    margin-bottom: 12px;
}

.products__title:not(:first-child) {
    margin-top: 50px;
}

.products__wrapper {
    display: grid;
    gap: 25px 3%;
    grid-template-columns: repeat(3, 1fr); 
    padding-top: 15px;
}






/* ########## PRODUCTS CART ########## */

.products__wrapper__cart {
    box-shadow: 0 0 0 1px #dadce0;
    border-radius: var(--border-radius);
    overflow: hidden;
    cursor: pointer;
    background: #fff;
    transition: all .2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}

.products__wrapper__cart:hover {
    /* box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%); */
    box-shadow: var(--boxshadow);
    transform: scale(100.3%);
}

.products__wrapper__cart img {
    object-fit: contain;
    height: 100%;
    width: 90%;
    right: 0;
    left: 0;
    margin: 15px 10px;
}


.products__wrapper__cart > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 87%;
}

.products__wrapper__cart__info h3:first-child  {
    font-size: 17px;
    padding-bottom: 0;
    font-weight: 600;
    line-height: 1;
}

.products__wrapper__cart__info h3:last-child {
    text-transform: uppercase;
    color: var(--clr-3-2);
    margin: 2px 0 15px 0;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    padding-bottom: 0;
}


.products__wrapper__cart p {
    font-size: 15px;
    line-height: 1.2;
    height: 100%;
}















@media only screen and (max-width: 1050px) {

    main section {
        display: block;
    }

    .filter {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        position: unset;
        margin-bottom: 6%;
        padding: 2.6% 3% 3% 3%;
    }

    .filter h3 {
        width: 100%;
    }

    .filter .checkmark {
        padding: 10px 15px;
        border: 1px solid var(--clr-1-3);
        border-radius: var(--border-radius);
        width: fit-content;
        margin: 10px 3% 0 0;
    }

    .filter input[type="checkbox"]:checked:checked + .checkmark {
        background: var(--clr-1-1);
    }

    .filter input[type="checkbox"]:checked:checked + .checkmark .checkmark__text {
        color: white;
    }

    .filter .checkmark__button {
        display: none;
    }

    .filter .checkmark__text {
        margin: 0;
    }

    .products {
        width: 100%;
    }
}




@media only screen and (max-width: 680px) {

    .products__wrapper {
        gap: 25px 3%;
        grid-template-columns: repeat(3, 1fr); 
        padding-top: 2%;
    }

    .products__wrapper__cart img {
        margin: 10px;
        object-fit: cover;
        object-position: center;
    }

    .products__wrapper__cart > div {
        display: block;
        margin: 4px 5px 5px 5px;
    }
   
    .products__wrapper__cart__info h3:last-child {
        margin-bottom: 10px;
    }

    .products__wrapper__cart p {
        height: fit-content;
        margin-bottom: 7px;
    }


}

@media only screen and (max-width: 550px) {
    
    .products__wrapper {
        gap: 25px 3%;
        grid-template-columns: repeat(2, 1fr); 
    }


}

</style>
