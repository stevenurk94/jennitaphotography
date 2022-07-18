<template>

    <div class="gallery" @click.stop>

        <div class="gallery__hero">
            <div class="gallery__hero__img" v-show="$store.state.imageGallery.activeImage === image.id" v-for="image in images" :key="image.id" @click="$emit('showImageModal')" :class="image.type">
                <picture>
                    <source
                        type="image/webp"
                        sizes="                       
                            (max-width: 320px) 320px,
                            (min-width: 320px) and (max-width: 640px) 640px,
                            (min-width: 640px) and (max-width: 768px) 768px,
                            (min-width: 768px) 640px, 768px"
                        :srcset="
                            require(`~/static/img${ image.src.webp._320 }`) + ' 320w, ' +
                            require(`~/static/img${ image.src.webp._640 }`) + ' 640w, ' +
                            require(`~/static/img${ image.src.webp._768 }`) + ' 768w, ' +
                            require(`~/static/img${ image.src.webp._1024 }`) + ' 1024w'">
                    <source
                        type="image/jpeg"
                        sizes="                       
                            (max-width: 320px) 320px,
                            (min-width: 320px) and (max-width: 640px) 640px,
                            (min-width: 640px) and (max-width: 768px) 768px,
                            (min-width: 768px) 640px, 768px"
                        :srcset="
                            require(`~/static/img${ image.src.jpeg._320 }`) + ' 320w, ' +
                            require(`~/static/img${ image.src.jpeg._640 }`) + ' 640w, ' +
                            require(`~/static/img${ image.src.jpeg._768 }`) + ' 768w, ' +
                            require(`~/static/img${ image.src.jpeg._1024 }`) + ' 1024w'">
                    <img 
                        @load="showLoading = false"
                        :src="require(`~/static/img${ image.src.jpeg._768 }`)"
                        :alt="Name">
                </picture>
                <img v-if="image.id == 1" class="gallery__hero__img__logo" src="~/static/backside.jpg" alt="logo">
            </div>
        </div>

        <div class="gallery__list">
            <div class="gallery__list__img" v-for="image in images" :key="image.id" :class="{ active: image.id == $store.state.imageGallery.activeImage ? true : false}"  @mouseover="$store.commit('imageGallery/setActiveImage', image.id)">
                <div :class="image.type">
                    <picture>
                        <source
                            type="image/webp"
                            sizes="                       
                                (max-width: 320px) 320px,
                                (min-width: 320px) and (max-width: 640px) 640px,
                                (min-width: 640px) and (max-width: 768px) 768px,
                                (min-width: 768px) 640px, 768px"
                            :srcset="
                                require(`~/static/img${ image.src.webp._320 }`) + ' 320w, ' +
                                require(`~/static/img${ image.src.webp._640 }`) + ' 640w, ' +
                                require(`~/static/img${ image.src.webp._768 }`) + ' 768w, ' +
                                require(`~/static/img${ image.src.webp._1024 }`) + ' 1024w'">
                        <source
                            type="image/jpeg"
                            sizes="                       
                                (max-width: 320px) 320px,
                                (min-width: 320px) and (max-width: 640px) 640px,
                                (min-width: 640px) and (max-width: 768px) 768px,
                                (min-width: 768px) 640px, 768px"
                            :srcset="
                                require(`~/static/img${ image.src.jpeg._320 }`) + ' 320w, ' +
                                require(`~/static/img${ image.src.jpeg._640 }`) + ' 640w, ' +
                                require(`~/static/img${ image.src.jpeg._768 }`) + ' 768w, ' +
                                require(`~/static/img${ image.src.jpeg._1024 }`) + ' 1024w'">
                        <img 
                            @load="showLoading = false"
                            :src="require(`~/static/img${ image.src.jpeg._768 }`)"
                            :alt="Name">
                    </picture>
                    <img v-if="image.id == 1" class="gallery__list__img__logo" src="~/static/backside.jpg" alt="logo">
                </div>
            </div>
        </div>
    </div>

</template>





<script>

export default {
    props: ["PhotoCard", "Name", "Images"],
    data () {
        return {
            images: [
                {
                    id: 0,
                    src: this.PhotoCard,
                    type: "front",
                }, 
                {
                    id: 1,
                    src: this.PhotoCard,
                    type: "back",
                },
                {
                    id: 2,
                    src: this.PhotoCard,
                    type: "card",
                },
            ],
        }
    },
}

</script>



<style scoped>




