<template>

<main>
    <section>
        <h1>Even voorstellen..</h1>
    </section>

    <section class="testimonial-grid">
        <div class="testimonial">
            <!-- <img src="~/assets/home-picture.jpg" alt=""> -->
        </div>     
        <div class="testimonial">
            <h2>Welkom op Jennita Photography</h2>
            <p>Ik zal mij even voorstellen wie ik ben en hoe ik tot een webshop ben gekomen. Lees daarom snel verder en neem eens gerust een kijkje op mijn site.</p>
        </div>

        <div class="testimonial">
            <h2>Wie ben ik?</h2>
            <p>Ik ben Jennita Altena, woonachtig in Genemuiden. Ik wordt enthousiast van fotografie en wilde hier iets mee doen. Zo kwam ik op het idee om mijn foto's te verkopen als fotokaarten voor het goede doel. Ik wilde mij namelijk nuttig maken voor mensen die moeten missen wat ik hier in Nederland mag ontvangen. Het voelde voor mij als een geroepen plicht.</p>
        </div>     
    
        <div class="testimonial">
            <h2>Wanneer ben ik gestart?</h2>
            <p>Vanaf 2020 ben ik gestart met mijn kaarten verkoop en heb ik mij bij 'Kom over en help' aangemeld als vrijwilliger. De reden dat ik voor 'Kom over en help' heb gekozen, is dat ik achter de visie sta en de organisatie graag wil steunen wat betreft de mensen die ik kwetsbare omstandigheden leven. Helpt u ook mee om mensen die in kwetsbare omstandigheden leven een hoopvolle toekomst te geven? Dit kan door mijn fotocollectie te bekijken en uw bestelling te plaatsen.</p>
            <br>
            <p>Ik zie u graag.</p>
            <br>
            <p>Liefs, Jennita</p>
            <NuxtLink class="button-1" to="/kaarten/">Fotokaarten bestellen</NuxtLink>
        </div>
    </section>
</main>

</template>


<style scoped>

section h1 {
    border-bottom: 1px solid var(--clr-1-3);
    padding-bottom: 10px;
    margin-bottom: 40px;
}


.testimonial-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(7, 1fr);     
}


/* .testimonial:last-child {
    grid-column-start: 3;
    grid-row: 1 / 2;
} */


.testimonial {
    border-radius: var(--border-radius);
    background: var(--clr-1-3);
    padding: 20px;
}

.testimonial p, .testimonial h2 {
    /* color: white; */
}

.testimonial img {
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: contain;
}

.testimonial a {
    margin-top: 50px;
}

.testimonial:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
    background-image: url("~/assets/home-picture.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    

}


.testimonial:nth-child(2) {
    grid-column: span 2;
}

.testimonial:nth-child(3) {
    grid-column: span 3;
}

.testimonial:nth-child(4) {
    grid-column: span 5;
}



</style>