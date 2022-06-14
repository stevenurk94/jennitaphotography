<template>
    <section>

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
<!-- 
            <button @click="previousCard" :class="this.number == 0 ? 'previous disabled' : 'previous'">
                <IconsInstaArrow />
            </button>
            <button @click="nextCard" :class="!this.next ? 'next disabled' : 'next'">
                <IconsInstaArrow />
            </button> -->
        </div>


        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
        <style>
            
            .flickity-viewport {
                width: 100%;
            }

            .social .flickity-viewport {
            position: absolute;
            width: 100%;
            }

        </style>
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

        

        
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
            clone: 0,
        }
    },
    async fetch() {
        this.posts = await fetch('https://jennitaphotography.nl/server/instafeed.php').then(res =>
            res.json()
        )
    },
    mounted () {
        const elem = document.querySelector(".social")
        const flkty = new Flickity(elem, {
            cellAlign: "left",
            contain: true,
            autoPlay: 4000,
            wrapAround: true,
            freeScroll: true,
            pageDots: false,
            setGallerySize: true,


        })
        // document.querySelector(".flickity-viewport").style.width = "100%";
    },

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

/* 
.social {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    width: 100%;
    height: fit-content;
    align-items: center;
    margin-top: 30px;
    touch-action: pan-y;
    position: relative;
} */

.social::-webkit-scrollbar {
    display: none;
}




.social > div {
    width: 100%;
    height: 100%;
}

.social__card {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 255px;
    min-width: 255px;
    width: 255px;
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


