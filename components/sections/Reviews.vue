<template>
    <section>
        <div class="overlay"></div>
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
                src="~/static/img/jpeg/1024/herfst-6.jpeg" 
                alt="herfst-6">
        </picture>
        <h2 class="title accent-center-white">Wat klanten vertellen</h2>
        <div class="reviews">
            <div class="reviews__card">
                <p class="reviews__card__text">Kaarten voor ieder seizoen of gebeurtenis. Mooie afwisselende foto's. Top.</p>
                <p class="reviews__card__name accent-left">Jannette</p>
            </div>
            <div class="reviews__card">
                <p class="reviews__card__text">Mooie kaarten waar je een mens blij mee maakt.</p>
                <p class="reviews__card__name accent-left">Ina</p>
            </div>
            <div class="reviews__card">
                <p class="reviews__card__text">Prachtige zelgemaakte fotokaarten te verkrijgen. De service is top!</p>
                <p class="reviews__card__name accent-left">Elisabeth</p>
            </div>         
        </div>
    </section>
</template>

<style scoped>

section {
    padding: calc(2% + 95px) 0;
    position: relative;
    clip-path: inset(0);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 50%);
    z-index: 2;
}


img {
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
}


.title {
    color: white;
    opacity: .95;
    width: fit-content;
    z-index: 5;
    margin-bottom: calc(55px + 3%);
    font-size: 40px;
    text-align: center;
    max-width: 95%;
}

.reviews {
    z-index: 5;
    max-width: var(--website-width);
    width: 95%;
    display: flex;
}

.reviews__card {
    width: 100%;
    padding: 3% 3% 2.3% 3%;
    /* padding: calc(20px + 3vmax); */
    background: rgb(255 255 255 / 80%);
    border-radius: var(--border-radius);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.reviews__card:nth-child(2) {
    margin: 0 calc(2% + 2.5vmax);
}



.reviews__card__text {
    position: relative;
    font-style: italic;
    letter-spacing: .5px;
    margin-top: 5px;
}

.reviews__card__text::before {
    display: block;
    position: absolute;
    font-size: 60px;
    width: fit-content;
    height: fit-content;
    line-height: 1;
    opacity: .7;
    content: "\201C";
    left: 0;
    top: calc(-25px - 8%);
    border-right: 20px solid transparent;
}

.reviews__card__name {
    margin: 20px 0 0 0;
    font-size: 14px;
    line-height: 1;
}

.reviews__card__name::after {
    min-width: 15px;
}

h4 {
    color: white;
    font-weight: 300;
    padding-bottom: 3px;
    margin-top: 5px;
    text-align: center;
}


@media only screen and (max-width: 1040px) {
    .reviews {
        display: block;
        width: 85%;
    }

    .reviews__card {
        max-width: 750px;
        left: 0;
        right: 0;
        margin: auto;
        padding: 35px 25px 30px 25px;
    }

    .reviews__card:nth-child(2) {
        margin: 8% auto;
        
    }

    .reviews__card__text::before {
        font-size: 50px;
        top: calc(-20px - 8%);
    }

    .title {
        font-size: calc(15px + 2.5vmax);
    }
}


</style>
