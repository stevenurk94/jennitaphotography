<template>
    <transition name="modal">
        <div class="overlay" v-show="showImageModal" @click.self="$emit('closeImageModal')">
            <div class="modal">
                <div class="modal__buttons">

                    <span class="modal__buttons__previous" @click="previous">
                        <IconsArrow />
                    </span>
                    <span class="modal__buttons__next" @click="next">
                        <IconsArrow />
                    </span>
                    <span class="modal__buttons__close" @click="$emit('closeImageModal')">
                        <IconsCross />
                    </span>
                </div>

                
                <div class="modal__cards">
                    <div class="modal__cards__item" :class="$store.state.imageGallery.activeImage === image.id ? `active ${ image.type }` : ''" v-show="$store.state.imageGallery.activeImage === image.id" v-for="image in images" :key="image.id">
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
                        <img v-if="image.id == 1" class="modal__cards__item__logo" src="~/static/backside.jpg" alt="logo">
                    </div>
                </div>
                <div class="modal__dots">
                    <span 
                        :class="$store.state.imageGallery.activeImage === image.id ? 'active' : ''" 
                        v-for="image in images" 
                        :key="image.id" 
                        @click="$store.commit('imageGallery/setActiveImage', image.id)"
                    ></span>
                </div>    
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ["PhotoCard", "showImageModal", "Name", "Images"],
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
    background-color: rgb(0 0 0 / 60%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
}


.modal {
    max-height: 90vh;
    overflow: hidden;
    height: 100%;
    background-color:  rgba(255 255 255 / 100%);
    padding: 4% 10% 3% 10%;
    border-radius: var(--border-radius);
    z-index: inherit;
    position: relative;
}




/* ########## MODAL BUTTONS ########## */
.modal__buttons__next {
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: white;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 50px;
    width: 50px;
    cursor: pointer;
    padding: 7px 5px 5px 8px;
    transition: all 300ms ease-in-out;
}


.modal__buttons__previous {
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: white;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 50px;
    width: 50px;
    cursor: pointer;
    transform: rotateY(180deg);
    padding: 7px 5px 5px 8px;
    transition: all 300ms ease-in-out;
}

.modal__buttons__close {
    width: 15px;
    height: 15px;
    top: 10px;
    right: 10px;
    position: absolute;
    cursor: pointer;
}



@media only screen and (max-width: 767px) {
    .overlay {
        display: block;
    }

    .modal {
        width: 100%;
        height: 100%;
        max-height: 90vh;
        border-radius: 0;
    }

    .modal__buttons {
        /* position: fixed; */
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: .5px solid var(--clr-1-3);
        z-index: 10;
        padding: 0 5%;
        height: 10vh;
        position: fixed;
    }
    .modal__buttons span {
        position: relative;
        border-radius: none;
        box-shadow: none;
        left: 0;
        right: 0;
    }
    .modal__buttons__previous {
        margin: 0;
        width: 45px;
        height: 45px;
    }
    .modal__buttons__next {
        margin: 0 0 0 1.5%;
        width: 45px;
        height: 45px;
    }
    .modal__buttons__close {
        top: 0;
        bottom: 0;
        width: 20px;
        height: 20px;
        margin: auto 0 auto 10%;
    }
}



.modal__buttons__next svg, 
.modal__buttons__next path,
.modal__buttons__previous svg,
.modal__buttons__previous path,
.modal__buttons__close svg,
.modal__buttons__close path {
    fill: var(--clr-1-2);
    transition: all 300ms ease-in-out;
}

.modal__buttons__next:hover, 
.modal__buttons__next:hover,
.modal__buttons__previous:hover,
.modal__buttons__previous:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.modal__buttons__next:hover svg, 
.modal__buttons__next:hover path,
.modal__buttons__previous:hover svg,
.modal__buttons__previous:hover path,
.modal__buttons__close:hover svg,
.modal__buttons__close:hover path {
    fill: var(--clr-1-1);
}






/* ########## MODAL CARDS ########## */

.modal__cards {
    width: 100%;
    height: 100%;
}


.modal__cards__item {
    padding: 6%;
    height: 100%;
    background-color: white;
    position: relative;
    box-shadow: rgba(50 50 93 / 25%) 0px 6px 12px -2px, rgba(0 0 0 / 30%) 0px 3px 7px -3px;
}



.modal__cards__item.front::before {
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
.modal__cards__item.back picture img {
    opacity: 0;
}
.modal__cards__item.back::before {
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
.modal__cards__item.card {
    box-shadow: none;
    padding: 0;

}
.modal__cards__item picture {
    display: flex;
    overflow: hidden;
    height: 100%;
}

.modal__cards__item picture img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 9 / 14;
}



.modal__cards__item__logo {
    position: absolute;
    width: 20%;
    bottom: 0;
    right: 0;
    margin: 5% 6%;
}








/* ########## MODAL DOTS ########## */
.modal__dots {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;

}

.modal__dots span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--clr-1-2);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
    cursor: pointer;
}


.modal__dots span:nth-child(2) {
    margin: 0 10px;
}

.modal__dots span.active {
    background-color: var(--clr-1-1);

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