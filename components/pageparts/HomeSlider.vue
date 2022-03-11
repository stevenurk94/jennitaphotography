<template>
    <section>
        <div>
            <picture>
                <source
                    type="image/webp"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/webp/320/kaart0018.webp 320w,
                        ~/assets/img/webp/640/kaart0018.webp 640w,
                        ~/assets/img/webp/768/kaart0018.webp 768w,
                        ~/assets/img/webp/1024/kaart0018.webp 1024w,
                        ~/assets/img/webp/1600/kaart0018.webp 1600w">
                <source
                    type="image/jpeg"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/320/kaart0018.jpeg 320w,
                        ~/assets/img/640/kaart0018.jpeg 640w,
                        ~/assets/img/768/kaart0018.jpeg 768w,
                        ~/assets/img/1024/kaart0018.jpeg 1024w,
                        ~/assets/img/1600/kaart0018.jpeg 1600w">
                <img class="blur sliderImage" @load="removeBlur" loading="lazy" src="~/assets/img/1024/kaart0018.jpeg" alt="">
            </picture>
            <picture>
                <source
                    type="image/webp"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/webp/320/kaart0019.webp 320w,
                        ~/assets/img/webp/640/kaart0019.webp 640w,
                        ~/assets/img/webp/768/kaart0019.webp 768w,
                        ~/assets/img/webp/1024/kaart0019.webp 1024w,
                        ~/assets/img/webp/1600/kaart0019.webp 1600w">
                <source
                    type="image/jpeg"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/320/kaart0019.jpeg 320w,
                        ~/assets/img/640/kaart0019.jpeg 640w,
                        ~/assets/img/768/kaart0019.jpeg 768w,
                        ~/assets/img/1024/kaart0019.jpeg 1024w,
                        ~/assets/img/1600/kaart0019.jpeg 1600w">
                <img src="~/assets/img/1024/kaart0019.jpeg" alt="">
            </picture>
            <picture>
                <source
                    type="image/webp"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/webp/320/kaart0016.webp 320w,
                        ~/assets/img/webp/640/kaart0016.webp 640w,
                        ~/assets/img/webp/768/kaart0016.webp 768w,
                        ~/assets/img/webp/1024/kaart0016.webp 1024w,
                        ~/assets/img/webp/1600/kaart0016.webp 1600w">
                <source
                    type="image/jpeg"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/320/kaart0016.jpeg 320w,
                        ~/assets/img/640/kaart0016.jpeg 640w,
                        ~/assets/img/768/kaart0016.jpeg 768w,
                        ~/assets/img/1024/kaart0016.jpeg 1024w,
                        ~/assets/img/1600/kaart0016.jpeg 1600w">
                <img src="~/assets/img/1024/kaart0016.jpeg" alt="">
            </picture>
            <picture>
                <source
                    type="image/webp"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/webp/320/kaart0014.webp 320w,
                        ~/assets/img/webp/640/kaart0014.webp 640w,
                        ~/assets/img/webp/768/kaart0014.webp 768w,
                        ~/assets/img/webp/1024/kaart0014.webp 1024w,
                        ~/assets/img/webp/1600/kaart0014.webp 1600w">
                <source
                    type="image/jpeg"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/320/kaart0014.jpeg 320w,
                        ~/assets/img/640/kaart0014.jpeg 640w,
                        ~/assets/img/768/kaart0014.jpeg 768w,
                        ~/assets/img/1024/kaart0014.jpeg 1024w,
                        ~/assets/img/1600/kaart0014.jpeg 1600w">
                <img src="~/assets/img/1024/kaart0014.jpeg" alt="">
            </picture>
            <picture>
                <source
                    type="image/webp"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/webp/320/kaart0018.webp 320w,
                        ~/assets/img/webp/640/kaart0018.webp 640w,
                        ~/assets/img/webp/768/kaart0018.webp 768w,
                        ~/assets/img/webp/1024/kaart0018.webp 1024w,
                        ~/assets/img/webp/1600/kaart0018.webp 1600w">
                <source
                    type="image/jpeg"
                    sizes="
                        (max-width: 320px) 320px,
                        (min-width: 320px) and (max-width: 640px) 640px,
                        (min-widht: 640px) and (max-width: 768px) 768px,
                        (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                    srcset="
                        ~/assets/img/320/kaart0018.jpeg 320w,
                        ~/assets/img/640/kaart0018.jpeg 640w,
                        ~/assets/img/768/kaart0018.jpeg 768w,
                        ~/assets/img/1024/kaart0018.jpeg 1024w,
                        ~/assets/img/1600/kaart0018.jpeg 1600w">
                <img src="~/assets/img/1024/kaart0018.jpeg" alt="">
            </picture>
        </div>
    </section>

</template>


<style scoped>

section {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    background-color: var(--clr-1-1);
}

div {
    width: 500%;
    height: 100%;
    position: relative;
    margin: 0;
    left: 0;
    animation: slider 40s infinite;
}

div img {
    width: 20%;
    height: 100%;
    float: left;
    object-position: bottom;
    object-fit: cover;
}

.blur {
    filter: blur(10px);
    transition: all 1000ms ease-in-out;
}

.noblur {
    transition: all 1000ms ease-in-out;
}


@keyframes slider {
    0% {
        left: 0;
    }
    20% {
        left: 0;
    }
    25% {
        left: -100%;
    }
    45% {
        left: -100%;
    }
    50% {
        left: -200%;
    }
    70% {
        left: -200%;
    }
    75% {
        left: -300%;
    }
    95% {
        left: -300%;
    }
    100% {
        left: -400%;
    }
}



</style>

<script>
export default {
    methods: {
        removeBlur () {
            const image_1 = document.querySelector("picture .sliderImage:nth-of-type(1)");
            image_1.classList.remove("blur");
            image_1.classList.add("noblur");
        }
    }
}
</script>