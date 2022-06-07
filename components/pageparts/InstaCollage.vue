<template>
    <section>


        <h1>Instagram</h1>
        <p>#jennitaphotography</p>
        <div class="social" :data-card="card">
            
            <div :class="'social__card nr-' + index" v-for="(post, index) in posts.data" :key="post.id">
                <IconsLightbox/>
                <a :href="post.permalink" target="_blank">
                    <!--  :href="post.permalink" target="_blank" -->
                    <img :src="post.media_url" alt="">
                    <div class="social__card__overlay"></div>
                </a>               
            </div>


            <button @click="test1" type="submit" :class="card <= 0 ? 'buttonPrevious disabled' : 'buttonPrevious'" :disable="active">
                <IconsInstaArrow />
            </button>
            <button @click="test5" :class="card >= posts.data.length - 1 ? 'buttonNext disabled' : 'buttonNext'" :disabled="active">
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
            active: false
        }
    },
    async fetch() {
        this.posts = await fetch('https://jennitaphotography.nl/server/instafeed.php').then(res =>
            res.json()
        )
    },

    methods: {

        test1 () {
            if (this.active) {
                return;
            }
            this.active = true;


            const social = document.querySelector(".social");
            console.log(this.posts.data)

            let item = document.querySelector(`.social__card.nr-${ this.card }`)
            social.scrollLeft -= item.offsetWidth
            this.card--;



            setTimeout(function(){
                this.active = false;
            }.bind(this), 450);

        },



        test5 () {

            if (this.active) {
                return;
            }
            this.active = true;

            const social = document.querySelector(".social");
            let item = document.querySelector(`.social__card.nr-${ this.card }`)
            social.scrollLeft += item.offsetWidth
            this.card++;


            setTimeout(function(){
                this.active = false;
            }.bind(this), 450);



        }
    },



    // async asyncData({ params, $http }) {
    //     const post = await $http.$get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJWZAmpqMllwS1BUMlhBallaWUE3ckpwbGxUY0hvcW5qRU5fRFNkbFpEOV9vTk9KUXVDSEd4d1RmaFNmYU5pNXdBWG5Vcy1HdmNrcTJaQVRsWHI0SEMzMFhoNkdNWWVVeklnTzVVRGdoMkhoR00wOAZDZD`)
    //     return { post }
    // }


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
    overflow-x: scroll;
    scroll-behavior: smooth;
    width: 100%;
    height: fit-content;
    align-items: center;
    margin-top: 30px;
}
/* .social::-webkit-scrollbar {
    display: none;
} */



.social__card {
    overflow: hidden;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    position: relative;
    overflow: hidden;
    height: 285px;
    min-width: 285px;
    padding: 15px;
}




.social__card__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 300ms ease-in-out;
}


.social__card:hover .social__card__overlay {
    background: rgb(0 0 0 / 20%);

}

.social__card svg {
    position: absolute;
    right: 25px;
    top: 25px;
    z-index: 10;
}

.social__card svg, .social__card svg path {
    fill: rgb(255 255 255 / 80%);
    transition: all 300ms ease-in-out;
}

.social__card:hover svg, .social__card:hover svg path {
    fill: rgb(255 255 255 / 100%);
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
        
    border-radius: var(--border-radius);

}

.social__card:hover a img {
    transform: scale(1.03);
}










.buttonPrevious, .buttonNext {
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

.buttonPrevious:hover, .buttonNext:hover {
    background: rgba(255, 255, 255, 0.80);

}

.buttonPrevious.disabled,
.buttonNext.disabled {
    pointer-events: none;
}

.buttonPrevious {
    left: 2%;
    transform: rotate(180deg);
}

.buttonNext {
    right: 2%;
}

.buttonPrevious svg,
.buttonPrevious svg path,
.buttonNext svg,
.buttonNext svg path {
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


