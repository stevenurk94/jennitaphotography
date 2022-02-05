<template>
    <section>
        <h1>Even voorstellen...</h1>
        <div>
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
            <!-- <div></div> -->
            <img src="~/assets/home-picture.jpg" alt="">
        </div>
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
    display: flex;
    background: var(--clr-1-3);
    overflow: hidden;
}

section div div:first-child {
    max-width: 700px;
    padding: 40px 40px 55px 40px;
    min-width: calc(75% - 1vmax);
}

section div div p {
    margin-bottom: 10px;
}

section div div p:nth-child(7) {
    margin-bottom: 40px;
}

section div img {
    width: calc(25% + 1vmax);
    object-fit: cover;
    object-position: center;
}



@media only screen and (max-width: 860px) {

    section > div {
        display: block;
    }

    section div div:first-child {
        min-width: 100%;
    }

    section div img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }


/* 
    section div div {
        left: 0;
        right: 0;
        margin: auto;
    }

    section img {
        width: 100%;
        margin: 70px auto 0 auto;
        max-width: 400px;
        left: 0;
        right: 0;
        display: block;
    } */

}

@media only screen and (max-width: 660px) {
    /* section div a {
        width: 100%;
        margin-top: 30px;
    } */
}



</style>