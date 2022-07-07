<template>
    <main>
        <section>
            <div class="div1">
                <div class="div21">
                    <div v-for="image in images" :key="image.id" :class="{ active: image.id == activeImage ? true : false}"  @mouseover="activeImage = image.id">
                        <img  :src="image.url" alt=""  >
                    </div>
                </div>
                <transition-group class="div22" name="fade" mode="out-in" tag="div">
                    <img :src="image.url" v-show="activeImage === image.id" v-for="image in images" :key="image.id">
                </transition-group>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data () {
        return {
            activeImage: 0,
            images: [
                {
                    id: 0,
                    url: "https://jennitaphotography.nl/_nuxt/img/herfst-1.e43c59c.webp",
                },
                {
                    id: 1,
                    url: "https://jennitaphotography.nl/_nuxt/img/herfst-2.bc10ae7.webp",
                },
                {
                    id: 2,
                    url: "https://jennitaphotography.nl/_nuxt/img/herfst-3.ae30283.webp",
                },
                {
                    id: 3,
                    url: "https://jennitaphotography.nl/_nuxt/img/herfst-4.326b113.webp",
                },
            ]
        }
    },
}
</script>

<style scoped>

section {
    display: flex;
    justify-content: center;
    padding-top: 100px;
}

.div1 {
    background: var(--clr-3-3);
    padding: 1%;
    border-radius: var(--border-radius);
    display: flex;
}

.div21 {
    width: 140px;
    margin-right: 2%;
}



.div21 div {
    padding: 4px;
    display: flex;
}

.div21:first-child {
    margin-top: -4px;
}


.div21 div:not(:last-child) {
    margin-bottom: 10px;
}


.active {
    border-radius: var(--border-radius);
    box-shadow: inset 0 0 0 4px var(--clr-2-1);
    overflow: hidden;
}


.div22 {
    position: relative;
    width: 500px;
    overflow: hidden;
}

/* .div22 img {
    opacity: 0;
    animation: name duration timing-function delay iteration-count direction fill-mode;
    animation: appearance 500ms forwards;
}

@keyframes appearance {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
} */




.div22 img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

img {
    width: 100%;
    max-width: 500px;
    object-fit: contain;
    cursor: pointer;
}

/* img:not(:last-child) {
    margin-bottom: 10px;
} */







.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-in-out;
  opacity: 1;
}

.fade-leave-to, 
.fade-enter {
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}


</style>