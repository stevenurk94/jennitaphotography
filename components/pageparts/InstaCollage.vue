<template>
    <section>
        <button class="buttonPrevious">
            <IconsInstaArrow />
        </button>
        <button class="buttonNext">
            <IconsInstaArrow />
        </button>


        <div class="social">
            <div class="social__card" v-for="(post) in posts.data" :key="post.id">
                <IconsLightbox/>
                <a :href="post.permalink" target="_blank">
                    <img :src="post.media_url" alt="">
                </a>
            </div>
        </div>
        
    </section>
    
</template>

<script>
export default {
    data () {
        return {
            posts: []
        }
    },
    async fetch() {
        this.posts = await fetch('https://jennitaphotography.nl/server/instafeed.php').then(res =>
            res.json()
        )
    },




    // async asyncData({ params, $http }) {
    //     const post = await $http.$get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJWZAmpqMllwS1BUMlhBallaWUE3ckpwbGxUY0hvcW5qRU5fRFNkbFpEOV9vTk9KUXVDSEd4d1RmaFNmYU5pNXdBWG5Vcy1HdmNrcTJaQVRsWHI0SEMzMFhoNkdNWWVVeklnTzVVRGdoMkhoR00wOAZDZD`)
    //     return { post }
    // }

    mounted () {
        const socialContainer = document.querySelector(".social");
        const progressBar = document.querySelector('.progressbar__inner');
        const buttonNext = document.querySelector(".buttonNext");
        const buttonPrevious = document.querySelector(".buttonPrevious");
        let cardWidth = document.querySelector(".social__card:first-of-type").clientWidth + 100


        buttonNext.addEventListener("click", () => {
            socialContainer.scrollLeft += cardWidth;
        })
        
        buttonPrevious.addEventListener("click", () => {
            socialContainer.scrollLeft -= cardWidth;
        })
    }
}


</script>

<style scoped>
section {
    margin-top: 100px;
    width: 100%;
    background: var(--clr-1-3);
    max-width: 100%;
    position: relative;
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}


.social {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 100%;
    height: fit-content;
    align-items: center;
}
.social::-webkit-scrollbar {
    display: none;
}



.social__card {
    min-width: calc(25% - 50px);
    overflow: hidden;
    margin: 0 50px;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    position: relative;
    overflow: hidden;
    height: fit-content;
}



.social__card:hover {
    opacity: .8;
}


.social__card svg {
    position: absolute;
    right: 5px;
    top: 5px;
    fill: var(--clr-1-2)
}

.social__card svg path {
    fill: var(--clr-1-2)
}

.social__card a {
    width: 100%;
    height: 100%;
}



.social__card a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    max-height: 250px;
}












.buttonPrevious, .buttonNext {
    border: none;
    width: 90px;
    height: 90px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 8;
    top: 0;
    bottom: 0;
    margin: auto 20px;
    /* background: linear-gradient(90deg, rgba(255, 255, 255, 0) 50%, #fff 100%); */


    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);


}



.buttonPrevious {
    left: 0;
    transform: rotate(180deg);
}

.buttonNext {
    right: 0;
}

.buttonPrevious svg,
.buttonPrevious svg path,
.buttonNext svg,
.buttonNext svg path {
    fill: var(--clr-1-1);
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


</style>


