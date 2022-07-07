<template>
    <main>
        <section>




            <div class="div1">
                <div class="gallery__list">
                    <div v-for="image in images" :key="image.id" :class="{ active: image.id == activeImage ? true : false}"  @mouseover="activeImage = image.id">
                        <img  :src="image.url" alt=""  >
                    </div>
                </div>
                <transition-group class="gallery__hero" name="fade" mode="out-in"  tag="div">
                    <div v-show="activeImage === image.id" v-for="image in images" :key="image.id">
                        <div >
                            <div>
                                <img :src="image.url" alt="">
                            </div>                        
                        </div>
                    </div>
                </transition-group>
            </div>





        </section>
    </main>
</template>

<script>
export default {
    data () {
        return {
            activeImage: 0,
            images: [
                {
                    id: 0,
                    url: "https://jennitaphotography.nl/_nuxt/img/herfst-1.e43c59c.webp",
                },
                {
                    id: 1,
                    url: "https://jennitaphotography.nl/_nuxt/img/herfst-2.bc10ae7.webp",
                },
                {
                    id: 2,
                    url: "https://jennitaphotography.nl/_nuxt/img/herfst-3.ae30283.webp",
                }
            ]
        }
    },
    watch: {
        activeImage () {
            console.log(this.activeImage)
        }
    },
}
</script>

<style scoped>

section {
    display: flex;
    justify-content: center;
    padding-top: 100px;
    align-items: center;

}

.gallery {
    /* border: 3px solid var(--clr-3-3); */
    padding: 3%;
    height: fit-content;
    border-radius: var(--border-radius);
    background-color: white;
    display: flex;
    z-index: 999;
}

.gallery__list {
    width: 110px;
    margin-right: 6%;
}



.gallery__list div {
    padding: 4px;
    display: flex;
    cursor: pointer;
}

.gallery__list:first-child {
    margin-top: -4px;
}


.gallery__list div:not(:last-child) {
    margin-bottom: 10px;
}


.active {
    border-radius: var(--border-radius);
    box-shadow: inset 0 0 0 4px var(--clr-2-1);
    overflow: hidden;
}















.gallery__hero {
    padding: 2%;
    width: 350px;
    /* overflow: hidden; */
    /* margin-top: 30px; */
    position: relative;

}

.gallery__hero > div {
    width: 100%;
    height: fit-content;
    position: relative;
    background-color: white;

}



.gallery__hero > div > div {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    max-width: 350px;
    cursor: pointer;
    height: fit-content;
    z-index: 2;



}

.gallery__hero > div > div > div {
    box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
    padding: 6%;
    background-color: white;
    width: 100%;
    height: 100%;
    position: relative;
}

.gallery__hero > div > div > div::after {
    content: "";
    width: 90%;
    background: linear-gradient(270deg, #f1f1f1 0%, #b8b8b8 100%);
    height: 22px;
    display: flex;
    transform: skewY(-4deg);
    position: absolute;
    top: -11.5px;
    left: 0;
    z-index: -1;
}



img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 14;
}























.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-in-out;
  opacity: 1;
}

.fade-leave-to, 
.fade-enter {
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}


</style>