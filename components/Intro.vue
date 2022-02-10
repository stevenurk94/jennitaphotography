<template>
    <section>
        <h1>Even voorstellen...</h1>
        <div>
            <div>
                <img src="~/assets/home-picture.jpg" alt="">
                <p>Heee, welkom!</p>
                <p>Leuk dat je een kijkje neemt op mijn site.</p>
                <p>Ik ben Jennita Altena en verkoop mijn eigen fotokaarten sinds 2021. Met deze kaartenverkoop gaat 25% naar het goede doel 'Kom over en help'.</p>
                <p>'Kom over en help' steunen mensen die in kwetsbare omstandigheden leven en door middel van mijn kaartenverkoop wil ik daar graag een steentje aan bijdragen. Want hoe rijk zijn wij in Nederland gezegend met dat wat wij allemaal mogen ontvangen in tegenstelling tot wat deze mensen moeten missen…?!</p>
                <p>Door jouw bestelling te plaatsen, help je deze mensen.</p>
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
    padding: 40px 40px 55px 40px;
}


section div div img {
    float: right;
    width: 29%;
    height: 529px;
    object-fit: cover;
    margin: -40px -40px -55px 3%;
}

section div div p {
    margin-bottom: 10px;
}
section div div p:last-child {
    margin-bottom: 40px;
}


@media only screen and (max-width: 1200px) {

    section > div {
        padding: 30px 30px 35px 30px;
    }

    section div div img {
        width: calc(150px + 15%);
        height: auto;
        object-fit: cover;
        margin: 0 0 0 10px;
        border-radius: var(--border-radius);

    }
 
}

@media only screen and (max-width: 767px) {

    section {
        width: 100%;
    }
    section > div {
        width: 100%;
        padding: 0;
        border-radius: 0;
        padding: 3% 0 8% 0;
    }

    section div div {
        width: 93%;
        left: 0;
        right: 0;
        margin: auto;
    }


    section div div img {
        width: 45%;
        margin: 3% 0 0 2%;
    }

    section div a {
        width: 95%;
        left: 0;
        right: 0;
        margin: auto;
    }


}


</style>