<template>
    <section>
        <div>
            <div>
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
                                ~/static/img/webp/320/narcissen.webp 320w,
                                ~/static/img/webp/640/narcissen.webp 640w,
                                ~/static/img/webp/768/narcissen.webp 768w,
                                ~/static/img/webp/1024/narcissen.webp 1024w,
                                ~/static/img/webp/1600/narcissen.webp 1600w">
                        <source
                            type="image/jpeg"
                            sizes="
                                (max-width: 320px) 320px,
                                (min-width: 320px) and (max-width: 640px) 640px,
                                (min-widht: 640px) and (max-width: 768px) 768px,
                                (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                            srcset="
                                ~/static/img/jpeg/320/narcissen.jpg 320w,
                                ~/static/img/jpeg/640/narcissen.jpg 640w,
                                ~/static/img/jpeg/768/narcissen.jpg 768w,
                                ~/static/img/jpeg/1024/narcissen.jpg 1024w,
                                ~/static/img/jpeg/1600/narcissen.jpg 1600w">
                        <img 
                            class="blur sliderImage" 
                            @load="removeBlur"
                            src="~/static/img/jpeg/1024/narcissen.jpg" 
                            alt="narcissen">
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
                                ~/static/img/webp/320/herfst-6.webp 320w,
                                ~/static/img/webp/640/herfst-6.webp 640w,
                                ~/static/img/webp/768/herfst-6.webp 768w,
                                ~/static/img/webp/1024/herfst-6.webp 1024w,
                                ~/static/img/webp/1600/herfst-6.webp 1600w">
                        <source
                            type="image/jpeg"
                            sizes="
                                (max-width: 320px) 320px,
                                (min-width: 320px) and (max-width: 640px) 640px,
                                (min-widht: 640px) and (max-width: 768px) 768px,
                                (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                            srcset="
                                ~/static/img/jpeg/320/herfst-6.jpeg 320w,
                                ~/static/img/jpeg/640/herfst-6.jpeg 640w,
                                ~/static/img/jpeg/768/herfst-6.jpeg 768w,
                                ~/static/img/jpeg/1024/herfst-6.jpeg 1024w,
                                ~/static/img/jpeg/1600/herfst-6.jpeg 1600w">
                        <img 
                            class="blur sliderImage"
                            loading="lazy"
                            @load="removeBlur"
                            src="~/static/img/jpeg/1024/herfst-6.jpeg" 
                            alt="herfst 6">
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
                                ~/static/img/webp/320/herfst-7.webp 320w,
                                ~/static/img/webp/640/herfst-7.webp 640w,
                                ~/static/img/webp/768/herfst-7.webp 768w,
                                ~/static/img/webp/1024/herfst-7.webp 1024w,
                                ~/static/img/webp/1600/herfst-7.webp 1600w">
                        <source
                            type="image/jpeg"
                            sizes="
                                (max-width: 320px) 320px,
                                (min-width: 320px) and (max-width: 640px) 640px,
                                (min-widht: 640px) and (max-width: 768px) 768px,
                                (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                            srcset="
                                ~/static/img/jpeg/320/herfst-7.jpeg 320w,
                                ~/static/img/jpeg/640/herfst-7.jpeg 640w,
                                ~/static/img/jpeg/768/herfst-7.jpeg 768w,
                                ~/static/img/jpeg/1024/herfst-7.jpeg 1024w,
                                ~/static/img/jpeg/1600/herfst-7.jpeg 1600w">
                        <img
                            class="blur sliderImage" 
                            @load="removeBlur"
                            loading="lazy"
                            src="~/static/img/jpeg/1024/herfst-7.jpeg" 
                            alt="herfst 7">
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
                                ~/static/img/webp/320/bloesem-1.webp 320w,
                                ~/static/img/webp/640/bloesem-1.webp 640w,
                                ~/static/img/webp/768/bloesem-1.webp 768w,
                                ~/static/img/webp/1024/bloesem-1.webp 1024w,
                                ~/static/img/webp/1600/bloesem-1.webp 1600w">
                        <source
                            type="image/jpeg"
                            sizes="
                                (max-width: 320px) 320px,
                                (min-width: 320px) and (max-width: 640px) 640px,
                                (min-widht: 640px) and (max-width: 768px) 768px,
                                (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                            srcset="
                                ~/static/img/jpeg/320/bloesem-1.jpg 320w,
                                ~/static/img/jpeg/640/bloesem-1.jpg 640w,
                                ~/static/img/jpeg/768/bloesem-1.jpg 768w,
                                ~/static/img/jpeg/1024/bloesem-1.jpg 1024w,
                                ~/static/img/jpeg/1600/bloesem-1.jpg 1600w">
                        <img 
                            class="blur sliderImage" 
                            @load="removeBlur"
                            loading="lazy"
                            src="~/static/img/jpeg/1024/bloesem-1.jpg" 
                            alt="bloesem 1">
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
                                ~/static/img/webp/320/narcissen.webp 320w,
                                ~/static/img/webp/640/narcissen.webp 640w,
                                ~/static/img/webp/768/narcissen.webp 768w,
                                ~/static/img/webp/1024/narcissen.webp 1024w,
                                ~/static/img/webp/1600/narcissen.webp 1600w">
                        <source
                            type="image/jpeg"
                            sizes="
                                (max-width: 320px) 320px,
                                (min-width: 320px) and (max-width: 640px) 640px,
                                (min-widht: 640px) and (max-width: 768px) 768px,
                                (min-width: 768px) and (max-width: 1024px) 1024px, 1600px"
                            srcset="
                                ~/static/img/jpeg/320/narcissen.jpg 320w,
                                ~/static/img/jpeg/640/narcissen.jpg 640w,
                                ~/static/img/jpeg/768/narcissen.jpg 768w,
                                ~/static/img/jpeg/1024/narcissen.jpg 1024w,
                                ~/static/img/jpeg/1600/narcissen.jpg 1600w">
                        <img 
                            class="blur sliderImage" 
                            @load="removeBlur"
                            loading="lazy"
                            src="~/static/img/jpeg/1024/narcissen.jpg" 
                            alt="narcissen">
                    </picture>
                </div>
            </div>
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

section > div {
    
    clip-path: inset(0);
    position: relative;
    height: 100%;
    width: 100%;
}

section > div > div {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}


section > div > div > div {
    width: 500%;
    height: 100%;
    position: relative;
    margin: 0;
    left: 0;
    animation: slider 40s infinite;
}

section > div > div > div img {
    width: 20%;
    height: 100%;
    float: left;
    object-position: bottom;
    object-fit: cover;
}

.blur {
    filter: blur(10px);
    opacity: 0;
    transition: all 1000ms ease-in-out;
}

.noblur {
    transition: all 1000ms ease-in-out;
    opacity: 1;
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

            if (document.readyState == 'complete') {
                const test = document.querySelectorAll("picture .sliderImage");
                test.forEach(item => {
                    item.classList.remove("blur");
                    // item.classList.add("noblur");
                });                
            }
            document.onreadystatechange = () => {
                if (document.readyState == 'complete') {
                    const test = document.querySelectorAll("picture .sliderImage");
                    test.forEach(item => {
                        item.classList.remove("blur");
                        item.classList.add("noblur");
                    });                
                }
            };
        }
    },
}
</script>