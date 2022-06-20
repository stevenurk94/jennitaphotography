<template>
    <div class="modal-overlay" v-show="showImageModal" @click="$emit('closeImageModal')">
        <span class="modal__close" @click="$emit('closeImageModal')">
            <IconsCross />
        </span>



        <div class="modal" @click.stop>
            
            <span class="modal__arrow" @click.stop @click="prev">
                <IconsArrow />
            </span>
            <span class="modal__arrow" @click.stop @click="next">
                <IconsArrow />
            </span>


            <div class="modal__list">
                <div class="modal__list__item" v-for="(item, index) in testData" :index="index" :key="item.img_small" @click="test">
                    <img loading="lazy" :src="item.img_small" :index="index">
                </div>
            </div>

            <div class="modal__card">
                <transition-group :name="direction">
                    <div class="modal__card__slide" v-show="visibleSlide === index" v-for="(item, index) in testData" :key="item.img_big" :index="index">
                        <img  :src="item.img_big" >
                    </div>
                </transition-group>

            </div>
            




        </div>




    </div>
</template>

<script>
export default {
    props: ["showImageModal", "PhotoCard"],

    data () {
        return {
            testData: [
                {
                    img_big: require(`~/static/img${this.PhotoCard.image.jpeg._640}`),
                    img_small: require(`~/static/img${this.PhotoCard.image.jpeg._160}`)
                },
                {
                    img_big: require(`~/static/img${this.PhotoCard.image.jpeg._640}`),
                    img_small: require(`~/static/img${this.PhotoCard.image.jpeg._160}`)
                },
                {
                    img_big: require(`~/static/img${this.PhotoCard.image.jpeg._640}`),
                    img_small: require(`~/static/img${this.PhotoCard.image.jpeg._160}`)
                },
                {
                    img_big: require(`~/static/img${this.PhotoCard.image.jpeg._640}`),
                    img_small: require(`~/static/img${this.PhotoCard.image.jpeg._160}`)
                }
            ],
            direction: "",
            visibleSlide: 0,
        }
    },
    methods: {
        next () {
            this.$emit("next")

            if (this.visibleSlide >= this.testData.length - 1) {
                this.visibleSlide = 0;

            } else {
                this.visibleSlide++;
            }
            this.direction = "left";
        },
        prev () {
            this.$emit("previous")

            if (this.visibleSlide <= 0) {
                this.visibleSlide = this.testData.length - 1;

            } else {
                this.visibleSlide--;
            }
            this.direction = "right";

        },
        test ( event ) {
            console.log(event.target.attributes[3].value)
            this.visibleSlide = event.target.attributes[3].value
            console.log(this.visibleSlide)
            
        }
    }
}
</script>


<style scoped>
.modal-overlay {
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
    transition: all 3s ease-in-out;
}

.modal {
    padding: 40px;
    background: white;
    border-radius: var(--border-radius);
    position: relative;
    display: flex;
    width: fit-content;


/* 
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3); */
}




/* ########## MODAL LIST ########## */
.modal__list {
    max-width: 100px;
    width: 100%;
    margin-right: 60px;
}

.modal__list__item {
    cursor: pointer;
    margin-bottom: 6px;
    border-radius: var(--border-radius);
    background-color: var(--clr-3-3);
    padding: 2px;
    border: 2.5px solid transparent;
    transition: all 300ms ease-in-out;
    display: flex;
}

.modal__list__item:hover {
    border: 2.5px solid var(--clr-1-1);
}

.modal__list__item img {
    width: 100%;
    height: 100%;
}










/* ########## MODAL IMAGE ########## */


.modal__card {
    /* max-height: 800px;
    overflow: hidden;
    max-width: 500px;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden; */

    position: relative;
    width: 500px;
    height: 800px;
    overflow: hidden;
}


.modal__card__slide {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.modal__card__slide img {
    object-fit: cover;
    width: 100%;
    height: 100%;

}










/* ########## MODAL ARROW ########## */
.modal__arrow {
    border: none;
    width: 60px;
    height: 60px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 8;
    top: 0;
    bottom: 0;
    margin: auto 0;

    transition: all 300ms ease-in-out;
    position: absolute;
    right: -100px;
}

.modal__arrow:first-child {
    left: -100px;
    transform: rotateY(180deg);
}



.modal__arrow svg,
.modal__arrow svg path {
    transition: all 300ms ease-in-out;
    fill: rgb(255 255 255 / 90%);
}

.modal__arrow:hover svg,
.modal__arrow:hover svg path {
    fill: rgb(255 255 255 / 100%);
}






/* ########## MODAL CLOSE ########## */
.modal__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 17px;
    height: 17px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}

.modal__close svg {
    fill: rgb(255 255 255 / 90%);
    width: 100%;
    height: 100%;
}







































.left-enter-active {
    animation: leftInAnimation .4s ease-in-out;

}

.left-leave-active {
    animation: leftOutAnimation .4s ease-in-out;

}

@keyframes leftInAnimation {
    from { transform: translateX(100%); }
    to { transform: translateX(0) }
}

@keyframes leftOutAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(-100%) }
}

.right-enter-active {
    animation: rightInAnimation .4s ease-in-out;

}

.right-leave-active {
    animation: rightOutAnimation .4s ease-in-out;

}

@keyframes rightInAnimation {
    from { transform: translateX(-100%); }
    to { transform: translateX(0) }
}

@keyframes rightOutAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(100%) }
}

</style>