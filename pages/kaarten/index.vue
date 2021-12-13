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

body {
    /* background: #f0f2f5; */
    /* background: #f8fbfe; */
}

main {
    /* background: #f0f2f5; */
    background: #f8fbfe;
}

section {
    width: 80%;
}

main {
    padding: 100px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

h2 {
    width: 80%;
}


.products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}



.products__cart {
    box-shadow: 0 0 0 1px #dadce0;
    border-radius: 5px;
    margin: 10px 0;
    overflow: hidden;
    width: calc(50% - 5px);
    cursor: pointer;
    background: #fff;
    transition: all .2s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.products__cart:hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
}

@media only screen and (min-width: 800px) {
    .products__cart {
        width: calc(33% - 5px)
    }
}

@media only screen and (min-width: 1200px) {
    .products__cart {
        width: calc(25% - 15px)
    }
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
