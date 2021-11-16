<template>
<main>

    



    <section class="product_overview">
        <NuxtLink class="product_cart" :to="PhotoCards.slug" v-for="PhotoCards in PhotoCards" :key="PhotoCards.id">
            <img :src="PhotoCards.image" alt="">
            <div>
                <div>
                    <h2>{{ PhotoCards.subtitle }}</h2>
                    <h2>{{ PhotoCards.name }}</h2>
                </div>
                <div>
                    <p>€ {{ PhotoCards.price }}</p>
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
    }
    
}






</script>

<style scoped>


main .product_overview {
    background: #f8fbfe;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 95%;
    margin-top: 150px;
}

.product_cart {
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 15%);
    border-radius: 5px;
    margin: 10px 0;
    overflow: hidden;
    width: calc(50% - 5px);
    cursor: pointer;
    
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
