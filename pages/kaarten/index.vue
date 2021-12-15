<template>
<main>

    <BreadCrumbs :items="breadcrumbs"/>
    <h2>Fotokaarten</h2>
    <section class="products">
        <NuxtLink class="products__cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCards" :key="PhotoCards.id">
            <img :src="require(`@/static/img${PhotoCards.image2}`)" alt="">
            <div>
                <h3>{{ PhotoCards.name }}</h3>
                <p>€ {{ PhotoCards.price.toFixed(2) }}</p>
            </div>
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
    /* background: #f0f2f5; */
    background: #f8fbfe;
}


section, h2, .breadcrumbs {
    width: 95%;
}

.products {
    display: flex;
    flex-wrap: wrap;
}

.products__cart {
    box-shadow: 0 0 0 1px #dadce0;
    border-radius: 5px;
    margin: 10px 3%;
    overflow: hidden;
    cursor: pointer;
    width: calc(50% - 1.5%);

    background: #fff;
    transition: all .2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}

.products__cart:nth-child(1n + 1) {
    margin-left: 0px;
    margin-right: 1.5%;
}

.products__cart:nth-child(2n + 2) {
    margin-right: 0px;
    margin-left: 1.5%;
}


@media only screen and (min-width: 480px) {

    .products__cart {
        margin: 15px 5%;
        width: calc(50% - 2.5%);
    }

    .products__cart:nth-child(1n + 1) {
        margin-left: 0px;
        margin-right: 2.5%;
    }

    .products__cart:nth-child(2n + 2) {
        margin-right: 0px;
        margin-left: 2.5%;
    }

}

@media only screen and (min-width: 650px) {

    .products__cart {
        margin: 15px 5px;
        width: calc(33% - 5px);
    }

    .products__cart:nth-child(1n + 1), .products__cart:nth-child(2n + 2) {
        margin: 15px 5px;
    }

    .products__cart:nth-child(3n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(3n + 3) {
        margin-right: 0px;
    }
}

@media only screen and (min-width: 750px) {

    .products__cart {
        margin: 15px 10px;
        width: calc(33% - 11px);
    }

    .products__cart:nth-child(1n + 1), .products__cart:nth-child(2n + 2) {
        margin: 15px 10px;
    }

    .products__cart:nth-child(3n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(3n + 3) {
        margin-right: 0px;
    }
}

@media only screen and (min-width: 950px) {

    .products__cart {
        margin: 15px 10px;
        width: calc(25% - 15px);
    }

    .products__cart:nth-child(1n + 1), .products__cart:nth-child(2n + 2) {
        margin: 15px 10px;
    }


    .products__cart:nth-child(4n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(4n + 4) {
        margin-right: 0px;
    }
}

@media only screen and (min-width: 1200px) {

    .products__cart {
        margin: 15px 10px;
        width: calc(20% - 16px);
    }

    .products__cart:nth-child(1n + 1), .products__cart:nth-child(2n + 2) {
        margin: 15px 10px;
    }


    .products__cart:nth-child(5n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(5n + 5) {
        margin-right: 0px;
    }
}

@media only screen and (min-width: 1300px) {
    .section, h2, .products, .breadcrumbs {
        width: 90%;
    }

    .products__cart {
        margin: 15px 10px;
        width: calc(20% - 16px);
    }

    .products__cart:nth-child(1n + 1), .products__cart:nth-child(2n + 2) {
        margin: 15px 10px;
    }

    .products__cart:nth-child(5n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(5n + 5) {
        margin-right: 0px;
    }
}

@media only screen and (min-width: 1400px) {
    .section, h2, .products, .breadcrumbs {
        width: 85%;
    }

    .products__cart {
        margin: 15px 10px;
        width: calc(20% - 16px);
    }

    .products__cart:nth-child(1n + 1), .products__cart:nth-child(2n + 2) {
        margin: 15px 10px;
    }


    .products__cart:nth-child(5n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(5n + 5) {
        margin-right: 0px;
    }
}

@media only screen and (min-width: 1500px) {
    .section, h2, .products, .breadcrumbs {
        width: 80%;
    }

    .products__cart {
        margin: 15px 12px;
        width: calc(20% - 20px);
    }

    .products__cart:nth-child(1n + 1), .products__cart:nth-child(2n + 2) {
        margin: 15px 12px;
    }

    .products__cart:nth-child(5n + 1) {
        margin-left: 0px;
    }

    .products__cart:nth-child(5n + 5) {
        margin-right: 0px;
    }
}


.products__cart:hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
}

.products__cart h3 {
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
    margin: 10px 10px 15px 10px;
    width: 85%;
}



</style>
