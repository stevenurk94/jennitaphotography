<template>

    <div class="gallery" @click.stop>
        <div class="gallery__list">
            <div class="gallery__list__img" v-for="image in images" :key="image.id" :class="{ active: image.id == activeImage ? true : false}"  @mouseover="activeImage = image.id">
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
                </div>
            </div>
        </div>


        <transition-group class="gallery__hero" tag="div" name="hero">
            <div v-show="activeImage === image.id" v-for="image in images" :key="image.id" @click="$emit('showImageModal')" :class="image.type">
                <div>
                    <div>
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
                                :alt="Name"
                                >
                        </picture>
                    </div>
                </div>
            </div>

        </transition-group>
    </div>

</template>





<script>

export default {
    props: ["PhotoCard", "Name"],
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
                    src: {
                        jpeg: {
                            _320: "/backside.webp",
                            _640: "/backside.webp",
                            _768: "/backside.webp",
                            _1024: "/backside.webp",
                        },
                        webp: {
                            _320: "/backside.webp",
                            _640: "/backside.webp",
                            _768: "/backside.webp",
                            _1024: "/backside.webp",
                        },
                    },
                    type: "back",
                },
                {
                    id: 2,
                    src: this.PhotoCard,
                    type: "card",
                },
            ],
            activeImage: 0,
        }
    },
}

</script>



<style scoped>




.gallery {
    padding: 3%;
    /* padding-top: 2%; */
    height: fit-content;
    border-radius: var(--border-radius);
    background-color: white;
    display: flex;
    z-index: 999;
}


/* ########## GALLERY LIST ########## */

.gallery__list {
    width: 110px;
    margin-right: 6%;
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
    box-shadow: inset 0 0 0 3px var(--clr-1-2);
    overflow: hidden;
}

.gallery__list__img div {
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

.gallery__list__img img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 14;
}


.gallery__list__img .back img {
    opacity: 0;
}






/* ########## GALLERY HERO ########## */


.gallery__hero {
    padding: 2%;
    width: 350px;
}

.gallery__hero > div {
    width: 100%;
    height: fit-content;
    position: relative;
    /* background-color: white; */

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
.gallery__hero > .card > div > div {
    box-shadow: none;
    padding: 0;
}


.gallery__hero .front > div > div::before {
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
.gallery__hero .back > div > div::before {
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
.gallery__hero .back img {
    opacity: 0;
}



.gallery__hero picture {
    display: flex;
    overflow: hidden;
}

.gallery__hero img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 14;
}












/* ########## TRANSITION ########## */

.hero-enter-active,
.hero-leave-active {
  transition: opacity 300ms ease-in-out;
  opacity: 1;
}

.hero-leave-to, 
.hero-enter {
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}

</style>