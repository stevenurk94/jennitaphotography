<template>
    <section>
        <div>
            <h3>Welkom op Jennita Photography</h3>
            <p>Ik zal mij even voorstellen wie ik ben en hoe ik tot een webshop ben gekomen. Lees daarom snel verder en neem eens gerust een kijkje op mijn site.</p>
            <br>
            <h3>Wie ben ik?</h3>
            <p>Ik ben Jennita Altena, woonachtig in Genemuiden. Ik wordt enthousiast van fotografie en wilde hier iets mee doen. Zo kwam ik op het idee om mijn foto's te verkopen als fotokaarten voor het goede doel. Ik wilde mij namelijk nuttig maken voor mensen die moeten missen wat ik hier in Nederland mag ontvangen. Het voelde voor mij als een geroepen plicht.</p>
            <br>
            <h3>Wanneer ben ik gestart?</h3>
            <p>Vanaf 2020 ben ik gestart met mijn kaarten verkoop en heb ik mij bij 'Kom over en help' aangemeld als vrijwilliger. De reden dat ik voor 'Kom over en help' heb gekozen, is dat ik achter de visie sta en de organisatie graag wil steunen wat betreft de mensen die ik kwetsbare omstandigheden leven.</p>
            <p>Helpt u ook mee om mensen die in kwetsbare omstandigheden leven een hoopvolle toekomst te geven? Dit kan door mijn fotocollectie te bekijken en uw bestelling te plaatsen.</p>
            <p>Ik zie u graag</p>
            <p>Liefs, Jennita</p>
            <br>
            <br>
            <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bestellen</NuxtLink>
        </div>
        <img src="~/assets/home-picture.jpg" alt="">


    </section>

    
</template>

<style scoped>



h3 {
    color: var(--clr-1-1);
}

p {
    margin-bottom: 10px;
}


section {
    border: 1px solid var(--clr-1-2);
    margin: 50px 0px;
    border-radius: var(--border-radius);
    padding: 30px;   
    display: flex;
    max-width: 1200px;
}

section div {
    max-width: 700px;
    margin-right: 50px;

}

section div a {
    margin-top: 50px;
}

section img {
    max-width: 300px;
    border-radius: var(--border-radius);
    bottom: 0;
    top: 0;
    margin: auto;
}


@media only screen and (max-width: 860px) {

    section {
        display: block;
        padding: 20px;
    }

    section div {
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
    }

}

@media only screen and (max-width: 660px) {
    section div a {
        width: 100%;
        margin-top: 30px;
    }
}



</style>