.gallery {
    /* padding: 4%; */
    padding-top: 2%;
    height: fit-content;
    /* border-radius: var(--border-radius); */
    background-color: white;
    display: flex;
    z-index: 999;
    /* border: 1px solid #d8d8d8; */
    width: calc(50% - 2%);
    /* justify-content: center; */
}

@media only screen and (max-width: 767px) {
    .gallery {
        width: 100%;
        display: block;
    }
}





/* ########## GALLERY HERO ########## */


.gallery__hero {
    /* padding: 2%; */
    padding: 0 2%;
    max-width: 350px;
    widows: 100%;
    order: 2;
}

.gallery__hero__img {
    width: 100%;
    height: fit-content;
    position: relative;
    /* background-color: white; */
    box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
    padding: 6%;
    background-color: white;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: zoom-in;
}




.gallery__hero__img.front::before {
    content: "";
    width: 90%;
    background: linear-gradient(270deg, #f1f1f1 0%, #b8b8b8 100%);
    height: 22px;
    display: flex;
    transform: skewY(-4deg);
    position: absolute;
    top: -2.2476475268%;
    left: 0;
    z-index: -1;
}
.gallery__hero__img.back::before {
    content: "";
    width: 90%;
    background: linear-gradient(270deg, #b8b8b8 0%, #f1f1f1 100%);
    height: 22px;
    display: flex;
    transform: skewY(4deg);
    position: absolute;
    top: -2.2476475268%;
    right: .5px;
    z-index: -1;
}
.gallery__hero__img.card {
    box-shadow: none;
}



.gallery__hero__img.back picture img {
    opacity: 0;
}
.gallery__hero__img picture {
    display: flex;
    overflow: hidden;
    height: 100%;
}

.gallery__hero__img picture img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 14;
}



.gallery__hero__img__logo {
    position: absolute;
    width: 20%;
    bottom: 0;
    right: 0;
    margin: 5% 6%;
}


@media only screen and (max-width: 767px) {
    .gallery__hero {
        left: 0;
        right: 0;
        margin: 8% auto;
    }
}


/* ########## GALLERY LIST ########## */

.gallery__list {
    width: 110px;
    margin-right: 10%;
    order: 1;
}
.gallery__list:first-child {
    margin-top: -4px;
}


.gallery__list__img {
    padding: 8%;
    display: flex;
    cursor: pointer;
}
.gallery__list__img:not(:last-child) {
    margin-bottom: 10px;
}
.gallery__list__img.active {
    border-radius: var(--border-radius);
    box-shadow: inset 0 0 0 2.5px var(--clr-1-2);
    overflow: hidden;
}

.gallery__list__img > div {
    margin-top: 4%;
    padding: 6%;
    box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
    position: relative;
    background-color: white;
}

.gallery__list__img .front::before {
    content: "";
    width: 90%;
    background: linear-gradient(270deg, #f1f1f1 0%, #b8b8b8 100%);
    height: 22px;
    display: flex;
    transform: skewY(-4deg);
    position: absolute;
    top: -2.2476475268%;
    left: 0;
    z-index: -1;
}

.gallery__list__img .back::before {
    content: "";
    width: 90%;
    background: linear-gradient(270deg, #b8b8b8 0%, #f1f1f1 100%);
    height: 22px;
    display: flex;
    transform: skewY(4deg);
    position: absolute;
    top: -2.2476475268%;
    right: 0;
    z-index: -1;
}

.gallery__list__img .card {
    padding: 0;
    box-shadow: none;
    margin-top: 0;
}




.gallery__list__img picture {
    display: flex;
}
.gallery__list__img picture img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 14;
}
.gallery__list__img .back picture img {
    opacity: 0;
}

.gallery__list__img__logo {
    position: absolute;
    width: 20%;
    bottom: 0;
    right: 0;
    margin: 5% 6%;
}

@media only screen and (max-width: 767px) {
    .gallery__list {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: calc(7% + 20px) 0 7% 0;
    }

    .gallery__list__img {
        width: 20%;
        width: calc(7% + 20vmin);
        padding: calc(.5% + 8px);
        max-width: 120px;
    }

    .gallery__list__img:not(:last-child) {
        margin-bottom: 0;
    }
    .gallery__list__img:nth-child(2) {
        margin: 0 5%;
    }

    .gallery__list__img.active {
        box-shadow: inset 0 0 0 2px var(--clr-1-2);
    }

}


@media only screen and (max-width: 400px) {
    .gallery__list__img {
        width: 28%;
    }
}

</style>