<template>
    <section>
        <h1>Even voorstellen...</h1>
        <div>
            <div>
                
                <p>Heeey, welkom!</p>
                <p>Leuk dat je een kijkje neemt op mijn website.</p>
                <p>Ik ben Jennita Altena en ik verkoop sinds 2021 mijn eigen fotokaarten. Van deze opbrengst gaat 25% naar het goede doel 'Kom over en help'.</p>

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

                <p>'Kom over en help' steunen mensen die in kwetsbare omstandigheden leven. Door middel van mijn kaartenverkoop wil ik daar graag een steentje aan bijdragen. Mede doordat wij in Nederland zo rijk gezegend zijn met het vele wat wij mogen ontvangen en wat juist deze mensen moeten missen.</p>
                <p>Door jouw bestelling te plaatsen, help jij ook deze mensen.</p>
                <p>Zie ik jou?</p>
                <p>Liefs, Jennita</p>
            </div>
            <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bestellen</NuxtLink>
        </div>


        <!-- <div>
            <div>
                <p>Heee, welkom!</p>
                <p>Leuk dat je een kijkje neemt op mijn site.</p>
                <p>Ik ben Jennita Altena en verkoop mijn eigen fotokaarten sinds 2021. Met deze kaartenverkoop gaat 25% naar het goede doel 'Kom over en help'.</p>
                <p>'Kom over en help' steunen mensen die in kwetsbare omstandigheden leven en door middel van mijn kaartenverkoop wil ik daar graag een steentje aan bijdragen. Want hoe rijk zijn wij in Nederland gezegend met dat wat wij allemaal mogen ontvangen in tegenstelling tot wat deze mensen moeten missen…?!</p>
                <p>Door jouw bestelling te plaatsen, help je deze mensen.</p>
                <p>Zie ik jou?</p>
                <p>Liefs, Jennita</p>
                <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bestellen</NuxtLink>
            </div>
            <img src="~/assets/home-picture.jpg" alt="">
        </div> -->
    </section>
</template>

<style scoped>

section {
    margin: 50px 0;
}

section h1 {
    text-align: center;
    color: var(--clr-1-1);
    margin: 20px 0 0 0;
}

section > div {
    margin: 40px 0;
    border-radius: var(--border-radius);
    background: var(--clr-1-3);
    overflow: hidden;
    padding: 40px;
    box-shadow: var(--boxshadow);
}


section div div img {
    float: right;
    width: 28%;
    height: 559px;
    object-fit: cover;
    margin: -186px -40px -73px 3%;
}


section div div p {
    margin-bottom: 10px;
    width: 70%;
}
section div div p:last-child {
    margin-bottom: 40px;
}


@media only screen and (max-width: 1200px) {

    section > div {
        padding: 30px;
        margin: calc(10px + 2%) 0;
    }

    section div div img {
        width: calc(150px + 15%);
        height: auto;
        object-fit: cover;
        margin: -140px 0 0 10px;
        border-radius: var(--border-radius);
    }

    section div div p {
        width: 62%;
    }
 
}

@media only screen and (max-width: 767px) {

    section {
        width: 100%;
        margin-bottom: 0;
    }
    section > div {
        width: 100%;
        padding: 0;
        border-radius: 0;
        padding: 5% 0 10% 0;
        margin-bottom: 0;
    }

    section div div {
        width: 90%;
        left: 0;
        right: 0;
        margin: auto;
    }

    section div div img {
        width: 45%;
        margin: 0 0 0 2%;
    }

    section div div p {
        width: auto;
    }

    section div a {
        max-width: 90%;
        left: 0;
        right: 0;
        margin: auto;
    }
}


</style>