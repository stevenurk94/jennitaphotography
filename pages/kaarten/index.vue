<template>
<main>

    



    <section class="product_overview">
        <BreadCrumbs :items="breadcrumbs"/>
        <NuxtLink class="product_cart" :to="`/kaarten/${ PhotoCards.slug }`" v-for="PhotoCards in PhotoCards" :key="PhotoCards.id">
            <img :src="PhotoCards.image" alt="">
            <div>
                <div>
                    <h2>{{ PhotoCards.subtitle }}</h2>
                    <h2>{{ PhotoCards.name }}</h2>
                </div>
                <div>
                    <p>€ {{ PhotoCards.price.toFixed(2) }}</p>
                </div>
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
                    label: this.$route.path.slice(1,8).replace(/([k])/g, "K")
                }
            ]
        }
    }
    
}






</script>

<style scoped>

body {
    background: #f0f2f5;
}


main .product_overview {
    background: #f8fbfe;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 95%;
    margin-top: 150px;
}

.product_cart {
    /* box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 15%); */
    box-shadow: 0 0 0 1px #dddfe2;
    border-radius: 5px;
    margin: 10px 0;
    overflow: hidden;
    width: calc(50% - 5px);
    cursor: pointer;
    background: #fff;
    transition: all .2s ease-out;
    
}

.product_cart:hover {
    box-shadow: 0 1px 8px 5px #dddfe2;
    transform: scale(1.005);

}

.product_cart img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: middle;
}

.product_cart > div {
    padding: 15px 15px;
    display: flex;
}

.product_cart div div:first-child {
    width: 75%;

}

.product_cart div div h2:first-child {
    font-size: 15px;
    text-transform: uppercase;
}

.product_cart div div:nth-child(2) {
    width: 25%;
    text-align: end;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    white-space: nowrap;


}




</style>
