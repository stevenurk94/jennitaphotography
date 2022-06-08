<template>

       

        <div class="carousel">

            <transition-group :name="direction">
                <div v-show="visibleSlide === index" class="carousel__slide" v-for="(post, index) in posts.data" :key="post.id" :index="index">
                    <img :src="post.media_url" alt="">


                </div>
            </transition-group>

        <button @click="next" class="next">Next</button>
        <button @click="prev" class="previous">Prev</button>
    </div>
           

</template>

<script>
export default {
    data () {
        return {
            visibleSlide: 0,
            direction: "",
            posts: []
        }
    }, 
    async fetch() {
        this.posts = await fetch('https://jennitaphotography.nl/server/instafeed.php').then(res =>
            res.json()
        )
    },
    computed: {
        slidesLength () {
            return this.posts.data.length
        }
    },
    methods: {
        next () {
            this.$emit("next")

            if (this.visibleSlide >= this.slidesLength - 1) {
                this.visibleSlide = 0;

            } else {
                this.visibleSlide++;
            }
            this.direction = "left";

            console.log(this.posts.data.length)
            
            console.log(this.visibleSlide)
        },

        prev () {
            this.$emit("previous")
            console.log(this.posts.length)

            if (this.visibleSlide <= 0) {
                this.visibleSlide = this.slidesLength - 1;

            } else {
                this.visibleSlide--;
            }
            this.direction = "right";

            console.log(this.visibleSlide)
        }
    }
    
}
</script>


<style scoped>

.carousel {
    position: relative;
    width: 600px;
    height: 350px;
    overflow: hidden;
}

.carousel__slide {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
/* 
.carousel__slide.test {
    animation: leftInAnimation .4s;
} */

button {
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
    background-color: rgba(0 0 0 / 80%);
    border: none;
    color: white;
}

button:focus, button:hover {
    cursor: pointer;
    outline: none;
}

.next {
    right: 0;
}

.previous {
    left: 0;
}

img {
    object-fit: cover;
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