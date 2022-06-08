<template>
    <section>
        
        <h1>Instagram</h1>
        <p>#jennitaphotography</p>


        <div class="social">
            <transition-group :name="direction">
                <div v-show="visibleStart <= index && visibleEnd >= index" class="social__slide" v-for="(post, index) in posts.data" :key="post.id" :index="index">
                    <img :src="post.media_url" alt="">
                </div>
            </transition-group>
            <button @click="next" :class="visibleEnd >= posts.data.length - 1 ? 'next hidden' : 'next'">Next</button>
            <button @click="prev" :class="visibleStart <= 0 ? 'previous hidden' : 'previous'">Prev</button>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            visibleStart: 0,
            visibleEnd: 4,
            direction: "",
            posts: []
        }
    }, 
    async fetch() {
        this.posts = await fetch('https://jennitaphotography.nl/server/instafeed.php').then(res =>
            res.json()
        )
    },
    methods: {
        next () {
            this.visibleStart++;
            this.visibleEnd++;
            this.direction = "left";
        },
        prev () {
            this.visibleStart--;
            this.visibleEnd--;
            this.direction = "right";
        }
    },

    
}
</script>


<style scoped>

section {
    width: 100%;
    max-width: 100%;
    background-color: var(--clr-1-3);
    margin-top: 100px;
    padding: 50px 0 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.social {
    position: relative;
    width: 100%;    
}

.social > span {
    display: flex;
    width: 100%;
}
.social__slide {
    /* position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0; */
    height: 255px;
    width: 255px;
    min-width: 255px;
    border-radius: var(--border-radius);
    margin: 15px;
    overflow: hidden;
    /* transition: all 400ms ease-in-out; */
    animation: leftOutAnimation .4s ease-in-out;

}



img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}









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

.next.hidden {
    visibility: hidden;
}

.previous {
    left: 0;
}

.previous.hidden {
    visibility: hidden;
}







.left-enter-active {
    animation: leftInAnimation .4s ease-in-out;

}

.left-leave-active {
    animation: leftOutAnimation .4s ease-in-out;

}

@keyframes leftInAnimation {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes leftOutAnimation {
    from { opacity: 1; }
    to { opacity: 0; }
}

.right-enter-active {
    animation: rightInAnimation .4s ease-in-out;
}

.right-leave-active {
    animation: rightOutAnimation .4s ease-in-out;

}

@keyframes rightInAnimation {
    /* from { transform: translateX(-100%); }
    to { transform: translateX(0) } */
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes rightOutAnimation {
    /* from { transform: translateX(0); }
    to { transform: translateX(100%) } */
    from { opacity: 1; }
    to { opacity: 0; }
}
</style>