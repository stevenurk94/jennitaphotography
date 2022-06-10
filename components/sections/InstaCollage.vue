<template>
    <section @touchstart="swipeStart" @touchmove="swipeMove" @touchend="swipeEnd" @touchcancel="swipeCancel">
        <h1>Instagram</h1>
        <p>#jennitaphotography</p>
        <div class="social">
            <div class="social__card" v-for="post in posts.data" :key="post.id">
                <IconsLightbox/>
                <a :href="post.permalink" target="_blank">
                    <img :src="post.media_url" alt="">
                    <div class="social__card__overlay"></div>
                </a>
            </div>

            <button @click="previousCard" :class="this.number == 0 ? 'previous disabled' : 'previous'">
                <IconsInstaArrow />
            </button>
            <button  @click="nextCard" :class="!this.next ? 'next disabled' : 'next'">
                <IconsInstaArrow />
            </button>
        </div>
        
    </section>
    
</template>

<script>
export default {
    data () {
        return {
            posts: [],
            card: 0, 
            number: 0,
            active: false,
            next: true,
            startX: 0,
            moveX: 0,
        }
    },
    async fetch() {
        this.posts = await fetch('https://jennitaphotography.nl/server/instafeed.php').then(res =>
            res.json()
        )
    },
    mounted () {
        this.nextCard();
        setInterval(this.nextCard, 6000);
    },
    methods: {
        swipeStart ( event ) {
            this.startX = event.touches[0].clientX;
        },
        swipeMove ( event ) {
            this.moveX = event.touches[0].clientX;
        },
        swipeEnd () {
            console.log("startX: ", this.startX)
            console.log("moveX: ", this.moveX)

            if ( this.startX + 50 < this.moveX ) {
                console.log("right");
                this.previousCard();
                this.startX = 0;
                this.moveX = 0;

                document.body.style.overflow = "hidden";
            }
            else if ( this.moveX != 0 && this.startX - 50 > this.moveX ) {
                console.log("left");
                this.nextCard();
                this.startX = 0;
                this.moveX = 0;

                document.body.style.overflow = "hidden";
            }

            document.body.style.overflow = "auto";
        },
        swipeCancel () {
            console.log("startX: ", this.startX)
            console.log("moveX: ", this.moveX)

            if ( this.startX + 50 < this.moveX ) {
                console.log("right");
                this.previousCard();
                this.startX = 0;
                this.moveX = 0;
            }
            else if ( this.moveX != 0 && this.startX - 50 > this.moveX ) {
                console.log("left");
                this.nextCard();
                this.startX = 0;
                this.moveX = 0;
            }
        },
        nextCard () {
            const social = document.querySelector(".social")
            const cards = document.querySelectorAll(".social__card")
            const lastCards = social.offsetWidth / (cards[0].offsetWidth + 30);

            if (this.number < (this.posts.data.length - lastCards)) {
                this.card = this.card + (cards[0].offsetWidth + 30);
            }
            if (cards == 1) {
                this.card = 0; 
            }


            cards.forEach(card => {
                if (this.number < (this.posts.data.length - lastCards)) {
                    card.style.left = `-${ this.card }px`;                    
                }
            })

            if (this.number < (this.posts.data.length - lastCards)) {
                this.number++;
                this.next = true;
            } else {
                this.next = false;
            }
        },
        previousCard () {
            const cards = document.querySelectorAll(".social__card")
            this.card = this.card - (cards[0].offsetWidth + 30);
            let minMove = Math.ceil(cards.length / 4);

            if (this.card <= 0) {
                this.card = 0;
            }

            cards.forEach(card => {
                if (minMove > 1) {
                    card.style.left = `-${ this.card }px`;
                } else {
                    this.previous = false;
                }    
            })

            if (minMove > 1) {
                this.number--;
                this.next = true;
            }
        }
    },



    // async asyncData({ params, $http }) {
    //     const post = await $http.$get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJWZAmpqMllwS1BUMlhBallaWUE3ckpwbGxUY0hvcW5qRU5fRFNkbFpEOV9vTk9KUXVDSEd4d1RmaFNmYU5pNXdBWG5Vcy1HdmNrcTJaQVRsWHI0SEMzMFhoNkdNWWVVeklnTzVVRGdoMkhoR00wOAZDZD`)
    //     return { post }
    // }


    // ToDo
    // Optimaliseren mobiel
    // Buttons in 't midden
    // Buttons hover meer effect..



}


</script>

<style scoped>
section {
    margin-top: 100px;
    width: 100%;
    background: var(--clr-1-3);
    max-width: 100%;
    padding: 50px 0 70px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
}


.social {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    /* scroll-behavior: smooth; */
    width: 100%;
    height: fit-content;
    align-items: center;
    margin-top: 30px;
}

.social::-webkit-scrollbar {
    display: none;
}

.social__card {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 255px;
    min-width: 255px;
    margin: 15px;
    border-radius: var(--border-radius);
    transition: all 500ms ease-in-out;
}




.social__card__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    background: rgb(0 0 0 / 20%);
    opacity: 0;
    /* border-radius: var(--border-radius); */
}


.social__card:hover .social__card__overlay {
    opacity: 1;
}

.social__card svg {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
}

.social__card svg, .social__card svg path {
    fill: rgb(255 255 255 / 80%);
    transition: all 300ms ease-in-out;
}

.social__card:hover svg, .social__card:hover svg path {
    fill: rgb(255 255 255 / 95%);
}

.social__card a {
    width: 100%;
    height: 100%;
}



.social__card a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 300ms ease-in-out;
    /* border-radius: var(--border-radius); */
    /* max-height: 250px; */
        
    /* border-radius: var(--border-radius); */

}

.social__card:hover a img {
    transform: scale(1.02);
}



.social__card__scroll {
    position: absolute;
    right: 0;
    top: 50%;
    bottom: 50%;
}






.previous, .next {
    border: none;
    width: 60px;
    height: 60px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 8;
    top: 50%;
    bottom: 50%;
    /* margin: auto 20px; */
    /* background: linear-gradient(90deg, rgba(255, 255, 255, 0) 50%, #fff 100%); */
    background: rgba(255, 255, 255, 0.7);
    border-radius: 100%;
    /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transition: all 300ms ease-in-out;
}

.previous.disabled, .next.next.disabled {
    opacity: 50%;
}

.previous:hover, .next:hover {
    background: rgba(255, 255, 255, 0.80);

}

.previous.disabled,
.next.disabled {
    pointer-events: none;
}

.previous {
    left: 2%;
    transform: rotate(180deg);
}

.next {
    right: 2%;
}

.previous svg,
.previous svg path,
.next svg,
.next svg path {
    fill: var(--clr-3-1);
}


.button-3 {
    padding: 15px 35px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 350ms ease-in-out;
}




.scroll {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

}
</style>


