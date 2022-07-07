<template>
    <transition name="modal">
        <div class="overlay" v-show="showImageModal" @click="$emit('closeImageModal')">
            <span class="overlay__next" @click="next" @click.stop>
                <IconsArrow />
            </span>
            <span class="overlay__previous" @click="previous" @click.stop>
                <IconsArrow />
            </span>
            <transition-group class="modal" tag="div" name="list" @click.stop>
                <div class="modal__card" v-show="$store.state.imageGallery.activeImage === image.id" v-for="image in images" :key="image.id" @click="$emit('showImageModal')" :class="image.type">
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
                <!-- <div class="modal__card__dots">
                    <span v-for="image in images" :key="image.id"></span>
                </div>     -->
            </transition-group>
        </div>
    </transition>
</template>

<script>
export default {
    props: ["PhotoCard", "showImageModal", "Name"],
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
        }
    },
    methods: {
        next () {
            if (this.$store.state.imageGallery.activeImage < this.images.length - 1) {
                this.$store.commit("imageGallery/setActiveImage", this.$store.state.imageGallery.activeImage + 1);
            } else {
                this.$store.commit("imageGallery/setActiveImage", 0);
            }
        },
        previous () {
            if (this.$store.state.imageGallery.activeImage >=! 0) {
                this.$store.commit("imageGallery/setActiveImage", this.$store.state.imageGallery.activeImage - 1);
            } else {
                this.$store.commit("imageGallery/setActiveImage", this.images.length - 1);
            }
        }
    },
}
</script>
<style scoped>

.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    /* transition: all 3s ease-in-out; */
}

.overlay__next {
    position: absolute;
    right: 5%;
    /* background-color: white; */
    height: 100px;
    width: 100px;
    cursor: pointer;
}
.overlay__next svg, 
.overlay__next path,
.overlay__previous svg,
.overlay__previous path {
    fill: var(--clr-1-2);
    transition: all 300ms ease-in-out;
}
.overlay__next:hover svg, 
.overlay__next:hover path,
.overlay__previous:hover svg,
.overlay__previous:hover path {
    fill: var(--clr-1-1);
}

.overlay__previous {
    position: absolute;
    left: 5%;
    /* background-color: white; */
    height: 100px;
    width: 100px;
    cursor: pointer;
    transform: rotateY(180deg);
}





.modal {
    max-height: 80vh;
    overflow: hidden;
    height: 100%;
    background-color:  rgba(255 255 255 / 100%);
    padding: 4% 10% 3% 10%;
    border-radius: var(--border-radius);
    z-index: 0;
    pointer-events: none;
}

.modal__card {
    padding: 6%;
    height: 100%;
    background-color: white;
    position: relative;
    box-shadow: rgba(50 50 93 / 25%) 0px 6px 12px -2px, rgba(0 0 0 / 30%) 0px 3px 7px -3px;
}

.modal__card.front::before {
    content: "";
    width: 90%;
    background: linear-gradient(270deg, #f1f1f1 0%, #b8b8b8 100%);
    height: 100%;
    display: flex;
    transform: skewY(-4deg);
    position: absolute;
    top: -2.2476475268%;
    left: 0;
    z-index: -1;
}
.modal__card.back img {
    opacity: 0;
}
.modal__card.back::before {
    content: "";
    width: 90%;
    background: linear-gradient(270deg, #b8b8b8 0%, #f1f1f1 100%);
    height: 100%;
    display: flex;
    transform: skewY(4deg);
    position: absolute;
    top: -2.2476475268%;
    right: .5px;
    z-index: -1;
}
.modal__card.card {
    box-shadow: none;
    padding: 0;

}

/* .modal__card__dots {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: -500px;

}

.modal__card__dots span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid red;
    display: flex;
}

.modal__card__dots span:nth-child(2) {
    margin: 0 10px;
} */

.modal__card picture {
    display: flex;
    overflow: hidden;
    height: 100%;
}

.modal__card img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 14;
}








/* ########## MODAL FADE ########## */
.modal-enter-active, 
.modal-leave-active {
    transition: all 300ms ease-in-out;
}

.modal-enter, 
.modal-leave-to {
    opacity: 0;
}



</style>