<template>
    <section>
        <div class="introduction">
            <div class="introduction__img">
                <picture>
                    <source
                        type="image/webp"
                        sizes="
                            (max-width: 320px) 160px,
                            (min-width: 320px) and (max-width: 520px) 320px,
                            (min-width: 520px) 640px"
                        srcset="
                            ~/assets/intro_picture/webp_2_160.webp 160w,
                            ~/assets/intro_picture/webp_2_320.webp 320w,
                            ~/assets/intro_picture/webp_2_640.webp 640w">
                    <source
                        type="image/jpeg"
                        sizes="
                            (max-width: 320px) 160px,
                            (min-width: 320px) and (max-width: 520px) 320px,
                            (min-width: 520px 640px"
                        srcset="
                            ~/assets/intro_picture/jpg_2_160.jpeg 160w,
                            ~/assets/intro_picture/jpg_2_320.jpeg 320w,
                            ~/assets/intro_picture/jpg_2_640.jpeg 640w">
                    <img src="~/assets/intro_picture/jpg_2_640.jpeg" alt="Foto Jennita">
                </picture>
            </div>

            <div class="introduction__title">
                <h1 class="accent-left">Even voorstellen</h1>
            </div>
            
            <div class="introduction__text"> 
                <p>Heeey, welkom!</p>
                <p>Leuk dat je een kijkje neemt op mijn website. Ik ben Jennita Altena en ik verkoop sinds 2021 mijn eigen fotokaarten. Van deze opbrengst gaat 25% naar het goede doel 'Kom over en help'.</p>
                <p>'Kom over en help' steunen mensen die in kwetsbare omstandigheden leven. Door middel van mijn kaartenverkoop wil ik daar graag een steentje aan bijdragen. Mede doordat wij in Nederland zo rijk gezegend zijn met het vele wat wij mogen ontvangen en wat juist deze mensen moeten missen.</p>
                <p>Door jouw bestelling te plaatsen, help jij ook deze mensen.</p>
                <p>Zie ik jou?</p>
                <p>Groetjes, Jennita</p>
                <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bestellen</NuxtLink>
            </div>         
        </div>
    </section>
</template>

<style scoped>

section {
    padding: calc(3% + 20px) 0;
    background-color: var(--clr-1-3);
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.introduction {
    max-width: var(--website-width);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
}


/* ########## INTRODUCTION IMAGE ########## */

.introduction__img {
    grid-row: span 2;
    width: 100%;
    margin-right: 100px;
    /* border-radius: var(--border-radius);
    overflow: hidden; */
}

.introduction__img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: var(--border-radius);
    min-width: 200px;
}


/* ########## INTRODUCTION TITLE ########## */

.introduction__title {
    width: 100%;
    grid-column: span 3;
    display: flex;
    align-items: flex-end;
    /* padding-bottom: 20px; */
    width: fit-content;
    margin-bottom: 45px;
    padding-left: 10%;
}

.introduction__title h1 {
    color: var(--clr-1-1);
}




/* ########## INTRODUCTION TEXT ########## */

.introduction__text {
    width: 100%;
    grid-column: span 3;
    padding-left: 10%;
}

.introduction__text p {
    margin-bottom: 10px;
}

.introduction__text a {
    margin-top: 35px;
}



@media only screen and (max-width: 960px) {
    section {
        margin-top: 40%;
    }

    .introduction {
        grid-template-columns: repeat(6, 1fr);

    }

    .introduction__img {
        grid-column: span 2;
        margin-top: -120%; 
        /* 140% */

    }

    .introduction__img img {
        min-width: 100%;
    }


    .introduction__title {
        grid-column: span 4;
        margin-top: calc(-17% - 45px);
        height: min-content;

    }


    .introduction__text {
        grid-column: span 6;
        padding-left: 0;
        margin-top: 25px;

    }

}


@media only screen and (max-width: 640px) {

    section {
        margin-top: 60%;
    }

    .introduction {
        grid-template-columns: repeat(2, 1fr);
    }

    .introduction__img {
        grid-column: span 1;
    }

    .introduction__title {
        grid-column: span 1;
        margin-top: calc(-12% - 80px);
    }

    .introduction__text {
        grid-column: span 2;
    }



    .introduction__text a {
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
}



@media only screen and (max-width: 563px) {

    .introduction__title h1 {
        font-size: calc(22px + .6vmax);
    }

}


@media only screen and (max-width: 542px) {
    .introduction__title {
        margin-top: calc(-14% - 110px);
    }

}





</style>