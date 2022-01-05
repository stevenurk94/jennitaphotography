<template>
<main>
    <BreadCrumbs :items="breadcrumbs"/>
    <h2>Fotokaarten</h2>
    <section class="products">
        <NuxtLink class="products__cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCards" :key="PhotoCards.id">
            <img :src="require(`~/assets/img${PhotoCards.image2}`)" alt="">
            <div>
                <h3>{{ PhotoCards.name }}</h3>
                <p>€ {{ PhotoCards.price.toFixed(2).replace(".", ",") }}</p>
            </div>
            <h3 class="products__cart__category">{{ PhotoCards.category }}</h3>
        </NuxtLink>

    </section>
</main>
    
</template>
 
<script>

import PhotoCards from "~/assets/json/PhotoCards.json";

export default {

    data () {
        return {
            PhotoCards        
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
        }
    },
  
}






</script>

<style scoped>

main {
    background: var(--clr-bg);
}


h2 {
    max-width: 1523px;
    width: 95%;
}


.products {
    display: flex;
    flex-wrap: wrap;
}

.products__cart {
    box-shadow: 0 0 0 1px #dadce0;
    border-radius: 5px;
    margin: 15px 12.5px; 
    overflow: hidden;
    cursor: pointer;
    width: calc(20% - 20px);
    min-width: 225px;

    background: #fff;
    transition: all .2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}

.products__cart:nth-child(5n + 1) {
    margin-left: 0px;
}

.products__cart:nth-child(5n + 5) {
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






.products__cart:hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
}

.products__cart div h3 {
    font-size: 17px;
}

.products__cart p {
    font-size: 15px;
}



.products__cart img {
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

.products__cart div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px 10px 5px 10px;
    width: 85%;
}


.products__cart__category {
    text-transform: uppercase;
    color: #3A524D;
    margin: 2px 10px 15px 10px;
    width: 85%;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;

}


</style>
